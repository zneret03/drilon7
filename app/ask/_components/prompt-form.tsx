import { CornerDownLeft } from 'lucide-react'
import type { FormEvent } from 'react'
import { Button } from '@/components/ui'

/** Matches the endpoint's Zod bound, so the field stops before a 400 does. */
const MAX_QUERY_LENGTH = 500

type PromptFormProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
  pending: boolean
}

/**
 * The console's input, deliberately dumb: the island above owns the request, so
 * this file only reports keystrokes and submits. The field stays editable while a
 * request is in flight — only the submit is held back.
 */
export function PromptForm({ value, onChange, onSubmit, pending }: PromptFormProps) {
  const blocked = pending || value.trim().length === 0

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    // The submit is never `disabled`: a disabled control drops keyboard focus to
    // the body mid-turn, so it stays focusable and refuses the work here instead.
    if (blocked) return
    onSubmit()
  }

  return (
    <form className='flex flex-wrap items-center gap-2' onSubmit={handleSubmit}>
      <label className='sr-only' htmlFor='ask-query'>
        Question for the corpus
      </label>
      <div className='border-line-strong bg-background focus-within:border-accent flex min-w-0 flex-1 items-center gap-2 border px-3'>
        <span aria-hidden='true' className='text-accent font-mono text-sm'>
          &gt;
        </span>
        <input
          autoComplete='off'
          className='text-body-strong placeholder:text-muted h-11 min-w-0 flex-1 bg-transparent font-mono text-sm focus-visible:outline-none'
          id='ask-query'
          maxLength={MAX_QUERY_LENGTH}
          name='query'
          onChange={(event) => onChange(event.target.value)}
          placeholder='what has he shipped with Next.js?'
          value={value}
        />
      </div>
      <Button aria-disabled={blocked} className='aria-disabled:opacity-50' type='submit'>
        Ask
        <CornerDownLeft aria-hidden='true' className='size-4' />
      </Button>
    </form>
  )
}
