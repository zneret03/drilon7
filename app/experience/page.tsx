import { Container } from '@/components/ui'
import { certificates, chunkCountByNamespace, education, roles, skills } from '@/content'
import { cn } from '@/lib/cn'
import { pageMetadata } from '@/lib/seo'
import type { Namespace } from '@/types'
import { CertificateList } from './_components/certificate-list'
import { EducationList } from './_components/education-list'
import { RoleTimeline } from './_components/role-timeline'
import { SkillBars } from './_components/skill-bars'

export const metadata = pageMetadata({
  title: 'Experience',
  description:
    'Every role, bullet, skill, degree and certificate on record — each one a citable chunk of the corpus behind the console.',
  path: '/experience'
})

/**
 * A block heading — 26px h2 with the namespace count beside it. The count is read
 * from the corpus, so a label here cannot overstate what is actually indexed, and
 * it is the one thing this heading carries that the design's bare h2 does not.
 */
function BlockHeader({
  title,
  namespace,
  className
}: {
  title: string
  namespace: Namespace
  className?: string
}) {
  const classes = cn(
    'flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2',
    className
  )

  return (
    <div className={classes}>
      <h2 className='text-subsection'>{title}</h2>
      <span className='text-muted font-mono text-xs'>
        {chunkCountByNamespace[namespace]} chunks · {namespace}
      </span>
    </div>
  )
}

/**
 * The record itself, rendered whole. Nothing on this page is behind a tab, a
 * carousel or a hover, because a claim you cannot read is a claim you cannot cite.
 *
 * Rhythm is per-block and deliberately uneven, matching the approved design:
 * 72/60 page padding, 52px from the lead to the first role, then 72px plus a
 * hairline and 44px of padding above each of the two closing blocks.
 */
export default function ExperiencePage() {
  return (
    <Container className='pt-18 pb-15'>
      <header className='animate-rise'>
        <p className='mono-label text-accent'>Corpus / EXP</p>
        <h1 className='text-display tracking-display text-heading mt-4 leading-[1.05] font-semibold'>
          The whole record, in one pass.
        </h1>
        <p className='text-body mt-5 max-w-[62ch] text-lg'>
          {roles.length} roles and {chunkCountByNamespace.EXP} bullets, all visible. Each
          bullet carries the chunk id the console quotes when it answers a question about
          this history.
        </p>
      </header>

      <div id='roles' className='scroll-mt-bar mt-13'>
        <RoleTimeline roles={roles} />
      </div>

      <section id='skills' className='border-line scroll-mt-bar mt-18 border-t pt-11'>
        <BlockHeader
          title='Skills, measured in shipped years'
          namespace='SKL'
          className='mb-2'
        />
        <SkillBars skills={skills} />
      </section>

      <div className='border-line mt-18 grid gap-10 border-t pt-11 sm:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]'>
        <section id='education' className='scroll-mt-bar'>
          <BlockHeader title='Education' namespace='EDU' className='mb-6' />
          <EducationList education={education} />
        </section>

        <section id='certificates' className='scroll-mt-bar'>
          <BlockHeader title='Certificates' namespace='CRT' className='mb-6' />
          <CertificateList certificates={certificates} />
        </section>
      </div>
    </Container>
  )
}
