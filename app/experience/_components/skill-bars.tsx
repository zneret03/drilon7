import type { Skill } from '@/types'

/** A full bar means five years or more on the tool, not mastery. */
const FULL_BAR_YEARS = 5

const barPercent = (years: number): number =>
  Math.min(100, Math.round((years / FULL_BAR_YEARS) * 100))

const yearLabel = (years: number): string => `${years} ${years === 1 ? 'year' : 'years'}`

/**
 * Proficiency stated as time on the tool rather than a self-scored percentage,
 * with the scale and its roughness printed next to the bars. One row per skill:
 * a fixed 132px label, the bar taking the slack, the figure right-aligned.
 */
export function SkillBars({ skills }: { skills: readonly Skill[] }) {
  return (
    <div>
      <p className='text-muted max-w-[64ch] text-sm'>
        Bar length is years divided by {FULL_BAR_YEARS}. Figures are approximate and
        self-reported — they measure exposure, not a graded skill level.
      </p>

      <ul className='mt-7 grid gap-x-10 gap-y-3.5 sm:grid-cols-[repeat(auto-fit,minmax(310px,1fr))]'>
        {skills.map((skill) => (
          <li key={skill.name} className='flex items-center gap-4'>
            <span className='text-body-strong w-33 shrink-0 text-sm'>{skill.name}</span>
            <span
              aria-hidden='true'
              className='bg-line relative h-1.5 flex-1 overflow-hidden'
            >
              {/* Data-driven width — the one place a computed style is allowed. */}
              <span
                className='bg-accent absolute inset-y-0 left-0'
                style={{ width: `${barPercent(skill.years)}%` }}
              />
            </span>
            <span className='text-muted text-2xs w-18 shrink-0 text-right font-mono'>
              {yearLabel(skill.years)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
