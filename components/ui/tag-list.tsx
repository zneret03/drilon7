import { Badge } from './badge'
import { cn } from '@/lib/cn'

export type TagListProps = {
  items: readonly string[]
  className?: string
}

/** A project's stack as a set of chips, never a comma-spliced sentence. */
export function TagList({ items, className }: TagListProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item) => (
        <li key={item}>
          <Badge tone='quiet'>{item}</Badge>
        </li>
      ))}
    </ul>
  )
}
