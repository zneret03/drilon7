import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Badge, TagList } from '@/components/ui'
import { cn } from '@/lib/cn'
import type { Project } from '@/types'

export type ProjectCardProps = {
  project: Project
  /** Renders the image taller and the blurb fuller, for a two-up spotlight row. */
  spotlight?: boolean
  className?: string
}

/**
 * One project, wherever it appears — the home grid, the `/work` index, and the
 * "More projects" row at the foot of a detail page all render this.
 *
 * The whole card is the link, so `Card`'s `hover` contract holds: the accent
 * frame promises a click that the wrapper actually handles. Highlights are
 * deliberately absent — they belong on the detail page, not stacked three deep
 * in a grid (see .claude/work-section-parity.md W-06).
 */
export function ProjectCard({ project, spotlight, className }: ProjectCardProps) {
  return (
    <Link
      className={cn(
        'border-line bg-surface hover:border-accent group ease-standard flex flex-col border transition',
        className
      )}
      href={`/work/${project.slug}`}
    >
      {project.image === '' ? null : (
        <div
          className={cn(
            'border-line relative w-full border-b',
            spotlight ? 'aspect-[16/9]' : 'aspect-video'
          )}
        >
          <Image
            alt={`Screenshot of the ${project.title} interface`}
            className='object-cover'
            fill
            sizes={
              spotlight
                ? '(min-width: 1240px) 600px, (min-width: 768px) 50vw, 100vw'
                : '(min-width: 1240px) 390px, (min-width: 768px) 50vw, 100vw'
            }
            src={project.image}
          />
        </div>
      )}

      <div className='flex flex-1 flex-col gap-3 p-6'>
        <p className='text-muted font-mono text-xs'>{project.timeline}</p>
        <h3 className={spotlight ? 'text-2xl' : 'text-xl'}>{project.title}</h3>

        {project.headline === undefined ? null : (
          <Badge tone='accent'>{project.headline}</Badge>
        )}

        <p className={spotlight ? '' : 'text-sm'}>{project.blurb}</p>
        <TagList items={project.tech} />

        <span className='text-accent mt-auto inline-flex items-center gap-1.5 pt-4 font-mono text-xs'>
          View project
          <ArrowUpRight aria-hidden className='size-3.5' />
        </span>
      </div>
    </Link>
  )
}
