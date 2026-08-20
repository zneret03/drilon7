import { EmptyState } from '@/components/ui'
import { NAMESPACES } from '@/content'
import { ChunkRow } from './chunk-row'
import type { Chunk, Namespace } from '@/types'

/**
 * Renders the filtered corpus as one bordered table, and turns a zero-chunk
 * namespace into a stated gap rather than a blank screen — an empty namespace is
 * a fact about the corpus.
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
        title='Not yet indexed'
        body={`${subject} holds no chunks yet. The namespace stays listed and selectable because hiding it would hide the gap: STY (how he builds) and OPN (positions held) are not written, so the console refuses questions that would need them instead of inventing an answer.`}
      />
    )
  }

  return (
    <ul className='border-line border'>
      {chunks.map((chunk) => (
        <ChunkRow key={chunk.id} chunk={chunk} />
      ))}
    </ul>
  )
}
