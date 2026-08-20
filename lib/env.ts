import { z } from 'zod'

/**
 * Server environment. Read lazily so a missing key degrades the ask endpoint to
 * the extractive answerer instead of breaking the build.
 */
const DEFAULT_ASK_MODEL = 'claude-sonnet-5'

const serverEnvSchema = z.object({
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  ASK_MODEL: z.string().min(1).default(DEFAULT_ASK_MODEL)
})

export type ServerEnv = z.infer<typeof serverEnvSchema>

/**
 * Empty has to mean unset. `.env.example` ships a bare `ANTHROPIC_API_KEY=` line,
 * so the documented `cp .env.example .env.local` hands us `''`, not `undefined` —
 * and `''` fails `.min(1)`, which would 500 the ask route instead of letting it
 * fall back to extractive answers. Same reasoning for a blank `ASK_MODEL=`.
 */
function unsetIfBlank(value: string | undefined): string | undefined {
  const trimmed = value?.trim()
  return trimmed ? trimmed : undefined
}

let cached: ServerEnv | null = null

export function serverEnv(): ServerEnv {
  if (cached) return cached

  const parsed = serverEnvSchema.safeParse({
    ANTHROPIC_API_KEY: unsetIfBlank(process.env.ANTHROPIC_API_KEY),
    ASK_MODEL: unsetIfBlank(process.env.ASK_MODEL)
  })

  if (parsed.success) {
    cached = parsed.data
    return cached
  }

  // A malformed environment must degrade to extractive answers, never throw past
  // the route handler and turn every ask into a 500.
  console.error('Invalid server environment; ask falls back to extractive.', {
    issues: parsed.error.issues
  })
  cached = { ASK_MODEL: DEFAULT_ASK_MODEL }

  return cached
}

/** Canonical origin. Public, so it is read straight from the inlined variable. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://drilon7.vercel.app'
).replace(/\/$/, '')
