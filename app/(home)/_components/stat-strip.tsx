import { StatBlock } from '@/components/ui'
import { stats } from '@/content'

/**
 * The figures a reader scans before reading anything. Derived in `@/content`, so
 * the counts cannot go stale the way the hard-coded ones on the old site did.
 */
export function StatStrip() {
  return (
    <section
      aria-label='Key figures'
      className='border-line grid grid-cols-2 gap-8 border-y py-10 lg:grid-cols-4'
    >
      {stats.map((stat) => (
        <StatBlock key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </section>
  )
}
