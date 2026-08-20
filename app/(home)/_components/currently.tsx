import { MapPin } from 'lucide-react'
import { Card, Section } from '@/components/ui'
import { roles } from '@/content'

/** Filtered once at module load — the flag lives in the content, not in this view. */
const currentRoles = roles.filter((role) => role.current)

/**
 * Answers "what is he doing right now" in two cards, replacing the portrait and
 * skill list the old home page spent this space on.
 */
export function Currently() {
  return (
    <Section
      id='currently'
      kicker='Currently'
      meta={`${currentRoles.length} concurrent roles`}
    >
      <div className='mt-8 grid gap-6 md:grid-cols-2'>
        {currentRoles.map((role) => (
          <Card as='article' key={role.org} className='flex flex-col gap-2'>
            <p className='text-accent font-mono text-xs'>{role.period}</p>
            <h2 className='text-2xl'>{role.org}</h2>
            <p className='text-body-strong'>{role.title}</p>
            <p className='text-muted mt-2 flex items-center gap-2 font-mono text-xs'>
              <MapPin aria-hidden='true' className='size-3.5' />
              {role.location}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
