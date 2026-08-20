import { z } from 'zod'
import { NAMESPACE_CODES } from './namespaces'

/**
 * Content shapes. These schemas are the single source of truth: every type in
 * `types` is inferred from them, and every file in `content` is parsed
 * through them at module load. A malformed chunk fails the build, not the page.
 */

/** Chunk id — `NS-SCOPE-NN`, e.g. `EXP-FH-03`. The citation contract depends on it. */
const CHUNK_ID_PATTERN = /^[A-Z]{3}(-[A-Z0-9]+)+$/

export const chunkIdSchema = z
  .string()
  .regex(CHUNK_ID_PATTERN, 'chunk id must look like EXP-FH-03')

/** Derived from `./namespaces` so the code list stays importable without zod. */
export const namespaceSchema = z.enum(NAMESPACE_CODES)

export const roleSchema = z.object({
  org: z.string().min(1),
  title: z.string().min(1),
  location: z.string().min(1),
  period: z.string().min(1),
  current: z.boolean(),
  /** One-line description of the employer. Empty when none is on record. */
  context: z.string(),
  bullets: z.array(z.object({ id: chunkIdSchema, text: z.string().min(1) })).min(1)
})

/** A claim that stands on its own, and therefore carries its own citation. */
export const citableSchema = z.object({
  id: chunkIdSchema,
  text: z.string().min(1)
})

export const projectSchema = z.object({
  id: chunkIdSchema,
  slug: z.string().regex(/^[a-z0-9-]+$/, 'slug must be kebab-case'),
  /**
   * When it was built, in the source's own words — a year for the finished
   * student work, a duration or span for the client and product work. One free
   * field rather than a `^\d{4}$` year plus a duration, because several
   * projects are on record with a length and no start date, and a year would
   * have to be invented to satisfy the stricter shape.
   */
  timeline: z.string().min(1),
  title: z.string().min(1),
  blurb: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
  /** Repository URL, or empty when the source is not public. */
  source: z.string().url().or(z.literal('')),
  /** Live URL, or empty. An absent demo is stated, never faked. */
  demo: z.string().url().or(z.literal('')),
  image: z.string().startsWith('/').or(z.literal('')),
  /** Drives the home page's Selected work grid. Everything else stays citable. */
  featured: z.boolean(),
  /**
   * Notable capabilities, each independently citable — same shape as a role
   * bullet, for the same reason. Empty is the normal case.
   */
  highlights: z.array(citableSchema).default([]),
  /**
   * One short claim in the source's own words, shown as a badge on the card.
   * Optional: three of the older projects have none on record, and a portfolio
   * badge is not worth inventing one for.
   */
  headline: z.string().min(1).optional(),
  /**
   * The depth a `/work/[slug]` page shows: who it was for, what was hard, what
   * was built, and the screenshots. Optional because only the 2026 work has
   * this material written down — a pre-2023 student project would have to have
   * it reconstructed from memory, and every field here becomes a chunk.
   */
  overview: z
    .object({
      client: z.string().min(1),
      industry: z.string().min(1),
      services: z.array(z.string().min(1)).min(1),
      challenge: citableSchema,
      solution: citableSchema,
      gallery: z
        .array(
          z.object({
            src: z.string().startsWith('/'),
            caption: z.string().min(1),
            /** Written per image. A caption reused as alt text describes nothing. */
            alt: z.string().min(1)
          })
        )
        .default([])
    })
    .optional()
})

export const archiveProjectSchema = z.object({
  id: chunkIdSchema,
  title: z.string().min(1),
  blurb: z.string().min(1)
})

export const caseStudySchema = z.object({
  /** Must match a `projectSchema.slug`, checked in `content/index.ts`. */
  slug: z.string().regex(/^[a-z0-9-]+$/),
  /** Citation prefix for this study's chunks, e.g. `CSE-NAIL`. */
  chunkPrefix: z.string().regex(CHUNK_ID_PATTERN, 'chunk prefix must look like CSE-NAIL'),
  summary: z.string().min(1),
  sections: z
    .array(
      z.object({
        kicker: z.string().min(1),
        title: z.string().min(1),
        body: z.string().min(1)
      })
    )
    .min(1),
  pipeline: z
    .array(
      z.object({
        step: z.string().regex(/^\d{2}$/),
        label: z.string().min(1),
        tech: z.string().min(1)
      })
    )
    .min(1)
})

export const skillSchema = z.object({
  name: z.string().min(1),
  /** Approximate years in production work. Approximate, and labelled as such. */
  years: z.number().positive().max(20)
})

export const awardSchema = z.object({
  id: chunkIdSchema,
  year: z.string().regex(/^\d{4}$/),
  title: z.string().min(1)
})

export const articleSchema = z.object({
  id: chunkIdSchema,
  title: z.string().min(1),
  url: z.string().url()
})

export const educationSchema = z.object({
  id: chunkIdSchema,
  school: z.string().min(1),
  degree: z.string().min(1),
  period: z.string().min(1),
  location: z.string().min(1)
})

export const certificateSchema = z.object({
  id: chunkIdSchema,
  title: z.string().min(1),
  subtitle: z.string().min(1),
  /** Local file under /public, so the link never depends on GitHub staying up. */
  file: z.string().startsWith('/')
})

export const metricSchema = z.object({
  id: chunkIdSchema,
  org: z.string().min(1),
  text: z.string().min(1),
  /** Home-page stat rendering, so the figure and its chunk cannot drift apart. */
  value: z.string().min(1),
  statLabel: z.string().min(1)
})

export const socialSchema = z.object({
  name: z.string().min(1),
  url: z.string().url(),
  /** lucide-react export name. Raw SVG is banned across the codebase. */
  icon: z.string().min(1)
})

export const statSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1)
})

export const profileSchema = z.object({
  name: z.string().min(1),
  initials: z.string().length(2),
  role: z.string().min(1),
  location: z.string().min(1),
  headline: z.string().min(1),
  intro: z.string().min(1),
  email: z.string().email(),
  resume: z.string().startsWith('/'),
  socials: z.array(socialSchema).min(1)
})

export const chunkSchema = z.object({
  id: chunkIdSchema,
  namespace: namespaceSchema,
  /** Where the claim comes from — employer, project title, "Award". */
  origin: z.string().min(1),
  text: z.string().min(1),
  /** Extra terms the scorer may match on but that are not shown as prose. */
  meta: z.string()
})
