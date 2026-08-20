import Link from 'next/link'
import { Container, ExternalLink } from '@/components/ui'
import { corpus, profile } from '@/content'
import { resolveIcon } from '@/lib/icons'
import { NAV } from '@/lib/nav'

/**
 * Restates the answering contract — how many chunks exist, and that nothing else
 * is drawn on — under every screen, so the claim is not confined to /ask.
 *
 * It also carries the full route list. The bar is the primary path; this is a
 * second, permanently expanded one, so no screen is reachable through exactly
 * one control at exactly one width.
 */
export function Footer() {
  return (
    <footer className='border-line bg-dark-navy mt-10 border-t'>
      <Container className='text-muted text-2xs flex flex-col gap-4 py-6 font-mono'>
        <div className='flex flex-wrap items-center gap-4'>
          <nav aria-label='Site'>
            <ul className='-mx-2 flex flex-wrap items-center'>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='hover:text-accent block px-2 py-1.5'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label='Social profiles' className='lg:ml-auto'>
            <ul className='flex flex-wrap items-center gap-4'>
              {profile.socials.map((social) => {
                const Icon = resolveIcon(social.icon)

                return (
                  <li key={social.name}>
                    <ExternalLink
                      href={social.url}
                      className='text-muted hover:text-accent gap-2'
                    >
                      <Icon aria-hidden='true' className='size-3.5' />
                      {social.name}
                    </ExternalLink>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <p className='max-w-[56ch] font-sans text-xs'>
          Every answer on this site comes from the indexed corpus and nothing else. Ask
          something it does not cover and the console says so instead of guessing.
        </p>

        <div className='flex flex-wrap items-center gap-4'>
          <p>
            {profile.name} · {profile.location}
          </p>
          <p className='sm:ml-auto'>
            <span className='text-accent'>{corpus.length}</span> chunks indexed ·
            retrieval-grounded
          </p>
        </div>
      </Container>
    </footer>
  )
}
