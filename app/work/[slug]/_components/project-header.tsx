import { GitBranch, Globe } from 'lucide-react'
import { Badge, ChunkIdChip, ExternalLink, TagList } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Project } from '@/types'

const PRJ_SOURCES = sourcesHref('PRJ')

/**
 * Opens every project page, not only the one with a case study: when it was
 * built, what it is, the one claim on record, and the chunk that backs it.
 *
 * A private repo or an undeployed build is written out rather than dropped, so
 * the header never reads as a link that failed to render.
 */
export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className='mt-10'>
      <p className='tracking-mono text-muted font-mono text-xs'>{project.timeline}</p>

      <h1 className='text-display tracking-display text-heading mt-4 max-w-[18ch] font-semibold'>
        {project.title}
      </h1>

      <p className='text-lead text-body-strong mt-6 max-w-[66ch]'>{project.blurb}</p>

      <div className='mt-11 flex flex-wrap items-center gap-3'>
        {project.headline === undefined ? null : (
          <Badge tone='accent'>{project.headline}</Badge>
        )}
        <ChunkIdChip href={PRJ_SOURCES} id={project.id} />
      </div>

      <TagList className='mt-5' items={project.tech} />

      <ul className='text-muted mt-4 flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-xs'>
        <li className='flex items-center gap-2'>
          <GitBranch aria-hidden='true' className='size-4 shrink-0' />
          {project.source === '' ? (
            <span>Private repository</span>
          ) : (
            <ExternalLink href={project.source} icon>
              Source repository
            </ExternalLink>
          )}
        </li>
        <li className='flex items-center gap-2'>
          <Globe aria-hidden='true' className='size-4 shrink-0' />
          {project.demo === '' ? (
            <span>No public deployment</span>
          ) : (
            <ExternalLink href={project.demo} icon>
              Live deployment
            </ExternalLink>
          )}
        </li>
      </ul>
    </header>
  )
}
