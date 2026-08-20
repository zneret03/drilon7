import { StatBlock } from '@/components/ui'
import { stats } from '@/content'
import { cn } from '@/lib/cn'

type StatStripProps = {
  /** The page owns the rhythm; the 56px above this strip arrives from there. */
  className?: string
}

/**
 * The figures a reader scans before reading anything. Derived in `@/content`, so
 * the counts cannot go stale the way the hard-coded ones on the old site did.
 *
 * The frame is the design's hairline grid: one `bg-line` ground showing through
 * 1px gaps between cells painted in the page ground, so the dividers are the
 * gaps themselves rather than four borders that double up at every seam.
 */
export function StatStrip({ className }: StatStripProps) {
  return (
    <section
      aria-label='Key figures'
      className={cn(
        'border-line bg-line grid grid-cols-2 gap-px border lg:grid-cols-4',
        className
      )}
    >
      {stats.map((stat) => (
        <div className='bg-background px-5 py-6' key={stat.label}>
          <StatBlock value={stat.value} label={stat.label} />
        </div>
      ))}
    </section>
  )
}
