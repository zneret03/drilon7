/**
 * The namespace codes that prefix every chunk id. Deliberately zero imports:
 * client components validate a citation prefix against this list, so pulling in
 * zod or the corpus here would ship both to the browser.
 *
 * `content/schema.ts` builds `namespaceSchema` from this array, which keeps the
 * list in exactly one place.
 */
export const NAMESPACE_CODES = [
  'EXP', // experience bullets
  'PRJ', // projects, featured and archive
  'SKL', // stack proficiency
  'EDU', // education
  'AWD', // awards
  'WRT', // published writing
  'CRT', // certificates
  'MET', // verified impact metrics
  'STY', // how he builds — declared, intentionally empty until written
  'OPN', // positions held — declared, intentionally empty until written
  'CSE' // case study sections
] as const

export type NamespaceCode = (typeof NAMESPACE_CODES)[number]
