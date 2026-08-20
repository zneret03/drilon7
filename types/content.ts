import type { z } from 'zod'
import type {
  archiveProjectSchema,
  articleSchema,
  awardSchema,
  caseStudySchema,
  certificateSchema,
  chunkIdSchema,
  chunkSchema,
  educationSchema,
  metricSchema,
  namespaceSchema,
  profileSchema,
  projectSchema,
  roleSchema,
  skillSchema,
  socialSchema,
  statSchema
} from '@/content/schema'

/**
 * Public type surface for content. Every type is inferred from the Zod schema
 * that validates it, so a shape can never drift from its validator.
 */
export type ChunkId = z.infer<typeof chunkIdSchema>
export type Namespace = z.infer<typeof namespaceSchema>
export type Chunk = z.infer<typeof chunkSchema>
export type Role = z.infer<typeof roleSchema>
export type RoleBullet = Role['bullets'][number]
export type Project = z.infer<typeof projectSchema>
export type ArchiveProject = z.infer<typeof archiveProjectSchema>
export type CaseStudy = z.infer<typeof caseStudySchema>
export type CaseSection = CaseStudy['sections'][number]
export type PipelineStep = CaseStudy['pipeline'][number]
export type Skill = z.infer<typeof skillSchema>
export type Award = z.infer<typeof awardSchema>
export type Article = z.infer<typeof articleSchema>
export type Education = z.infer<typeof educationSchema>
export type Certificate = z.infer<typeof certificateSchema>
export type Metric = z.infer<typeof metricSchema>
export type Social = z.infer<typeof socialSchema>
export type Stat = z.infer<typeof statSchema>
export type Profile = z.infer<typeof profileSchema>
