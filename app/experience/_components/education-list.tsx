import { Card, ChunkIdChip } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Education } from '@/types'

/**
 * Schooling as two citable records. The degree line keeps the former name of the
 * university, because older certificates and transcripts still carry it.
 */
export function EducationList({ education }: { education: readonly Education[] }) {
  return (
    <ul className='grid gap-6 md:grid-cols-2'>
      {education.map((entry) => (
        <li key={entry.id}>
          <Card className='flex h-full flex-col gap-3'>
            <div className='flex items-start justify-between gap-4'>
              <h3 className='text-heading text-lg'>{entry.school}</h3>
              <ChunkIdChip id={entry.id} href={sourcesHref('EDU')} />
            </div>
            <p className='text-body text-sm'>{entry.degree}</p>
            <p className='text-muted mt-auto font-mono text-xs'>
              {entry.period} · {entry.location}
            </p>
          </Card>
        </li>
      ))}
    </ul>
  )
}
