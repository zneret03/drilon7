import { AtSign, BookOpenText, Briefcase, Camera, GitBranch, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/**
 * Icons referenced by name from content files.
 *
 * lucide v1 removed brand glyphs, so a social link pairs a generic icon with an
 * explicit text label — the label carries the brand. Components that know their
 * icon at author time import from lucide-react directly; this map exists only
 * for the data-driven case.
 */
export const contentIcons = {
  AtSign,
  BookOpenText,
  Briefcase,
  Camera,
  GitBranch,
  Mail
} satisfies Record<string, LucideIcon>

export type ContentIconName = keyof typeof contentIcons

export function resolveIcon(name: string): LucideIcon {
  return contentIcons[name as ContentIconName] ?? GitBranch
}
