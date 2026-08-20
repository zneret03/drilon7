import { EmptyState } from '@/components/ui'
import { cn } from '@/lib/cn'
import type { Trace } from '@/types'

type RetrievalTraceProps = {
  trace: Trace
}

/**
 * The trace is the product: it shows which chunks scored, which were sent to the
 * model and which lost, so the grounding can be audited instead of taken on faith.
 */
export function RetrievalTrace({ trace }: RetrievalTraceProps) {
  return (
    <section className='border-line border-t'>
      <div className='flex flex-wrap items-center justify-between gap-2 px-4 py-3'>
        <h2 className='mono-label text-accent'>retrieval trace</h2>
        <p className='text-muted font-mono text-xs'>
          {trace.matched} matched · top {trace.k} sent to the model
        </p>
      </div>

      {trace.rows.length === 0 ? (
        <div className='px-4 pb-6'>
          <EmptyState
            title='no chunk scored'
            body='Nothing in the corpus matched those terms, which is why the answer above refuses instead of guessing.'
          />
        </div>
      ) : (
        <ol className='divide-line border-line divide-y border-t'>
          {trace.rows.map((row) => (
            <li className='px-4 py-3' key={row.id}>
              <div className='flex items-center gap-3'>
                <span className='text-2xs text-accent w-28 shrink-0 font-mono'>
                  {row.id}
                </span>
                <span aria-hidden='true' className='bg-line block h-1.5 min-w-0 flex-1'>
                  <span
                    className={cn(
                      'block h-full',
                      row.used ? 'bg-accent' : 'bg-line-strong'
                    )}
                    style={{ width: `${row.percent}%` }}
                  />
                </span>
                <span className='text-2xs text-muted w-10 shrink-0 text-right font-mono tabular-nums'>
                  {row.percent}%
                </span>
                <span
                  className={cn(
                    'text-2xs w-10 shrink-0 font-mono',
                    row.used ? 'text-accent' : 'text-muted'
                  )}
                >
                  {row.used ? 'sent' : 'held'}
                </span>
              </div>
              <p className='text-muted mt-1.5 truncate text-sm'>{row.preview}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
