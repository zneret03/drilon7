import { Badge, ChunkIdChip } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Role } from '@/types'

/**
 * The full employment history in one static pass. The previous site kept three of
 * six roles inside a react-slick carousel, so neither readers nor crawlers ever
 * reached them; here nothing is behind an interaction.
 *
 * Each role is the design's two-column row — a 230px identity column against the
 * bullets — separated by a hairline rather than a rail, and each bullet is a
 * 112px chunk-id gutter against its claim, so the ids line up down the page.
 */
export function RoleTimeline({ roles }: { roles: readonly Role[] }) {
  return (
    <ol>
      {roles.map((role) => (
        <li
          key={`${role.org} ${role.period}`}
          className='border-line grid gap-6 border-t py-9 md:grid-cols-[230px_1fr] md:gap-9'
        >
          <div>
            <h2 className='text-2xl'>{role.org}</h2>
            <p className='text-accent mt-2 text-base'>{role.title}</p>
            <p className='text-muted text-2xs mt-3 font-mono leading-[1.9]'>
              <span className='block'>{role.period}</span>
              <span className='block'>{role.location}</span>
            </p>
            {role.current ? (
              <div className='mt-3'>
                <Badge tone='accent' className='gap-2 uppercase'>
                  <span aria-hidden='true' className='bg-accent size-1.5 rounded-full' />
                  Current
                </Badge>
              </div>
            ) : null}
          </div>

          <div className='min-w-0'>
            {role.context ? (
              <p className='text-muted border-line-strong mb-6 border-l-2 pl-4 text-sm'>
                {role.context}
              </p>
            ) : null}

            <ul>
              {role.bullets.map((bullet) => (
                <li
                  key={bullet.id}
                  className='grid gap-1 py-3 sm:grid-cols-[112px_1fr] sm:gap-4'
                >
                  <ChunkIdChip
                    id={bullet.id}
                    href={sourcesHref('EXP')}
                    className='mt-1 self-start justify-self-start'
                  />
                  <span className='text-body'>{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
