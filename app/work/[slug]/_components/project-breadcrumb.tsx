import Link from 'next/link'

const TRAIL: readonly { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' }
]

/**
 * Where the reader is, and the two ways back out. The current project is plain
 * text: a link to the page already on screen is a dead control.
 */
export function ProjectBreadcrumb({ title }: { title: string }) {
  return (
    <nav aria-label='Breadcrumb'>
      <ol className='text-muted flex flex-wrap items-center gap-2 font-mono text-xs'>
        {TRAIL.map((crumb) => (
          <li key={crumb.href} className='flex items-center gap-2'>
            <Link className='hover:text-accent' href={crumb.href}>
              {crumb.label}
            </Link>
            <span aria-hidden='true'>/</span>
          </li>
        ))}
        <li aria-current='page' className='text-body-strong'>
          {title}
        </li>
      </ol>
    </nav>
  )
}
