import { Container, Section } from '@/components/ui'
import { NAMESPACES, chunkCountByNamespace, corpus } from '@/content'
import { pageMetadata } from '@/lib/seo'
import { CorpusList } from './_components/corpus-list'
import { NamespaceFilter } from './_components/namespace-filter'
import type { Namespace } from '@/types'

export const metadata = pageMetadata({
  title: 'Sources',
  description:
    'Every chunk the answer engine can cite, grouped by namespace, with the empty namespaces left visible.',
  path: '/sources'
})

const NAMESPACE_KEYS = Object.keys(NAMESPACES) as Namespace[]

const LEAD = `Every claim on this site is one of ${corpus.length} chunks across ${NAMESPACE_KEYS.length} declared namespaces, and this screen is what makes that grounding auditable: each chunk is quoted in full under the id the console cites, and the namespaces that hold nothing stay visible.`

/** `ns` arrives from the URL, so anything that is not a namespace collapses to ALL. */
function toFilter(ns: string | undefined): Namespace | 'ALL' {
  return NAMESPACE_KEYS.find((key) => key === ns) ?? 'ALL'
}

/**
 * The audit surface. An answer is only as trustworthy as the corpus behind it,
 * so the whole corpus is readable here — unpaginated, filter state in the URL.
 */
export default async function SourcesPage({
  searchParams
}: {
  searchParams: Promise<{ ns?: string }>
}) {
  const { ns } = await searchParams
  const active = toFilter(ns)
  const chunks =
    active === 'ALL' ? corpus : corpus.filter((chunk) => chunk.namespace === active)

  return (
    <Container className='py-16'>
      <p className='mono-label text-accent'>Sources</p>
      <h1 className='text-display tracking-display text-heading mt-4 max-w-[18ch] font-semibold'>
        The corpus, in full
      </h1>
      <p className='text-lead mt-6 max-w-[64ch]'>{LEAD}</p>

      <div className='mt-10'>
        <NamespaceFilter
          namespaces={NAMESPACE_KEYS}
          counts={chunkCountByNamespace}
          active={active}
        />
      </div>

      <Section
        className='mt-14'
        kicker='Chunks'
        title={active === 'ALL' ? 'All namespaces' : NAMESPACES[active]}
        meta={`${chunks.length} of ${corpus.length}`}
      >
        <div className='mt-8'>
          <CorpusList chunks={chunks} namespace={active} />
        </div>
      </Section>
    </Container>
  )
}
