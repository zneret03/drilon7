import { EmptyState } from '@/components/ui'
import { cn } from '@/lib/cn'
import type { Trace } from '@/types'

type RetrievalTraceProps = {
  trace: Trace
}

/**
 * The trace is the product: it shows which chunks scored, which were sent to the
 * model and which lost, so the grounding can be audited instead of taken on faith.
 *
 * Row shape is the design's: the id and its numbers on one line, the 3px score bar
 * under them, the preview last — each step 6px apart, rows 8px tall inside.
 */
export function RetrievalTrace({ trace }: RetrievalTraceProps) {
  return (
    <section className='border-line border-t'>
      <div className='flex flex-wrap items-center justify-between gap-2 px-5 py-3'>
        <h2 className='mono-label text-accent'>retrieval trace</h2>
        <p className='text-2xs text-muted font-mono'>
          {trace.matched} matched · top {trace.k} sent to the model
        </p>
      </div>

      {trace.rows.length === 0 ? (
        <div className='px-5 pb-6'>
          <EmptyState
            title='no chunk scored'
            body='Nothing in the corpus matched those terms, which is why the answer above refuses instead of guessing.'
          />
        </div>
      ) : (
        <ol className='divide-line border-line divide-y border-t'>
          {trace.rows.map((row) => (
            <li className='px-5 py-2' key={row.id}>
              <div className='flex items-center gap-2'>
                <span className='text-2xs text-accent shrink-0 font-mono'>{row.id}</span>
                <span
                  className={cn(
                    'text-2xs ml-auto shrink-0 font-mono',
                    row.used ? 'text-accent' : 'text-muted'
                  )}
                >
                  {row.used ? 'sent' : 'held'}
                </span>
                <span className='text-2xs text-muted shrink-0 font-mono tabular-nums'>
                  {row.percent}%
                </span>
              </div>
              <span aria-hidden='true' className='bg-line mt-1.5 block h-[3px] w-full'>
                <span
                  className={cn(
                    'block h-full',
                    row.used ? 'bg-accent' : 'bg-line-strong'
                  )}
                  style={{ width: `${row.percent}%` }}
                />
              </span>
              <p className='text-2xs text-muted mt-1.5 truncate leading-snug'>
                {row.preview}
              </p>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
