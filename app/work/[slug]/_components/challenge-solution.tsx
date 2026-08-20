import { ChunkIdChip } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Project } from '@/types'

type Overview = NonNullable<Project['overview']>

const PRJ_SOURCES = sourcesHref('PRJ')

/**
 * The two halves of the argument, side by side from `lg` so the problem and the
 * answer can be read in one view. Each carries its own chunk id, because prose
 * on this site has to be walkable back to the claim that backs it.
 */
export function ChallengeSolution({ overview }: { overview: Overview }) {
  const blocks = [
    { heading: 'The Challenge', claim: overview.challenge },
    { heading: 'Our Solution', claim: overview.solution }
  ]

  return (
    <div className='grid gap-12 lg:grid-cols-2'>
      {blocks.map((block) => (
        <article key={block.claim.id}>
          <div className='flex flex-wrap items-center gap-3'>
            <h2 className='text-section'>{block.heading}</h2>
            <ChunkIdChip href={PRJ_SOURCES} id={block.claim.id} />
          </div>
          <p className='text-body mt-5 max-w-[64ch]'>{block.claim.text}</p>
        </article>
      ))}
    </div>
  )
}
