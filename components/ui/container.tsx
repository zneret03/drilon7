import { cn } from '@/lib/cn'
import type { ElementType, ReactNode } from 'react'

export type ContainerProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

/**
 * The page gutter, defined once. Bar, content and footer sit on the same frame,
 * so nothing has to guess the horizontal padding a second time.
 */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  const classes = cn('mx-auto w-full max-w-page px-7', className)
  return <Tag className={classes}>{children}</Tag>
}
