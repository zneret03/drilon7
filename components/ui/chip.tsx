import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

type Size = 'sm' | 'md'

const SIZES: Record<Size, string> = {
  sm: 'font-mono text-2xs px-2.5 py-1',
  md: 'text-sm px-3 py-1.5'
}

export type ChipProps = ComponentProps<'button'> & {
  /** Selected state — reads as pressed. Pair it with `aria-pressed` on filters. */
  active?: boolean
  size?: Size
  className?: string
}

/**
 * The one filter/suggestion pill. Three screens used to hand-roll this on raw
 * buttons with three different sets of chrome, which is how they drifted apart.
 *
 * Unavailability is `aria-disabled`, not `disabled`: a chip a reader can still
 * focus and hear is worth more than one that vanishes from the tab order.
 */
export function Chip({ active, size = 'md', className, ...props }: ChipProps) {
  const classes = cn(
    'inline-flex items-center gap-2 border transition ease-standard aria-disabled:opacity-50',
    SIZES[size],
    active
      ? 'border-accent bg-accent-wash text-accent'
      : 'border-line-strong text-muted hover:border-accent hover:text-accent',
    className
  )
  return <button type='button' className={classes} {...props} />
}
