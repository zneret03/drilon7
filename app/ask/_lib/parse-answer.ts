import { NAMESPACE_CODES } from '@/content/namespaces'
import type { AnswerPart, Namespace } from '@/types'

/** Citations arrive inline as `[EXP-FH-03]`; the capture is the bare chunk id. */
const CITATION = /\[([A-Z]{3}(?:-[A-Z0-9]+)+)\]/g

const NAMESPACE_LENGTH = 3

/**
 * A plain set, not the Zod enum: this module runs in the client island, and
 * importing the content schemas to test three characters would ship every
 * validator to the browser.
 */
const NAMESPACES: ReadonlySet<string> = new Set(NAMESPACE_CODES)

function isNamespace(value: string): value is Namespace {
  return NAMESPACES.has(value)
}

/** A chunk id carries its namespace in the first three characters. */
function toNamespace(id: string): Namespace | null {
  const prefix = id.slice(0, NAMESPACE_LENGTH)
  return isNamespace(prefix) ? prefix : null
}

/**
 * Splits an answer into prose and citations so the console can link every claim
 * back to its chunk. `allowedIds` is what retrieval actually handed the model, so
 * an id it invented stays plain text instead of becoming a link to nothing.
 */
export function parseAnswer(text: string, allowedIds: ReadonlySet<string>): AnswerPart[] {
  const parts: AnswerPart[] = []

  // A capturing split interleaves the two: even index is prose, odd is a chunk id.
  text.split(CITATION).forEach((segment, index) => {
    if (segment === '') return

    if (index % 2 === 0) {
      parts.push({ kind: 'text', text: segment })
      return
    }

    const namespace = allowedIds.has(segment) ? toNamespace(segment) : null
    parts.push(
      namespace
        ? { kind: 'citation', id: segment, namespace }
        : { kind: 'text', text: `[${segment}]` }
    )
  })

  return parts
}
