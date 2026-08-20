'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button, Chip, Panel } from '@/components/ui'
import { SUGGESTED_QUESTIONS } from '@/lib/suggestions'

type ConsoleTeaserProps = {
  chunkCount: number
  /** The page owns the rhythm; the 44px under the hero arrives from there. */
  className?: string
}

/**
 * Routes to `/ask` instead of fetching: retrieval state belongs to the console
 * screen, and the chunk count arrives as a prop so no corpus reaches the client.
 *
 * The chip row is inset 54px from the left rather than sharing the body's 20px:
 * that is the row's own arithmetic — `p-5` gutter + the 20px `>` column + the
 * 14px gap — so the suggestions line up with the textarea rather than with the
 * glyph. The row carries no rule above it: the only divider inside this panel is
 * the one under its header strip.
 */
export function ConsoleTeaser({ chunkCount, className }: ConsoleTeaserProps) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  function ask(text: string): void {
    const trimmed = text.trim()
    if (trimmed === '') return
    router.push(`/ask?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <Panel
      className={className}
      label='Retrieval console'
      meta={`${chunkCount} chunks indexed`}
    >
      <form
        className='flex items-start gap-3.5 p-5'
        onSubmit={(event) => {
          event.preventDefault()
          ask(query)
        }}
      >
        <span
          aria-hidden='true'
          className='text-accent w-5 shrink-0 font-mono text-xl leading-snug'
        >
          {'>'}
        </span>
        <textarea
          aria-label='Ask a question about this corpus'
          name='q'
          rows={2}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key !== 'Enter' || event.shiftKey) return
            event.preventDefault()
            ask(query)
          }}
          placeholder='Ask about the experience behind the chunks — Enter to send'
          className='text-body-strong text-lead placeholder:text-muted flex-1 resize-none bg-transparent leading-snug'
        />
        <Button className='self-end text-xs tracking-wider' type='submit' variant='solid'>
          ASK
        </Button>
      </form>

      <div className='flex flex-wrap gap-2 pr-5 pb-5 pl-[54px]'>
        {SUGGESTED_QUESTIONS.map((suggestion) => (
          <Chip key={suggestion} type='button' onClick={() => ask(suggestion)}>
            {suggestion}
          </Chip>
        ))}
      </div>
    </Panel>
  )
}
