import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type Tone = 'default' | 'accent' | 'quiet'

const TONES: Record<Tone, string> = {
  default: 'border border-line-strong bg-surface-raised text-body-strong',
  accent: 'border border-accent/40 bg-accent-wash text-accent',
  quiet: 'border border-line text-muted'
}

export type BadgeProps = {
  tone?: Tone
  className?: string
  children: ReactNode
}

/** Small mono label for tech, years and namespaces — chips read as data, not prose. */
export function Badge({ tone = 'default', className, children }: BadgeProps) {
  const classes = cn(
    'inline-flex items-center px-2 py-0.5 font-mono text-2xs',
    TONES[tone],
    className
  )
  return <span className={classes}>{children}</span>
}
