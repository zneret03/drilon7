import { ChunkIdChip } from '@/components/ui'
import { archiveProjects } from '@/content'
import { sourcesHref } from '@/lib/nav'

const LEAD = `${archiveProjects.length} earlier builds where one paragraph is all that is on record — no screenshots, no write-up, and no URL still standing. They are listed rather than dropped, because an archive that hides its thin entries is not an archive, and each one is still a chunk the console can quote.`

/**
 * The blurb-only tier, as a definition list rather than cards: these have no
 * detail page, and a card's "View project" affordance would promise one. The
 * chunk id is the only link, and it goes to the chunk itself.
 */
export function ArchiveList() {
  return (
    <div className='space-y-5'>
      <p className='text-body max-w-[66ch]'>{LEAD}</p>

      <dl className='divide-line border-line divide-y border-y'>
        {archiveProjects.map((project) => (
          <div className='py-5' key={project.id}>
            <dt className='flex flex-wrap items-center gap-3'>
              <ChunkIdChip href={sourcesHref('PRJ')} id={project.id} />
              <span className='text-heading font-mono text-sm'>{project.title}</span>
            </dt>
            <dd className='text-body mt-2 text-sm'>{project.blurb}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
