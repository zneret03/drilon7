import { awards, writing } from '@/content'
import { cn } from '@/lib/cn'
import type { ReactNode } from 'react'

type WritingAndRecognitionProps = {
  /** The page owns the rhythm; the 88px above this block arrives from there. */
  className?: string
}

type EntryProps = {
  /** `WRT-01 · dev.to`, `AWD-02 · 2021` — the chunk id, then where it comes from. */
  chunkId: string
  source: string
  title: string
  /** Wraps the row when the entry has somewhere to go. */
  href?: string
}

/**
 * One row, shared by both columns.
 *
 * The two lists are visually identical and differ only in whether the row is a
 * link, so they are one component rather than two that drift. The id stays plain
 * mono text instead of a `ChunkIdChip`: the writing rows are already links, and
 * a chip inside them would nest an anchor in an anchor.
 */
function Entry({ chunkId, source, title, href }: EntryProps) {
  const body: ReactNode = (
    <>
      <span className='text-muted tracking-mono text-2xs block font-mono'>
        {chunkId} · {source}
      </span>
      <span className='text-body-strong text-prose mt-2 block leading-snug'>{title}</span>
    </>
  )

  return (
    <li className='border-line border-t'>
      {href === undefined ? (
        <div className='py-4'>{body}</div>
      ) : (
        <a
          className='hover:text-accent ease-standard block py-4 transition'
          href={href}
          rel='noreferrer noopener'
          target='_blank'
        >
          {body}
        </a>
      )}
    </li>
  )
}

/**
 * Writing and Recognition, paired.
 *
 * They belong side by side: two published posts on their own read as thin, and
 * four awards on their own read as a trophy cabinet. Together they are the
 * "what he has said and what others have said back" block the prototype ended
 * the home page with, and both columns are corpus namespaces (`WRT`, `AWD`).
 *
 * The 56px column gap and the 20px under each heading are the design's; so is
 * the rule-per-row rhythm, which is why the rows carry a `border-t` and no gap.
 */
export function WritingAndRecognition({ className }: WritingAndRecognitionProps) {
  return (
    <div className={cn('grid gap-14 sm:grid-cols-2', className)} id='writing'>
      <section>
        <h2 className='text-subsection mb-5'>Writing</h2>
        <ul>
          {writing.map((article) => (
            <Entry
              chunkId={article.id}
              href={article.url}
              key={article.id}
              source='dev.to'
              title={article.title}
            />
          ))}
        </ul>
      </section>

      <section id='recognition'>
        <h2 className='text-subsection mb-5'>Recognition</h2>
        <ul>
          {awards.map((award) => (
            <Entry
              chunkId={award.id}
              key={award.id}
              source={award.year}
              title={award.title}
            />
          ))}
        </ul>
      </section>
    </div>
  )
}
