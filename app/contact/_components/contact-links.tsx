import { ExternalLink } from '@/components/ui'
import { profile } from '@/content'
import { resolveIcon } from '@/lib/icons'

/**
 * The rest of the reach, kept under the mailto so one action stays primary — a
 * single wrapping row of bordered chips, not a card grid, so nothing competes
 * with the address above it.
 *
 * lucide v1 ships no brand glyphs, so the mono label carries the brand name and
 * the generic icon is decoration only.
 */
export function ContactLinks() {
  return (
    <ul aria-label='Profiles elsewhere' className='flex flex-wrap gap-3.5'>
      {profile.socials.map((social) => {
        const Icon = resolveIcon(social.icon)

        return (
          <li key={social.url}>
            <ExternalLink
              href={social.url}
              className='border-line-strong text-body hover:border-accent hover:text-accent ease-standard border px-5 py-3 font-mono text-xs tracking-wider transition hover:no-underline'
            >
              <Icon className='size-4 shrink-0' aria-hidden='true' />
              {social.name}
            </ExternalLink>
          </li>
        )
      })}
    </ul>
  )
}
