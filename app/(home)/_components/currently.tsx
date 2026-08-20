import { MapPin } from 'lucide-react'
import { Card, Section } from '@/components/ui'
import { roles } from '@/content'

type CurrentlyProps = {
  /** The page owns the rhythm; the 88px above this block arrives from there. */
  className?: string
}

/** Filtered once at module load — the flag lives in the content, not in this view. */
const currentRoles = roles.filter((role) => role.current)

/**
 * Answers "what is he doing right now" in two cards, replacing the portrait and
 * skill list the old home page spent this space on.
 *
 * The card interior follows the design's measured steps — 12px under the dated
 * kicker, 10px under the org — rather than one flex `gap`, which forced the same
 * interval on three pairs the design spaces differently.
 */
export function Currently({ className }: CurrentlyProps) {
  return (
    <Section
      className={className}
      id='currently'
      kicker='Currently'
      meta={`${currentRoles.length} concurrent roles`}
    >
      <div className='grid gap-5 md:grid-cols-2'>
        {currentRoles.map((role) => (
          <Card as='article' key={role.org}>
            <p className='mono-label text-accent'>{role.period}</p>
            <h2 className='mt-3 text-2xl'>{role.org}</h2>
            <p className='text-body-strong mt-2.5 text-base'>{role.title}</p>
            <p className='text-muted mt-4 flex items-center gap-2 font-mono text-xs'>
              <MapPin aria-hidden='true' className='size-3.5' />
              {role.location}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
