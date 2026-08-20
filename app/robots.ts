import { siteUrl } from '@/lib/env'
import type { MetadataRoute } from 'next'

/**
 * The pages are the corpus, so all of them are crawlable. `/api/` is not content
 * — a crawler calling the ask endpoint would spend model tokens on nobody.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/api/' }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  }
}
