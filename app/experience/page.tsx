import { Container, Section } from '@/components/ui'
import { certificates, chunkCountByNamespace, education, roles, skills } from '@/content'
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

/** Header meta is read from the corpus, so a count cannot overstate the content. */
const chunkMeta = (namespace: Namespace): string =>
  `${chunkCountByNamespace[namespace]} chunks · ${namespace}`

/**
 * The record itself, rendered whole. Nothing on this page is behind a tab, a
 * carousel or a hover, because a claim you cannot read is a claim you cannot cite.
 */
export default function ExperiencePage() {
  return (
    <Container className='py-16 md:py-24'>
      <header className='animate-rise'>
        <p className='mono-label text-accent'>Experience</p>
        <h1 className='text-display tracking-display text-heading mt-4 max-w-[16ch] font-semibold'>
          The whole record, in one pass.
        </h1>
        <p className='text-lead text-body mt-6 max-w-[64ch]'>
          {roles.length} roles and {chunkCountByNamespace.EXP} bullets, all visible. Each
          bullet carries the chunk id the console quotes when it answers a question about
          this history.
        </p>
      </header>

      <div className='mt-12 space-y-20'>
        <Section
          id='roles'
          kicker='Employment history'
          title={`${roles.length} roles, newest first`}
          meta={chunkMeta('EXP')}
        >
          <RoleTimeline roles={roles} />
        </Section>

        <Section
          id='skills'
          kicker='Stack'
          title='Proficiency measured as time on the tool'
          meta={chunkMeta('SKL')}
        >
          <SkillBars skills={skills} />
        </Section>

        <Section
          id='education'
          kicker='Education'
          title='Schools on record'
          meta={chunkMeta('EDU')}
        >
          <EducationList education={education} />
        </Section>

        <Section
          id='certificates'
          kicker='Certificates'
          title='Credentials on file'
          meta={chunkMeta('CRT')}
        >
          <CertificateList certificates={certificates} />
        </Section>
      </div>
    </Container>
  )
}
