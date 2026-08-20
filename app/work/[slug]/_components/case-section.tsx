import type { CaseSection } from '@/types'

/**
 * Every write-up section repeats one shape — kicker, heading, prose — so the
 * shape lives here and the page only maps over data.
 */
export function CaseSectionBlock({ kicker, title, body }: CaseSection) {
  return (
    <article className='border-line border-t py-8'>
      <p className='mono-label text-accent'>{kicker}</p>
      <h3 className='mt-3 text-2xl'>{title}</h3>
      <p className='mt-3.5 max-w-[62ch]'>{body}</p>
    </article>
  )
}
