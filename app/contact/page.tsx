import { Download, MapPin } from 'lucide-react'
import { ButtonLink, Container } from '@/components/ui'
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
 *
 * One left-aligned block — kicker, claim, lead, address, reach — so the address
 * itself is the largest interactive thing on the screen.
 */
export default function ContactPage() {
  return (
    <Container className='pt-25 pb-22'>
      <p className='mono-label text-accent'>Contact</p>

      <h1 className='text-display tracking-display text-heading mt-4 max-w-[15ch] font-semibold'>
        Open to senior frontend work.
      </h1>

      <p className='text-lead text-body mt-6 max-w-[58ch]'>
        Email is the fastest route. Send the team, the stack and the problem you are
        hiring against, and you get a straight answer on whether I am the right engineer
        for it — including when I am not.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className='text-accent border-accent/40 hover:border-accent ease-standard sm:text-section mt-10 inline-block border-b text-2xl tracking-tight transition'
      >
        {profile.email}
      </a>

      <div className='mt-9 flex flex-wrap items-center gap-4'>
        <ButtonLink href={profile.resume} variant='outline' external>
          <Download className='size-4 shrink-0' aria-hidden='true' />
          Download resume
        </ButtonLink>

        <p className='text-muted flex items-center gap-2 font-mono text-xs'>
          <MapPin className='text-accent size-4 shrink-0' aria-hidden='true' />
          Based in {profile.location}
        </p>
      </div>

      <div className='mt-14'>
        <ContactLinks />
      </div>
    </Container>
  )
}
