import Anthropic from '@anthropic-ai/sdk'
import { z } from 'zod'
import { corpus } from '@/content'
import { serverEnv } from '@/lib/env'
import { clientKey, rateLimit } from '@/lib/rate-limit'
import {
  buildTrace,
  clampK,
  extractiveAnswer,
  scoreCorpus,
  systemPrompt,
  DEFAULT_K
} from '@/lib/retrieval'
import type { AskMeta } from '@/types'

export const runtime = 'nodejs'

const askBodySchema = z.object({
  query: z.string().trim().min(1).max(500)
})

/** Per-request answer; nothing here is shareable between callers. */
const noStore = { 'Cache-Control': 'no-store' }

/**
 * Answers one question using only the corpus, and returns the retrieval trace
 * beside the answer so the console can show what the answer was built from.
 *
 * JSON rather than a stream: the citation ids are parsed out of the finished
 * text, and a 2–4 sentence answer does not earn the extra streaming machinery.
 */
export async function POST(request: Request): Promise<Response> {
  const limit = rateLimit(clientKey(request.headers))
  if (!limit.allowed) {
    return Response.json(
      { error: 'Too many questions. Try again shortly.' },
      {
        status: 429,
        headers: { ...noStore, 'Retry-After': String(limit.retryAfterSeconds) }
      }
    )
  }

  const body = await request.json().catch(() => null)
  const parsed = askBodySchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      { error: 'Expected { query: string } of 1 to 500 characters.' },
      { status: 400, headers: noStore }
    )
  }

  const { query } = parsed.data
  const scored = scoreCorpus(query, corpus)
  const k = clampK(DEFAULT_K)
  const top = scored.slice(0, k)
  const trace = buildTrace(query, scored, k)

  const { ANTHROPIC_API_KEY: apiKey, ASK_MODEL: model } = serverEnv()

  let answer = extractiveAnswer(top, corpus.length)
  let engine: AskMeta['engine'] = 'extractive'

  if (apiKey) {
    try {
      const message = await new Anthropic({ apiKey }).messages.create({
        model,
        max_tokens: 400,
        // Thinking tokens bill against max_tokens, so adaptive reasoning would
        // eat this cap and truncate the answer. A 2-4 sentence reply over
        // already-retrieved context does not need it, and disabling it keeps the
        // cost of a public endpoint predictable.
        thinking: { type: 'disabled' },
        system: systemPrompt(top),
        messages: [{ role: 'user', content: query }]
      })

      const text = message.content
        .flatMap((block) => (block.type === 'text' ? [block.text] : []))
        .join('\n')
        .trim()

      // A truncated or refused body is not an answer: the last sentence is cut
      // and a citation clipped before its `]` silently stops being a citation.
      // Degrade exactly as an SDK throw does rather than publish it as generated.
      if (message.stop_reason === 'max_tokens' || message.stop_reason === 'refusal') {
        console.error('[ask] generation stopped at', message.stop_reason)
      } else if (text) {
        answer = text
        engine = 'generated'
      }
    } catch (error) {
      // A model failure is not an error response: the retrieval already
      // succeeded, so the extractive answer and its citations still hold. The
      // console shows `engine: 'extractive'`, which degrades visibly instead of
      // turning a working corpus lookup into a 500.
      console.error('[ask] generation failed, serving the extractive answer', error)
    }
  }

  return Response.json({ answer, trace, engine }, { headers: noStore })
}
