import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

export type ExternalLinkProps = {
  href: string
  children: ReactNode
  className?: string
  /** Trailing arrow. Off by default so inline prose stays quiet. */
  icon?: boolean
}

/**
 * Every off-site link in one place: one `rel`, one target, one arrow — so a
 * reader can always tell they are about to leave the corpus.
 */
export function ExternalLink({ href, children, className, icon }: ExternalLinkProps) {
  const classes = cn(
    'inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline',
    className
  )
  return (
    <a href={href} target='_blank' rel='noreferrer noopener' className={classes}>
      {children}
      {icon ? <ArrowUpRight aria-hidden='true' className='size-4 shrink-0' /> : null}
    </a>
  )
}
