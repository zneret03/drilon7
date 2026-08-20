import { ChunkIdChip } from '@/components/ui'
import type { Chunk } from '@/types'

/** Rough characters-per-token ratio for English prose — enough to size a chunk. */
const CHARS_PER_TOKEN = 4

/**
 * One row of the corpus table: id, origin, the whole chunk, a token estimate. A
 * reader has to be able to compare a cited id against the exact text the
 * retriever saw, so the row carries the full chunk, never a preview.
 *
 * Stacks below `md`, where the measured four-column grid (118/96/1fr/72) is
 * wider than a phone.
 */
export function ChunkRow({ chunk }: { chunk: Chunk }) {
  return (
    <li className='border-line hover:bg-surface-raised grid items-start gap-x-5 gap-y-2 border-t px-5 py-4 first:border-t-0 md:grid-cols-[118px_96px_1fr_72px]'>
      <ChunkIdChip id={chunk.id} className='justify-self-start tracking-wider' />
      <span className='text-2xs text-muted font-mono'>{chunk.origin}</span>
      <p className='text-body text-base'>{chunk.text}</p>
      <span className='text-2xs text-muted font-mono md:text-right'>
        ~{Math.round(chunk.text.length / CHARS_PER_TOKEN)}t
      </span>
    </li>
  )
}
