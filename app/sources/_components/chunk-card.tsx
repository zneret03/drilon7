import { Badge, Card, ChunkIdChip } from '@/components/ui'
import type { Chunk } from '@/types'

/** Rough characters-per-token ratio for English prose — enough to size a chunk. */
const CHARS_PER_TOKEN = 4

/**
 * The auditable unit: a reader has to be able to compare a cited id against the
 * exact text the retriever saw, so the card shows the whole chunk, never a preview.
 */
export function ChunkCard({ chunk }: { chunk: Chunk }) {
  return (
    <Card as='article'>
      <div className='flex flex-wrap items-center gap-x-3 gap-y-2'>
        <ChunkIdChip id={chunk.id} />
        <Badge tone='quiet'>{chunk.namespace}</Badge>
        <h3 className='text-body-strong font-mono text-xs'>{chunk.origin}</h3>
        <span className='text-2xs text-muted ml-auto font-mono'>
          ~{Math.round(chunk.text.length / CHARS_PER_TOKEN)} tokens (estimate)
        </span>
      </div>
      <p className='text-body-strong mt-4'>{chunk.text}</p>
    </Card>
  )
}
