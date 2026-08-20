import { ChunkIdChip } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Education } from '@/types'

/**
 * Schooling as two citable records, each hung off a single rule the way the design
 * draws them. The degree line keeps the former name of the university, because
 * older certificates and transcripts still carry it.
 */
export function EducationList({ education }: { education: readonly Education[] }) {
  return (
    <ul>
      {education.map((entry) => (
        <li key={entry.id} className='border-line-strong border-l-2 pb-6 pl-4'>
          <ChunkIdChip id={entry.id} href={sourcesHref('EDU')} />
          <h3 className='text-heading mt-2 text-lg'>{entry.school}</h3>
          <p className='text-body mt-1 text-base'>{entry.degree}</p>
          <p className='text-muted text-2xs mt-2 font-mono'>
            {entry.period} · {entry.location}
          </p>
        </li>
      ))}
    </ul>
  )
}
