import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonLink, Container, Section } from '@/components/ui'
import { ProjectCard } from '@/components/work/project-card'
import {
  archiveProjects,
  chunkCountByNamespace,
  featuredProjects,
  projects
} from '@/content'
import { pageMetadata } from '@/lib/seo'
import { ArchiveList } from './_components/archive-list'
import { WorkStats } from './_components/work-stats'

export const metadata = pageMetadata({
  title: 'Work',
  description:
    'Every project on record, each one a set of citable chunks, with a private repository or a missing deployment stated rather than hidden.',
  path: '/work'
})

/** Derived from the flag, never a second list. `featuredProjects` is the other half. */
const otherProjects = projects.filter((project) => project.featured === false)

const LEAD = `Every project here is a set of citable chunks — the blurb, each highlight, and, where the write-up exists, the challenge and the solution, ${chunkCountByNamespace.PRJ} of them under PRJ. Where a repository is private or a deployment is not publicly reachable, the page says so instead of hiding it behind a dead link.`

/**
 * The archive itself: the featured spotlight, then the rest of the projects, then
 * the blurb-only tier. Nothing is behind a tab or a "show more" — one static pass,
 * so every claim on the page is readable and every id is walkable to its chunk.
 */
export default function WorkPage() {
  return (
    <Container className='py-16 md:py-24'>
      <nav aria-label='Breadcrumb'>
        <ol className='text-muted flex items-center gap-2 font-mono text-xs'>
          <li>
            <Link className='hover:text-accent' href='/'>
              Home
            </Link>
          </li>
          <li aria-hidden='true'>/</li>
          <li aria-current='page'>Work</li>
        </ol>
      </nav>

      <header className='mt-10'>
        <p className='mono-label text-accent'>The full archive</p>
        <h1 className='text-display tracking-display text-heading mt-4 max-w-[18ch] font-semibold'>
          Every build, and the chunks behind it
        </h1>
        <p className='text-lead text-body mt-6 max-w-[64ch]'>{LEAD}</p>
      </header>

      <div className='mt-14'>
        <WorkStats />
      </div>

      <div className='mt-20 space-y-20'>
        <Section
          id='featured'
          kicker='Featured'
          title='The ones to read first'
          meta={`${featuredProjects.length} of ${projects.length}`}
        >
          <div className='grid gap-6 md:grid-cols-2'>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} spotlight />
            ))}
          </div>
        </Section>

        <Section
          id='everything-else'
          kicker='Everything else'
          title='Not featured, still on record'
          meta={`${otherProjects.length} of ${projects.length}`}
        >
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id='archive'
          kicker='Archive'
          title='Earlier builds, one line each'
          meta={`${archiveProjects.length} entries`}
        >
          <ArchiveList />
        </Section>
      </div>

      <div className='border-line mt-16 border-t pt-8'>
        <ButtonLink href='/contact' size='sm' variant='ghost'>
          Ask about any of it
          <ArrowRight aria-hidden='true' className='size-4' />
        </ButtonLink>
      </div>
    </Container>
  )
}
