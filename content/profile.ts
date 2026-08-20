import { profileSchema } from './schema'
import type { Profile } from '@/types'

/**
 * Identity and reach. `socials[].icon` names a lucide-react export; the allowed
 * names are resolved through `@/lib/icons`.
 *
 * lucide v1 dropped brand glyphs, so each link pairs a generic icon with an
 * explicit text label — the label carries the brand, not the icon.
 */
const profile: Profile = profileSchema.parse({
  name: 'Ian Drilon',
  initials: 'ID',
  role: 'Senior Software Engineer — React & Next.js',
  location: 'Iloilo, Western Visayas, PH',
  headline: 'Five years of shipped interfaces, indexed.',
  intro:
    'Every claim on this site is a retrievable chunk with an ID. Ask the console anything about my experience — it retrieves from that corpus and cites the exact source. Nothing is generated from thin air.',
  email: 'iandrilon2@gmail.com',
  resume: '/Resume.pdf',
  socials: [
    { name: 'GitHub', url: 'https://github.com/zneret03', icon: 'GitBranch' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ian-drilon-952a37179/',
      icon: 'Briefcase'
    },
    { name: 'dev.to', url: 'https://dev.to/zneret03', icon: 'BookOpenText' },
    { name: 'Twitter', url: 'https://twitter.com/DrilonIan', icon: 'AtSign' },
    { name: 'Instagram', url: 'https://www.instagram.com/zen.codes/', icon: 'Camera' }
  ]
})

export default profile
