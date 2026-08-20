import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

export type SectionProps = {
  id?: string
  kicker: string
  /** Right-hand mono note: a count, a date range, a chunk namespace. */
  meta?: ReactNode
  title?: ReactNode
  className?: string
  children: ReactNode
}

/**
 * The section header — square, kicker, rule, optional meta — lives here so no
 * screen re-implements it. `scroll-mt-bar` keeps the sticky command bar clear of
 * an anchored heading.
 *
 * Deliberately carries NO vertical padding: the page that stacks these owns the
 * rhythm, through one `gap-*` or `space-y-*`. When both did, the gaps added up —
 * two adjacent sections sat 224px apart on /experience.
 */
export function Section({ id, kicker, meta, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-bar', className)}>
      <div className='flex items-center gap-3'>
        <span aria-hidden='true' className='bg-accent size-[7px] shrink-0' />
        <span className='mono-label text-accent'>{kicker}</span>
        <span aria-hidden='true' className='bg-line h-px flex-1' />
        {meta ? <span className='text-muted font-mono text-xs'>{meta}</span> : null}
      </div>
      {title ? <h2 className='text-section mt-6'>{title}</h2> : null}
      <div className='mt-8'>{children}</div>
    </section>
  )
}
