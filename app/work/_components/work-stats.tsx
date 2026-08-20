import { StatBlock } from '@/components/ui'
import { archiveProjects, chunkCountByNamespace, projects } from '@/content'
import type { Stat } from '@/types'

/** Counted, not assumed: only the 2026 entries have `overview` written down. */
const withOverview = projects.filter((project) => project.overview !== undefined).length

/**
 * Every figure is read off the corpus at module load, so none of them can go
 * stale the way the legacy hard-coded project count did.
 *
 * Deliberately no "industries served" (parity W-08): `overview.industry` exists
 * only on the projects that carry an overview, so any such figure would either
 * undercount the archive or imply the older projects have an industry on
 * record. Do not add it — there is nothing to derive it from.
 */
const figures: Stat[] = [
  { value: String(projects.length), label: 'Projects on record, newest first' },
  {
    value: String(withOverview),
    label: 'With a written overview: client, challenge, solution'
  },
  {
    value: String(archiveProjects.length),
    label: 'Archive entries, one paragraph each'
  },
  {
    value: String(chunkCountByNamespace.PRJ),
    label: 'PRJ chunks the console can cite'
  }
]

/** The figures a reader scans before any card. All four are derived, none typed. */
export function WorkStats() {
  return (
    <section
      aria-label='Archive figures'
      className='border-line grid grid-cols-2 gap-x-11 gap-y-12 border-y py-6 lg:grid-cols-4'
    >
      {figures.map((figure) => (
        <StatBlock key={figure.label} value={figure.value} label={figure.label} />
      ))}
    </section>
  )
}
