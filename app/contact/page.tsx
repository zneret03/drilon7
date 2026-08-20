import { Download, Mail, MapPin } from 'lucide-react'
import { ButtonLink, Container, Section } from '@/components/ui'
import { ContactLinks } from './_components/contact-links'
import { profile } from '@/content'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact',
  description: `Email ${profile.email} directly — resume, location and links included.`,
  path: '/contact'
})

/**
 * Contact route. The legacy site opened a TypeForm in a new window; a plain
 * `mailto:` removes that hop between reading a claim and asking about it.
 */
export default function ContactPage() {
  return (
    <Container className='py-16 sm:py-24'>
      <h1 className='text-display tracking-display text-heading font-semibold'>
        Ask me directly.
      </h1>

      <Section kicker='Direct line' meta='mailto — no form' className='mt-12'>
        <p className='text-lead text-body mt-6 max-w-[64ch]'>
          Email is the fastest route. Send the team, the stack and the problem you are
          hiring against, and you get a straight answer on whether I am the right engineer
          for it — including when I am not.
        </p>

        <div className='mt-8 flex flex-wrap items-center gap-4'>
          <ButtonLink
            href={`mailto:${profile.email}`}
            variant='solid'
            className='inline-flex items-center gap-2'
          >
            <Mail className='size-4 shrink-0' aria-hidden='true' />
            {profile.email}
          </ButtonLink>

          <ButtonLink
            href={profile.resume}
            variant='outline'
            external
            className='inline-flex items-center gap-2'
          >
            <Download className='size-4 shrink-0' aria-hidden='true' />
            Download resume
          </ButtonLink>
        </div>

        <p className='text-muted mt-8 flex items-center gap-2 font-mono text-xs'>
          <MapPin className='text-accent size-4 shrink-0' aria-hidden='true' />
          Based in {profile.location}
        </p>
      </Section>

      <ContactLinks />
    </Container>
  )
}
