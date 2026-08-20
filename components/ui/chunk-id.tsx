import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { ChunkId } from '@/types'

export type ChunkIdChipProps = {
  id: ChunkId
  /** Where the citation resolves, usually `/sources?ns=EXP`. */
  href?: string
  className?: string
}

/**
 * The citation chip. Every factual claim carries one, which is the whole promise
 * of the site: a reader can walk from any sentence to the chunk behind it.
 */
export function ChunkIdChip({ id, href, className }: ChunkIdChipProps) {
  const classes = cn(
    'inline-flex items-center border border-accent/40 bg-accent-wash px-1.5 font-mono text-2xs text-accent',
    href && 'transition ease-standard hover:bg-accent/20',
    className
  )

  if (!href) return <span className={classes}>{id}</span>

  return (
    <Link href={href} className={classes} aria-label={`Source chunk ${id}`}>
      {id}
    </Link>
  )
}
