import type { Skill } from '@/types'

/** A full bar means five years or more on the tool, not mastery. */
const FULL_BAR_YEARS = 5

const barPercent = (years: number): number =>
  Math.min(100, Math.round((years / FULL_BAR_YEARS) * 100))

const yearLabel = (years: number): string => `${years} ${years === 1 ? 'year' : 'years'}`

/**
 * Proficiency stated as time on the tool rather than a self-scored percentage,
 * with the scale and its roughness printed next to the bars.
 */
export function SkillBars({ skills }: { skills: readonly Skill[] }) {
  return (
    <div>
      <p className='text-muted max-w-[64ch] font-mono text-xs'>
        Bar length is years divided by {FULL_BAR_YEARS}. Figures are approximate and
        self-reported — they measure exposure, not a graded skill level.
      </p>

      <ul className='mt-8 grid gap-x-12 gap-y-5 sm:grid-cols-2'>
        {skills.map((skill) => (
          <li key={skill.name}>
            <div className='flex items-baseline justify-between gap-4'>
              <span className='text-body-strong text-sm'>{skill.name}</span>
              <span className='text-2xs text-muted font-mono'>
                {yearLabel(skill.years)}
              </span>
            </div>
            <div aria-hidden className='bg-line mt-2 h-1'>
              {/* Data-driven width — the one place a computed style is allowed. */}
              <div
                className='bg-accent h-full'
                style={{ width: `${barPercent(skill.years)}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
