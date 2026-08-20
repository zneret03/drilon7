import { Card, ExternalLink, Section } from '@/components/ui'
import { profile } from '@/content'
import { resolveIcon } from '@/lib/icons'

/**
 * The rest of the reach, kept under the mailto so one action stays primary.
 * lucide v1 ships no brand glyphs, so the mono label carries the brand name and
 * the generic icon is decoration only.
 */
export function ContactLinks() {
  return (
    <Section
      kicker='Elsewhere'
      title='Other places I post'
      meta={`${profile.socials.length} profiles`}
      className='mt-20'
    >
      <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {profile.socials.map((social) => {
          const Icon = resolveIcon(social.icon)

          return (
            <li key={social.url}>
              <Card hover className='p-0'>
                <ExternalLink
                  href={social.url}
                  icon
                  className='flex items-center justify-between gap-3 p-6'
                >
                  <span className='flex items-center gap-3'>
                    <Icon className='text-accent size-4 shrink-0' aria-hidden='true' />
                    <span className='mono-label text-body-strong'>{social.name}</span>
                  </span>
                </ExternalLink>
              </Card>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
