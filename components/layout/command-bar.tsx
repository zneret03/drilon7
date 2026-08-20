'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { ButtonLink, Container, Kbd } from '@/components/ui'
import { useHotkey } from '@/hooks/use-hotkey'
import { cn } from '@/lib/cn'
import { NAV } from '@/lib/nav'
import type { ReactNode } from 'react'

/** '/' would prefix-match every route, so home alone has to match exactly. */
function isActive(pathname: string, href: string): boolean {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

/**
 * The bar is on every screen, so it owns the ⌘K route into the console. Client
 * because it reads the current path and listens for that key; `brand` arrives
 * already rendered so the content barrel stays out of the client bundle.
 *
 * The nav never collapses — on a narrow screen it scrolls sideways rather than
 * hiding behind a hamburger, because a hidden route is a route nobody visits.
 */
export function CommandBar({ brand }: { brand: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const openConsole = useCallback(() => router.push('/ask'), [router])

  useHotkey('k', openConsole)

  return (
    <header className='border-line bg-background/92 sticky top-0 z-50 border-b backdrop-blur'>
      <Container className='h-bar flex items-center gap-6'>
        {brand}

        <nav aria-label='Primary' className='min-w-0 flex-1 overflow-x-auto'>
          <ul className='flex items-center gap-5'>
            {NAV.map((item) => {
              const active = isActive(pathname, item.href)

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'ease-standard font-mono text-sm whitespace-nowrap transition',
                      active ? 'text-accent' : 'text-muted hover:text-accent'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <ButtonLink href='/ask' variant='outline' size='sm' className='shrink-0'>
          Ask
          <Kbd>⌘K</Kbd>
        </ButtonLink>
      </Container>
    </header>
  )
}
