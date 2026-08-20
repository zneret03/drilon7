import type { Metadata } from 'next'
import { siteUrl } from './env'
import { profile } from '@/content'

/**
 * One metadata builder for every route. The previous site set a title and
 * nothing else, so shared links previewed blank (action item P2-04).
 */
export function pageMetadata({
  title,
  description,
  path = '/'
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const url = `${siteUrl}${path}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${profile.name}`,
      description,
      url,
      siteName: profile.name,
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${profile.name}`,
      description
    }
  }
}
