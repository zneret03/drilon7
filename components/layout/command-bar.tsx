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
 * Nothing collapses and nothing scrolls out of reach. One row needs about 820px
 * (brand 125 + nav 494 + Ask 91 + two 28px gaps + the 56px gutter), so below
 * `lg` the bar is two rows — brand and Ask on the first, the nav on the second,
 * explicit `order` keeping the DOM order brand → nav → Ask — and the list
 * itself wraps, so overflow is impossible rather than merely visible. Squeezing
 * one row onto a phone left the nav a ~47px window: that was the truncation.
 * At `lg` it is a single row exactly `h-bar` tall again.
 */
export function CommandBar({ brand }: { brand: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const openConsole = useCallback(() => router.push('/ask'), [router])

  useHotkey('k', openConsole)

  return (
    <header className='border-line bg-background/92 sticky top-0 z-50 border-b backdrop-blur'>
      <Container className='lg:h-bar flex flex-wrap items-center gap-x-7 gap-y-2 py-2 lg:py-0'>
        {brand}

        <nav
          aria-label='Primary'
          className='order-last w-full lg:order-1 lg:ml-auto lg:w-auto'
        >
          <ul className='-mx-3 flex flex-wrap items-center gap-0.5 lg:mx-0'>
            {NAV.map((item) => {
              const active = isActive(pathname, item.href)

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'ease-standard block px-3 py-2 font-mono text-sm whitespace-nowrap transition',
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

        <ButtonLink
          href='/ask'
          variant='outline'
          size='sm'
          className='order-2 ml-auto h-9 shrink-0 px-3.5 lg:ml-0'
        >
          Ask
          <Kbd>⌘K</Kbd>
        </ButtonLink>
      </Container>
    </header>
  )
}
