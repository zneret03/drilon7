import { Console } from '@/app/ask/_components/console'
import { Container, Section } from '@/components/ui'
import { corpus } from '@/content'
import { DEFAULT_K } from '@/lib/retrieval'
import { pageMetadata } from '@/lib/seo'

/** Matches the ask endpoint's own bound, so a long seed cannot be born invalid. */
const MAX_SEED_LENGTH = 500

export const metadata = pageMetadata({
  title: 'Console',
  description:
    'Ask a question about the work and get an answer built only from the indexed corpus, with the retrieval trace and a citation for every claim.',
  path: '/ask'
})

/**
 * Server shell for the console: it reads the `?q=` seed from the URL and hands the
 * island only a query and a count, so the corpus never enters the client bundle.
 */
export default async function AskPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string | string[] }>
}) {
  const { q } = await searchParams
  // `/ask?q=a&q=b` arrives as an array, so the seed is normalised to one string
  // here rather than letting a non-string reach the island and throw mid-render.
  const seed = (Array.isArray(q) ? (q[0] ?? '') : (q ?? '')).slice(0, MAX_SEED_LENGTH)

  return (
    <Container className='py-14 md:py-20'>
      <h1 className='text-display tracking-display font-semibold'>Ask the corpus.</h1>
      <p className='text-lead mt-5 max-w-[64ch]'>
        Answers are assembled from {corpus.length} indexed chunks and nothing else. Every
        claim carries the id it came from, and the trace shows which chunks scored, which
        were sent to the model, and which lost.
      </p>
      <Section
        id='console'
        kicker='Retrieval console'
        meta={`${corpus.length} chunks · top ${DEFAULT_K} sent`}
        className='mt-12'
      >
        <Console initialQuery={seed} corpusSize={corpus.length} />
      </Section>
    </Container>
  )
}
