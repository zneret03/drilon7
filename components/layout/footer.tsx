import { Container, ExternalLink } from '@/components/ui'
import { corpus, profile } from '@/content'
import { resolveIcon } from '@/lib/icons'

/**
 * Restates the answering contract — how many chunks exist, and that nothing else
 * is drawn on — under every screen, so the claim is not confined to /ask.
 */
export function Footer() {
  return (
    <footer className='border-line bg-dark-navy border-t'>
      <Container className='flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between'>
        <div className='space-y-2'>
          <p className='mono-label text-accent'>{corpus.length} chunks indexed</p>
          <p className='text-muted max-w-[56ch] text-sm'>
            Every answer here comes from that indexed corpus and nothing else. Ask
            something it does not cover and the console says so instead of guessing.
          </p>
          <p className='text-muted font-mono text-xs'>
            {profile.name} · {profile.location}
          </p>
        </div>

        <nav aria-label='Social profiles'>
          <ul className='flex flex-wrap gap-x-5 gap-y-2'>
            {profile.socials.map((social) => {
              const Icon = resolveIcon(social.icon)

              return (
                <li key={social.name}>
                  <ExternalLink
                    href={social.url}
                    className='text-muted hover:text-accent gap-2 font-mono text-xs'
                  >
                    <Icon aria-hidden='true' className='size-4' />
                    {social.name}
                  </ExternalLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
