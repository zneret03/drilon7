import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

export type PanelProps = {
  /** Mono kicker in the header strip, e.g. `ask · grounded`. */
  label: string
  /** Right-aligned mono note: a chunk count, an engine name. */
  meta?: ReactNode
  className?: string
  children: ReactNode
}

/**
 * The console shell. The `/ask` console and the home teaser are the same object
 * at two sizes, so the frame and its header strip are defined once here instead
 * of being kept in sync by hand in both.
 */
export function Panel({ label, meta, className, children }: PanelProps) {
  return (
    <div className={cn('border-line-strong bg-surface shadow-hard border', className)}>
      <div className='border-line bg-surface-raised flex items-center justify-between gap-4 border-b px-4 py-3'>
        <div className='flex items-center gap-2'>
          <span aria-hidden='true' className='bg-accent size-[9px] shrink-0' />
          <span className='mono-label text-muted'>{label}</span>
        </div>
        {meta ? <span className='text-2xs text-muted font-mono'>{meta}</span> : null}
      </div>
      {children}
    </div>
  )
}
