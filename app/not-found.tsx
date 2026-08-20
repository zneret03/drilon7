import { ArrowLeft, Terminal } from 'lucide-react'
import { ButtonLink, Container } from '@/components/ui'
import { corpus } from '@/content'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Not in the corpus' }

/**
 * A 404 in the site's own vocabulary: pages here are chunks that were indexed or
 * were not, so the dead end points at the console rather than apologising. The
 * whole block is a centred column, the one screen on the site that is.
 */
export default function NotFound() {
  return (
    <Container className='py-32 text-center'>
      <p className='mono-label text-accent'>404 · no matching chunk</p>

      <h1 className='text-display tracking-display text-heading mt-5 font-semibold'>
        Not in the corpus.
      </h1>

      <p className='text-muted mx-auto mt-7 max-w-[46ch] text-lg'>
        That URL is not indexed. {corpus.length} chunks are — every claim on this site is
        one of them, and the console cites the ones it used.
      </p>

      <div className='mt-9 flex flex-wrap justify-center gap-4'>
        <ButtonLink href='/' variant='outline'>
          <ArrowLeft aria-hidden='true' className='size-4' />
          Home
        </ButtonLink>
        <ButtonLink href='/ask' variant='solid'>
          <Terminal aria-hidden='true' className='size-4' />
          Ask the console
        </ButtonLink>
      </div>
    </Container>
  )
}
