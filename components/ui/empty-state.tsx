export type EmptyStateProps = {
  title: string
  body: string
}

/**
 * A stated gap. Declared-but-empty namespaces and missing demos are part of the
 * corpus story, so they get a written explanation rather than a blank or a lie.
 */
export function EmptyState({ title, body }: EmptyStateProps) {
  return (
    <div className='border-line-strong border border-dashed p-6'>
      <p className='mono-label text-muted'>{title}</p>
      <p className='text-muted mt-3 text-sm'>{body}</p>
    </div>
  )
}
