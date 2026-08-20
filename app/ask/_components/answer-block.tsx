import { Badge, ChunkIdChip } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { AnswerPart, Turn } from '@/types'

/** How the text was produced, said out loud rather than left for the reader to guess. */
const ENGINE_NOTE: Record<Turn['engine'], string> = {
  generated: 'written by the model from the retrieved chunks only',
  extractive: 'assembled verbatim from the retrieved chunks'
}

type AnswerBlockProps = {
  parts: AnswerPart[]
  engine: Turn['engine']
}

/**
 * Renders one answer with its citations as links, so every claim in the prose can
 * be checked against the chunk it came from.
 */
export function AnswerBlock({ parts, engine }: AnswerBlockProps) {
  return (
    <div className='space-y-3'>
      <p className='text-body-strong'>
        {parts.map((part, index) =>
          part.kind === 'text' ? (
            <span key={`part-${index}`}>{part.text}</span>
          ) : (
            <ChunkIdChip
              className='mx-0.5'
              href={sourcesHref(part.namespace)}
              id={part.id}
              key={`part-${index}`}
            />
          )
        )}
      </p>
      <div className='text-2xs text-muted flex flex-wrap items-center gap-2 font-mono'>
        <Badge tone={engine === 'generated' ? 'accent' : 'quiet'}>{engine}</Badge>
        <span>{ENGINE_NOTE[engine]}</span>
      </div>
    </div>
  )
}
