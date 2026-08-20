import { Card, ExternalLink, TagList } from '@/components/ui'
import type { Project } from '@/types'
import type { ReactNode } from 'react'

/** One term/value pair. The `<div>` wrapper is what keeps a `<dl>` griddable. */
function Field({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div>
      <dt className='mono-label text-muted'>{term}</dt>
      <dd className='text-body-strong mt-3 text-sm'>{children}</dd>
    </div>
  )
}

/** A URL field that renders its own absence, because `''` is meaningful here. */
function LinkField({
  term,
  href,
  label,
  absence
}: {
  term: string
  href: string
  label: string
  absence: string
}) {
  if (href === '') return <Field term={term}>{absence}</Field>

  return (
    <Field term={term}>
      <ExternalLink href={href} icon>
        {label}
      </ExternalLink>
    </Field>
  )
}

/**
 * Facts before prose, and the same definition list for all ten projects — the
 * four with no `overview` state what they do have instead of borrowing headings
 * their chunks cannot back (see .claude/parity/work-section-parity.md § 3).
 */
export function ProjectOverview({ project }: { project: Project }) {
  const { overview } = project

  return (
    <Card>
      <dl className='grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4'>
        {overview ? (
          <>
            <Field term='Client'>{overview.client}</Field>
            <Field term='Industry'>{overview.industry}</Field>
            <Field term='Timeline'>{project.timeline}</Field>
            <Field term='Services'>
              <ul className='space-y-1.5'>
                {overview.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </Field>
          </>
        ) : (
          <>
            <Field term='Timeline'>{project.timeline}</Field>
            <Field term='Stack'>
              <TagList items={project.tech} />
            </Field>
            <LinkField
              term='Source'
              href={project.source}
              label='View repository'
              absence='Private repository'
            />
            <LinkField
              term='Deployment'
              href={project.demo}
              label='Visit deployment'
              absence='No public deployment'
            />
          </>
        )}
      </dl>
    </Card>
  )
}
