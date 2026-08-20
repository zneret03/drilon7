import { CornerDownLeft } from 'lucide-react'
import type { FormEvent, KeyboardEvent } from 'react'
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
 *
 * The row is the design's prompt row: 20px gutters, a 20px `>` glyph column and a
 * 14px gap, which is what puts the field — and every prose row below it — 54px in.
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

  // A textarea keeps Enter for itself, so the submit gesture is restored by hand.
  // Shift+Enter still breaks the line, which is what the second row is for.
  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>): void {
    if (event.key !== 'Enter' || event.shiftKey) return
    event.preventDefault()
    if (blocked) return
    onSubmit()
  }

  return (
    <form className='flex items-start gap-3.5 px-5 py-5' onSubmit={handleSubmit}>
      <label className='sr-only' htmlFor='ask-query'>
        Question for the corpus
      </label>
      <span
        aria-hidden='true'
        className='text-accent w-5 shrink-0 font-mono text-xl leading-snug'
      >
        &gt;
      </span>
      <textarea
        autoComplete='off'
        className='text-body-strong placeholder:text-muted text-lead min-w-0 flex-1 resize-none bg-transparent leading-snug focus-visible:outline-none'
        id='ask-query'
        maxLength={MAX_QUERY_LENGTH}
        name='query'
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='what has he shipped with Next.js?'
        rows={2}
        value={value}
      />
      <Button
        aria-disabled={blocked}
        className='self-end px-5 text-xs tracking-wider uppercase aria-disabled:opacity-50'
        type='submit'
      >
        Ask
        <CornerDownLeft aria-hidden='true' className='size-4' />
      </Button>
    </form>
  )
}
