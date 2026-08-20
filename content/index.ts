import { archiveProjects, projects } from './projects'
import awards from './awards'
import caseStudies from './case-studies'
import certificates from './certificates'
import education from './education'
import metrics from './metrics'
import profile from './profile'
import roles from './roles'
import skills from './skills'
import writing from './writing'
import { statSchema } from './schema'
import type { CaseStudy, Chunk, Namespace, Project, Stat } from '@/types'

export {
  archiveProjects,
  projects,
  awards,
  caseStudies,
  certificates,
  education,
  metrics,
  profile,
  roles,
  skills,
  writing
}

/** Namespace labels, shown on the Sources screen. Empty namespaces stay listed. */
export const NAMESPACES: Record<Namespace, string> = {
  EXP: 'Experience bullets',
  PRJ: 'Projects',
  SKL: 'Stack proficiency',
  EDU: 'Education',
  AWD: 'Awards',
  WRT: 'Published writing',
  CRT: 'Certificates',
  MET: 'Verified impact metrics',
  STY: 'How he builds — not yet written',
  OPN: 'Positions held — not yet written',
  CSE: 'Case study write-ups'
}

/** Slug → case study, for the `/work/[slug]` route. */
export const caseStudyBySlug = new Map<string, CaseStudy>(
  caseStudies.map((study) => [study.slug, study])
)

/**
 * What the home page shows. Everything else stays in `projects`, in the corpus,
 * and browsable under /sources — `featured` curates one grid, it does not hide
 * work. This split exists because `featured` used to be a flag nothing read.
 */
export const featuredProjects: Project[] = projects.filter((project) => project.featured)

export const projectBySlug = new Map<string, Project>(
  projects.map((project) => [project.slug, project])
)

// Fail the build, not the page, if a case study points at a project that is gone.
for (const study of caseStudies) {
  if (!projectBySlug.has(study.slug)) {
    throw new Error(`Case study "${study.slug}" has no matching project slug.`)
  }
}

/** A stack-proficiency id is derived, so skills need no hand-written chunk ids. */
const skillChunkId = (name: string): string =>
  `SKL-${name
    .replace(/[^A-Za-z]/g, '')
    .toUpperCase()
    .slice(0, 6)}`

/**
 * Flattens every content source into one retrievable corpus.
 *
 * One function, one pass, no per-namespace special cases beyond the field
 * mapping each source needs. Anything added to `content` becomes citable by
 * adding exactly one block here.
 */
export function buildCorpus(): Chunk[] {
  const chunks: Chunk[] = []

  for (const role of roles) {
    for (const bullet of role.bullets) {
      chunks.push({
        id: bullet.id,
        namespace: 'EXP',
        origin: role.org,
        text: bullet.text,
        meta: `${role.title} ${role.period} ${role.location}`
      })
    }
  }

  for (const project of projects) {
    chunks.push({
      id: project.id,
      namespace: 'PRJ',
      origin: project.title,
      text: project.blurb,
      meta: `${project.tech.join(' ')} ${project.timeline}`
    })

    // A highlight is a claim about the project, so it is citable on its own —
    // same treatment as a role bullet.
    for (const highlight of project.highlights) {
      chunks.push({
        id: highlight.id,
        namespace: 'PRJ',
        origin: project.title,
        text: highlight.text,
        meta: `${project.title} highlight ${project.tech.join(' ')}`
      })
    }

    // The overview prose is rendered on /work/[slug], so it has to be citable
    // for the same reason the case-study sections are.
    if (project.overview) {
      const { challenge, solution, client, industry, services } = project.overview
      const context = `${client} ${industry} ${services.join(' ')}`

      chunks.push({
        id: challenge.id,
        namespace: 'PRJ',
        origin: project.title,
        text: challenge.text,
        meta: `challenge problem ${context}`
      })
      chunks.push({
        id: solution.id,
        namespace: 'PRJ',
        origin: project.title,
        text: solution.text,
        meta: `solution approach built ${context}`
      })
    }
  }

  for (const project of archiveProjects) {
    chunks.push({
      id: project.id,
      namespace: 'PRJ',
      origin: project.title,
      text: project.blurb,
      meta: 'project archive'
    })
  }

  // Case studies were the one module the corpus could not cite, so the /work
  // write-up asserted facts no chunk backed. One chunk per section fixes that.
  for (const study of caseStudies) {
    const project = projectBySlug.get(study.slug)
    // The guard above already threw for a missing slug; this narrows for the compiler.
    if (!project) continue

    for (const [index, section] of study.sections.entries()) {
      chunks.push({
        id: `${study.chunkPrefix}-${String(index + 1).padStart(2, '0')}`,
        namespace: 'CSE',
        origin: project.title,
        text: section.body,
        meta: section.kicker
      })
    }

    const pipelineText = study.pipeline
      .map((step) => `${step.label} (${step.tech})`)
      .join(' → ')

    chunks.push({
      id: `${study.chunkPrefix}-PIPE`,
      namespace: 'CSE',
      origin: project.title,
      text: `Pipeline: ${pipelineText}.`,
      meta: 'case study pipeline architecture'
    })
  }

  for (const skill of skills) {
    chunks.push({
      id: skillChunkId(skill.name),
      namespace: 'SKL',
      origin: skill.name,
      text: `${skill.name} — approximately ${skill.years} years used in production work.`,
      meta: 'skill stack proficiency'
    })
  }

  for (const entry of education) {
    chunks.push({
      id: entry.id,
      namespace: 'EDU',
      origin: entry.school,
      text: `${entry.degree}, ${entry.school}, ${entry.period}, ${entry.location}.`,
      meta: 'education degree college school'
    })
  }

  for (const award of awards) {
    chunks.push({
      id: award.id,
      namespace: 'AWD',
      origin: 'Award',
      text: `${award.title} (${award.year}).`,
      meta: 'award recognition competition'
    })
  }

  for (const article of writing) {
    chunks.push({
      id: article.id,
      namespace: 'WRT',
      origin: 'dev.to',
      text: `Published article on dev.to: ${article.title}`,
      meta: 'writing blog article'
    })
  }

  for (const certificate of certificates) {
    chunks.push({
      id: certificate.id,
      namespace: 'CRT',
      origin: 'Certificate',
      text: `${certificate.title} — ${certificate.subtitle}.`,
      meta: 'certificate credential'
    })
  }

  for (const metric of metrics) {
    chunks.push({
      id: metric.id,
      namespace: 'MET',
      origin: metric.org,
      text: metric.text,
      meta: 'metric impact scale volume'
    })
  }

  return chunks
}

/** Built once per process. The corpus is static content, not request state. */
export const corpus: Chunk[] = buildCorpus()

// Duplicate ids would break the citation contract silently. Fail loudly instead.
const seen = new Set<string>()
for (const chunk of corpus) {
  if (seen.has(chunk.id)) {
    throw new Error(`Duplicate chunk id "${chunk.id}" in the corpus.`)
  }
  seen.add(chunk.id)
}

export const chunkById = new Map<string, Chunk>(corpus.map((chunk) => [chunk.id, chunk]))

export const chunkCountByNamespace: Record<Namespace, number> = Object.fromEntries(
  (Object.keys(NAMESPACES) as Namespace[]).map((namespace) => [
    namespace,
    corpus.filter((chunk) => chunk.namespace === namespace).length
  ])
) as Record<Namespace, number>

const uniqueOrgs = new Set(
  roles.filter((role) => role.org !== 'Freelance').map((r) => r.org)
)
const topStackYears = Math.max(...skills.map((skill) => skill.years))
const verifiedMetric = metrics.at(0)

// The impact stat is read off this metric, so a missing one is a build failure.
if (!verifiedMetric) {
  throw new Error('The MET namespace is empty — the 50k+ stat has no source chunk.')
}

/**
 * Home-page figures, derived rather than typed by hand — the previous site
 * hard-coded a project count that went stale the moment the archive was deduped.
 */
export const stats: Stat[] = [
  {
    value: String(roles.length),
    label: `Roles across ${uniqueOrgs.size} organisations, 2019 to now`
  },
  { value: `${topStackYears} yrs`, label: 'Shipping React and Next.js interfaces' },
  { value: verifiedMetric.value, label: verifiedMetric.statLabel },
  {
    value: String(projects.length + archiveProjects.length),
    label: 'Projects in the public archive'
  }
].map((stat) => statSchema.parse(stat))
