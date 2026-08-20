export type StatBlockProps = {
  value: string
  label: string
}

/** One derived figure with the sentence that qualifies it. */
export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className='font-mono'>
      <p className='text-accent text-section leading-none font-semibold'>{value}</p>
      <p className='text-muted mt-3 font-sans text-sm'>{label}</p>
    </div>
  )
}
