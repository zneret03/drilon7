'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { LoaderCircle, TriangleAlert } from 'lucide-react'
import { AnswerBlock } from '@/app/ask/_components/answer-block'
import { PromptForm } from '@/app/ask/_components/prompt-form'
import { RetrievalTrace } from '@/app/ask/_components/retrieval-trace'
import { SuggestionChips } from '@/app/ask/_components/suggestion-chips'
import { askCorpus } from '@/app/ask/_lib/ask-client'
import { parseAnswer } from '@/app/ask/_lib/parse-answer'
import { EmptyState, Panel } from '@/components/ui'
import { cn } from '@/lib/cn'
import { SUGGESTED_QUESTIONS } from '@/lib/suggestions'
import type { ConsoleStatus } from '@/app/ask/_types'
import type { Turn } from '@/types'

type ConsoleProps = {
  initialQuery: string
  corpusSize: number
}

/**
 * The site's only client island. A question needs local state and a request, and
 * this is the smallest boundary that can hold both — the page around it, and the
 * corpus it answers from, stay on the server.
 */
export function Console({ initialQuery, corpusSize }: ConsoleProps) {
  const [input, setInput] = useState(initialQuery)
  const [turns, setTurns] = useState<Turn[]>([])
  const [status, setStatus] = useState<ConsoleStatus>('idle')
  const [error, setError] = useState<string | null>(null)
  const pending = useRef(false)
  const seeded = useRef(false)
  const latestHeading = useRef<HTMLHeadingElement | null>(null)
  // Only a question the reader asked moves focus; the `?q=` replay must not.
  const focusNextAnswer = useRef(false)

  const ask = useCallback(async (query: string) => {
    if (pending.current) return
    pending.current = true

    try {
      // Trimmed inside the try: a seed can arrive from the URL, and a bad value
      // belongs on the console's error line rather than in an unhandled rejection.
      const trimmed = query.trim()
      if (trimmed.length === 0) return

      setStatus('retrieving')
      setError(null)

      const result = await askCorpus(trimmed)
      // The model can only honestly cite what retrieval sent it, so anything else
      // it prints is not a citation.
      const sent = new Set(
        result.trace.rows.filter((row) => row.used).map((row) => row.id)
      )

      setTurns((previous) => [
        ...previous,
        {
          query: trimmed,
          parts: parseAnswer(result.answer, sent),
          trace: result.trace,
          engine: result.engine
        }
      ])
      setInput('')
      setStatus('idle')
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'The console could not answer.')
      setStatus('error')
    } finally {
      pending.current = false
    }
  }, [])

  // `?q=` is a seed, not state: it is replayed once and then belongs to the user.
  useEffect(() => {
    if (seeded.current) return
    seeded.current = true
    void ask(initialQuery)
  }, [ask, initialQuery])

  const turnCount = turns.length

  // Submitting clears the field, so focus has to be given somewhere deliberate.
  useEffect(() => {
    if (!focusNextAnswer.current) return
    focusNextAnswer.current = false
    latestHeading.current?.focus()
  }, [turnCount])

  const latest = turns.at(-1)
  const retrieving = status === 'retrieving'

  function submit(query: string): void {
    focusNextAnswer.current = true
    void ask(query)
  }

  return (
    <Panel label='ask · grounded' meta={`${corpusSize} chunks indexed`}>
      <div className='border-line space-y-4 border-b p-4'>
        <PromptForm
          value={input}
          onChange={setInput}
          onSubmit={() => submit(input)}
          pending={retrieving}
        />
        <SuggestionChips
          items={SUGGESTED_QUESTIONS}
          onSelect={(question) => {
            setInput(question)
            submit(question)
          }}
          disabled={retrieving}
        />
      </div>

      {/* Mounted empty from the first render: a live region added later is silent. */}
      <div aria-atomic='false' aria-live='polite' className='divide-line divide-y'>
        {turns.map((turn, index) => (
          <article className='animate-rise space-y-3 px-4 py-5' key={`turn-${index}`}>
            <h2
              className='flex items-baseline gap-2 font-mono text-sm'
              ref={index === turnCount - 1 ? latestHeading : null}
              tabIndex={-1}
            >
              <span aria-hidden='true' className='text-accent'>
                &gt;
              </span>
              {turn.query}
            </h2>
            <AnswerBlock parts={turn.parts} engine={turn.engine} />
          </article>
        ))}

        {turnCount === 0 && status === 'idle' ? (
          <div className='px-4 py-6'>
            <EmptyState
              title='nothing asked yet'
              body={`Pick a question or type one. Answers are assembled only from the ${corpusSize} indexed chunks, and anything they do not support is refused.`}
            />
          </div>
        ) : null}
      </div>

      {/* Stays mounted and toggles its text, so the status is announced every turn. */}
      <p
        className={cn(
          'text-muted flex items-center gap-2 font-mono text-xs',
          retrieving && 'border-line border-t px-4 py-5'
        )}
        role='status'
      >
        {retrieving ? (
          <>
            <LoaderCircle
              aria-hidden='true'
              className='text-accent size-3.5 animate-spin'
            />
            retrieving · ranking · grounding
          </>
        ) : null}
      </p>

      {error !== null ? (
        <p
          className='text-body-strong border-line flex items-start gap-2 border-t px-4 py-5 font-mono text-xs'
          role='alert'
        >
          <TriangleAlert
            aria-hidden='true'
            className='text-accent mt-0.5 size-3.5 shrink-0'
          />
          {error}
        </p>
      ) : null}

      {latest ? <RetrievalTrace trace={latest.trace} /> : null}
    </Panel>
  )
}
