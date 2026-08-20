import Link from 'next/link'
import { profile } from '@/content'

/**
 * Identity anchor for the top bar. A Server Component so the identity strings —
 * and the content barrel they come from — stay out of the client bundle; the bar
 * receives it already rendered.
 */
export function BrandMark() {
  return (
    <Link href='/' className='flex shrink-0 items-center gap-3'>
      <span
        aria-hidden='true'
        className='border-accent text-2xs text-accent shadow-hard-sm flex size-[30px] items-center justify-center border font-mono font-bold'
      >
        {profile.initials}
      </span>
      <span className='text-heading font-semibold'>{profile.name}</span>
    </Link>
  )
}
