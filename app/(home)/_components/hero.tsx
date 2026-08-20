import { Section } from '@/components/ui'
import { profile } from '@/content'

/**
 * The first claim the site makes about itself: an index, not a brochure. The
 * eyebrow row reuses the shared section header so the hero cannot drift from it.
 *
 * `leading-[1.02]` is the design's literal display line-height. Without it the h1
 * inherited the body's 1.55, which at the 76px end of the clamp opened a gap the
 * size of a line between the two lines of the headline.
 */
export function Hero() {
  return (
    <Section kicker={profile.role} meta={profile.location}>
      <h1 className='text-display tracking-display text-heading max-w-[16ch] leading-[1.02] font-semibold'>
        {profile.headline}
      </h1>
      <p className='text-lead text-body mt-6 max-w-[64ch]'>{profile.intro}</p>
    </Section>
  )
}
