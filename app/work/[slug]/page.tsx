import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ButtonLink, Container, Section } from '@/components/ui'
import { ProjectCard } from '@/components/work/project-card'
import { caseStudyBySlug, projectBySlug, projects } from '@/content'
import { pageMetadata } from '@/lib/seo'
import { CasePipeline } from './_components/case-pipeline'
import { CaseSectionBlock } from './_components/case-section'
import { ChallengeSolution } from './_components/challenge-solution'
import { ProjectBreadcrumb } from './_components/project-breadcrumb'
import { ProjectGallery } from './_components/project-gallery'
import { ProjectHeader } from './_components/project-header'
import { ProjectHighlights } from './_components/project-highlights'
import { ProjectOverview } from './_components/project-overview'
import type { Metadata } from 'next'
import type { Project } from '@/types'

type ProjectPageProps = { params: Promise<{ slug: string }> }

/** How many other projects close the page. Velquor ships three; so does this. */
const RELATED_COUNT = 3

/**
 * Every project is a page. A case study is extra depth on top of one, not the
 * condition for having a page at all — which is why this reads `projects`.
 */
export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({ slug: project.slug }))
}

/**
 * The page and its metadata resolve the same slug and have to fail the same
 * way, so the Map lookup and the 404 live in one place.
 */
function loadProject(slug: string): Project {
  const project = projectBySlug.get(slug)
  if (!project) notFound()

  return project
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = loadProject(slug)

  return pageMetadata({
    title: project.title,
    description: caseStudyBySlug.get(slug)?.summary ?? project.blurb,
    path: `/work/${slug}`
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = loadProject(slug)
  const study = caseStudyBySlug.get(slug)
  const { overview } = project
  const gallery = overview?.gallery ?? []
  const related = projects
    .filter((candidate) => candidate.slug !== slug)
    .slice(0, RELATED_COUNT)

  return (
    <Container as='article' className='pt-18 pb-15'>
      <ProjectBreadcrumb title={project.title} />
      <ProjectHeader project={project} />

      {project.image === '' ? null : (
        <div className='border-line-strong bg-surface shadow-hard relative mt-11 aspect-video w-full overflow-hidden border'>
          <Image
            alt={`Screenshot of the ${project.title} interface`}
            className='object-cover object-top'
            fill
            priority
            sizes='(min-width: 1240px) 1184px, 100vw'
            src={project.image}
          />
        </div>
      )}

      <div className='mt-16'>
        <Section kicker='At a glance' title='Project Overview'>
          <ProjectOverview project={project} />
        </Section>

        {overview ? (
          <Section className='mt-22' kicker='Context'>
            <ChallengeSolution overview={overview} />
          </Section>
        ) : null}

        {project.highlights.length === 0 ? null : (
          <Section
            className='mt-22'
            kicker='Capabilities'
            title='Highlights'
            meta={`${project.highlights.length} chunks · PRJ`}
          >
            <ProjectHighlights highlights={project.highlights} />
          </Section>
        )}

        {gallery.length === 0 ? null : (
          <Section
            className='mt-22'
            kicker='Screens'
            title='Project Gallery'
            meta={`${gallery.length} screenshots`}
          >
            <ProjectGallery images={gallery} />
          </Section>
        )}

        {study ? (
          <Section
            className='mt-22'
            kicker='Case study'
            title='How it was built'
            meta={`CSE · ${study.sections.length + 1} chunks`}
          >
            <p className='text-lead text-body-strong max-w-[66ch]'>{study.summary}</p>

            <h3 className='mt-11 text-2xl'>Pipeline</h3>
            <p className='text-muted mt-2 font-mono text-xs'>
              {study.pipeline.length} inspectable stages
            </p>
            <div className='mt-5'>
              <CasePipeline steps={study.pipeline} />
            </div>

            <div className='mt-14'>
              {study.sections.map((section) => (
                <CaseSectionBlock key={section.kicker} {...section} />
              ))}
            </div>
          </Section>
        ) : null}

        <Section
          className='border-line mt-18 border-t pt-11'
          kicker='More projects'
          title='Elsewhere in the archive'
          meta={`${related.length} of ${projects.length - 1}`}
        >
          <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {related.map((candidate) => (
              <ProjectCard key={candidate.slug} project={candidate} />
            ))}
          </div>

          <div className='border-line mt-11 border-t pt-10'>
            <ButtonLink href='/work' size='sm' variant='ghost'>
              <ArrowLeft aria-hidden='true' className='size-4' />
              All work
            </ButtonLink>
          </div>
        </Section>
      </div>
    </Container>
  )
}
