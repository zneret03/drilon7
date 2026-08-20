import type { Metadata } from 'next'
import { ButtonLink, Container } from '@/components/ui'
import { corpus } from '@/content'
import { pageMetadata } from '@/lib/seo'
import { ConsoleTeaser } from './_components/console-teaser'
import { Currently } from './_components/currently'
import { Hero } from './_components/hero'
import { SelectedWork } from './_components/selected-work'
import { StatStrip } from './_components/stat-strip'
import { WritingAndRecognition } from './_components/writing-and-recognition'

export const metadata: Metadata = pageMetadata({
  title: 'Home',
  description:
    'Ian Drilon, senior software engineer. Five years of shipped React and Next.js interfaces, indexed as a citable corpus you can question.',
  path: '/'
})

/**
 * Composes the home sections and reads `corpus.length` here so the one client
 * component on this route never imports the corpus.
 *
 * The rhythm is measured off the approved design, block by block, and it is
 * deliberately NOT uniform: hero → console 44px, console → stats 56px, then 88px
 * between the three closing blocks. That is why there is no `gap-*` on the
 * column — a single gap flattened three different intervals into one.
 */
export default function HomePage() {
  return (
    <Container className='flex flex-col pt-19 pb-10'>
      <Hero />
      <ConsoleTeaser chunkCount={corpus.length} className='mt-11' />
      <StatStrip className='mt-14' />
      <Currently className='mt-22' />
      <SelectedWork className='mt-22' />
      <WritingAndRecognition className='mt-22' />

      {/* Ours, not the prototype's: it ends on the console the page opens with.
          Spaced on the design's own bordered-coda interval — 72px, rule, 44px. */}
      <section className='border-line mt-18 flex flex-col gap-5 border-t pt-11 sm:flex-row sm:items-center sm:justify-between'>
        <p className='text-lead text-body-strong max-w-[56ch]'>
          Everything above is a chunk. Ask the console for the rest: it answers from the
          corpus, cites what it used, and refuses when nothing supports the question.
        </p>
        <ButtonLink href='/ask' variant='solid'>
          Open the console
        </ButtonLink>
      </section>
    </Container>
  )
}
