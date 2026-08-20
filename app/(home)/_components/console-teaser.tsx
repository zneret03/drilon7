'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button, Chip, Panel } from '@/components/ui'
import { SUGGESTED_QUESTIONS } from '@/lib/suggestions'

/**
 * Routes to `/ask` instead of fetching: retrieval state belongs to the console
 * screen, and the chunk count arrives as a prop so no corpus reaches the client.
 */
export function ConsoleTeaser({ chunkCount }: { chunkCount: number }) {
  const router = useRouter()
  const [query, setQuery] = useState('')

  function ask(text: string): void {
    const trimmed = text.trim()
    if (trimmed === '') return
    router.push(`/ask?q=${encodeURIComponent(trimmed)}`)
  }

  return (
    <Panel label='Retrieval console' meta={`${chunkCount} chunks indexed`}>
      <form
        className='flex items-start gap-3 p-4'
        onSubmit={(event) => {
          event.preventDefault()
          ask(query)
        }}
      >
        <span aria-hidden='true' className='text-accent pt-1 font-mono text-lg'>
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
          className='text-body-strong placeholder:text-muted flex-1 resize-none bg-transparent font-mono text-sm'
        />
        <Button type='submit' variant='solid'>
          ASK
        </Button>
      </form>

      <div className='border-line flex flex-wrap gap-2 border-t p-4'>
        {SUGGESTED_QUESTIONS.map((suggestion) => (
          <Chip key={suggestion} type='button' onClick={() => ask(suggestion)}>
            {suggestion}
          </Chip>
        ))}
      </div>
    </Panel>
  )
}
