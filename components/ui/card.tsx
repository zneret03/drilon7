import { cn } from '@/lib/cn'
import type { ElementType, ReactNode } from 'react'

export type CardProps = {
  as?: ElementType
  /**
   * Accent border on hover. ONLY when the card element *is* the link (`as={Link}`
   * or `as='a'`). On a card that merely contains links, the whole frame lights up
   * and promises a click the wrapper never handles.
   */
  hover?: boolean
  className?: string
  children: ReactNode
}

/** The one panel unit, so every piece of evidence is framed the same way. */
export function Card({ as: Tag = 'div', hover, className, children }: CardProps) {
  const classes = cn(
    'border border-line bg-surface p-6',
    hover && 'transition ease-standard hover:border-accent',
    className
  )
  return <Tag className={classes}>{children}</Tag>
}
