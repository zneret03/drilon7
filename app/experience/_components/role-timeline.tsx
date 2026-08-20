import { Badge, ChunkIdChip } from '@/components/ui'
import { cn } from '@/lib/cn'
import { sourcesHref } from '@/lib/nav'
import type { Role } from '@/types'

/**
 * The full employment history in one static pass. The previous site kept three of
 * six roles inside a react-slick carousel, so neither readers nor crawlers ever
 * reached them; here nothing is behind an interaction.
 */
export function RoleTimeline({ roles }: { roles: readonly Role[] }) {
  return (
    <ol>
      {roles.map((role, index) => {
        const isLast = index === roles.length - 1

        return (
          <li
            key={`${role.org} ${role.period}`}
            className={cn(
              'grid grid-cols-[0.75rem_1fr] gap-x-5',
              isLast ? 'pb-0' : 'pb-12'
            )}
          >
            <div className='relative flex justify-center'>
              <span
                aria-hidden
                className={cn(
                  'bg-line absolute top-0 left-1/2 w-px -translate-x-1/2',
                  isLast ? 'h-3' : 'bottom-0'
                )}
              />
              <span
                aria-hidden
                className={cn(
                  'relative mt-2 size-3 border',
                  role.current
                    ? 'border-accent bg-accent'
                    : 'border-line-strong bg-background'
                )}
              />
            </div>

            <div className='min-w-0'>
              <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                <h3 className='text-heading text-xl'>{role.title}</h3>
                <span className='text-accent font-mono text-sm'>{role.org}</span>
                {role.current ? <Badge tone='accent'>Current</Badge> : null}
              </div>

              <p className='text-muted mt-1 font-mono text-xs'>
                {role.period} · {role.location}
              </p>

              {role.context ? (
                <p className='text-body mt-3 max-w-[68ch] text-sm'>{role.context}</p>
              ) : null}

              <ul className='mt-5 space-y-3'>
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.id}
                    className='flex flex-wrap items-baseline gap-x-2 gap-y-1'
                  >
                    <span className='text-body max-w-[70ch]'>{bullet.text}</span>
                    <ChunkIdChip id={bullet.id} href={sourcesHref('EXP')} />
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
