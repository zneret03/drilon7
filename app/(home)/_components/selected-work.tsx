import { ArrowRight } from 'lucide-react'
import { ButtonLink, Section } from '@/components/ui'
import { ProjectCard } from '@/components/work/project-card'
import { archiveProjects, featuredProjects, projects } from '@/content'

/**
 * How many featured projects the home page shows. Six cards with their highlight
 * lists inline was a page that scrolled past its own argument; this section is a
 * sample of the work and `/work` is the archive of it.
 */
const LANDING_COUNT = 4

/** Sliced once at module load. `featuredProjects` stays whole for `/work`. */
const shown = featuredProjects.slice(0, LANDING_COUNT)

/** Derived, never typed — the old site shipped a project count that went stale. */
const remaining = projects.length + archiveProjects.length - shown.length

/**
 * The evidence, in colour, four cards deep. Each one is the shared `ProjectCard`,
 * so the home grid, the `/work` index and the detail pages cannot drift apart.
 */
export function SelectedWork() {
  return (
    <Section
      id='work'
      kicker='Selected work'
      title='A sample, not the archive'
      meta={`${shown.length} featured`}
    >
      <div className='grid gap-6 md:grid-cols-2'>
        {shown.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className='mt-10 flex flex-col gap-4 sm:flex-row sm:items-center'>
        <ButtonLink href='/work' variant='outline'>
          View all work
          <ArrowRight aria-hidden='true' className='size-4' />
        </ButtonLink>
        {remaining > 0 ? (
          <p className='text-muted font-mono text-xs'>
            {remaining} more {remaining === 1 ? 'project' : 'projects'} on the work index
          </p>
        ) : null}
      </div>
    </Section>
  )
}
