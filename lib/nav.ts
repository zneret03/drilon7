import type { Namespace } from '@/types/content'

/** One nav entry. `href` is always a real route — no hash links, no dead labels. */
export type NavItem = {
  href: string
  label: string
}

/**
 * The single nav definition. The command bar highlights against it and the
 * footer and sitemap read the same list, so a new screen is declared once.
 */
export const NAV: readonly NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/work', label: 'Work' },
  { href: '/ask', label: 'Console' },
  { href: '/sources', label: 'Sources' },
  { href: '/contact', label: 'Contact' }
]

/**
 * Canonical link to the sources index, optionally pre-filtered to one namespace.
 * Centralised so the query-string shape is declared once.
 */
export function sourcesHref(namespace: Namespace | 'ALL'): string {
  return namespace === 'ALL' ? '/sources' : `/sources?ns=${namespace}`
}
