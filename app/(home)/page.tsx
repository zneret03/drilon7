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
 */
export default function HomePage() {
  return (
    <Container className='flex flex-col gap-16 py-14 md:gap-20 md:py-16'>
      <Hero />
      <ConsoleTeaser chunkCount={corpus.length} />
      <StatStrip />
      <Currently />
      <SelectedWork />
      <WritingAndRecognition />

      <section className='border-line flex flex-col gap-5 border-t pt-10 sm:flex-row sm:items-center sm:justify-between'>
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
