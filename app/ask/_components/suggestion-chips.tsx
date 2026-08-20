import { Chip } from '@/components/ui'

type SuggestionChipsProps = {
  items: readonly string[]
  onSelect: (question: string) => void
  disabled: boolean
}

/**
 * Cold start: an empty console looks like a search box. One click on a question
 * the corpus can actually answer shows what it does instead. The chips stay
 * focusable while a request is in flight — a `disabled` control would throw
 * keyboard focus back to the body — so the guard lives in the handler.
 *
 * Chip metrics come from the design: 8px between them, 6px/13px inside, at 13px.
 * The row's inset is the caller's, so the chips line up under the field.
 */
export function SuggestionChips({ items, onSelect, disabled }: SuggestionChipsProps) {
  function select(question: string): void {
    if (disabled) return
    onSelect(question)
  }

  return (
    <ul aria-label='Suggested questions' className='flex flex-wrap gap-2'>
      {items.map((item) => (
        <li key={item}>
          <Chip
            aria-disabled={disabled}
            className='px-3.5 text-xs'
            onClick={() => select(item)}
            size='md'
          >
            {item}
          </Chip>
        </li>
      ))}
    </ul>
  )
}
