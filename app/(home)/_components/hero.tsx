import { Section } from '@/components/ui'
import { profile } from '@/content'

/**
 * The first claim the site makes about itself: an index, not a brochure. The
 * eyebrow row reuses the shared section header so the hero cannot drift from it.
 */
export function Hero() {
  return (
    <Section kicker={profile.role} meta={profile.location}>
      <h1 className='text-display tracking-display text-heading mt-8 max-w-[16ch] font-semibold'>
        {profile.headline}
      </h1>
      <p className='text-lead text-body mt-6 max-w-[64ch]'>{profile.intro}</p>
    </Section>
  )
}
