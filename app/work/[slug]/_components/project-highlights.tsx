import { ChunkIdChip } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Project } from '@/types'

type Highlight = Project['highlights'][number]

const PRJ_SOURCES = sourcesHref('PRJ')

/**
 * The results, stated once. Every highlight is already its own chunk, so it is
 * listed under the id the console cites rather than paraphrased into a summary.
 */
export function ProjectHighlights({ highlights }: { highlights: Highlight[] }) {
  return (
    <ul className='divide-line divide-y'>
      {highlights.map((highlight) => (
        <li key={highlight.id} className='flex flex-col gap-3 py-5 sm:flex-row sm:gap-6'>
          <ChunkIdChip className='self-start' href={PRJ_SOURCES} id={highlight.id} />
          <p className='text-body max-w-[70ch]'>{highlight.text}</p>
        </li>
      ))}
    </ul>
  )
}
