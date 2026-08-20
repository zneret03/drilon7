import { projects } from '@/content'
import { siteUrl } from '@/lib/env'
import { NAV } from '@/lib/nav'
import type { MetadataRoute } from 'next'

/**
 * Derived from the nav plus the content, never a hand-kept third list. The nav
 * links `/work`; the sitemap adds one entry per project detail page, which is
 * every project now that a case study is extra depth rather than the entry
 * condition for having a page.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    ...NAV.map((item) => ({
      url: `${siteUrl}${item.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: item.href === '/' ? 1 : 0.8
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: project.featured ? 0.7 : 0.5
    }))
  ]
}
