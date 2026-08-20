import { EmptyState } from '@/components/ui'
import { NAMESPACES } from '@/content'
import { ChunkCard } from './chunk-card'
import type { Chunk, Namespace } from '@/types'

/**
 * Renders the filtered corpus, and turns a zero-chunk namespace into a stated
 * gap rather than a blank screen — an empty namespace is a fact about the corpus.
 */
export function CorpusList({
  chunks,
  namespace
}: {
  chunks: Chunk[]
  namespace: Namespace | 'ALL'
}) {
  if (chunks.length === 0) {
    const subject =
      namespace === 'ALL' ? 'The corpus' : `${namespace} (${NAMESPACES[namespace]})`

    return (
      <EmptyState
        title='Declared, deliberately unwritten'
        body={`${subject} holds no chunks yet. The namespace stays listed and selectable because hiding it would hide the gap: STY (how he builds) and OPN (positions held) are not written, so the console refuses questions that would need them instead of inventing an answer.`}
      />
    )
  }

  return (
    <ul className='space-y-4'>
      {chunks.map((chunk) => (
        <li key={chunk.id}>
          <ChunkCard chunk={chunk} />
        </li>
      ))}
    </ul>
  )
}
