import { tokenize } from './tokenize'
import type { Chunk, ScoredChunk, Trace } from '@/types'

/** Longer terms are more discriminating, so they are worth more. */
const LONG_TERM_WEIGHT = 2
const SHORT_TERM_WEIGHT = 1
const LONG_TERM_LENGTH = 4

/** Below this length a term only ever counts as a whole-token match. */
const PREFIX_MIN_LENGTH = 5

export const DEFAULT_K = 6
export const MIN_K = 3
export const MAX_K = 8

/**
 * The chunk's searchable terms, tokenized exactly like a query so matching is
 * token-to-token.
 *
 * Substring matching was the original approach and it was wrong: `ci` matched
 * inside `City`, so asking about CI/CD retrieved the Quezon City role. Whole
 * tokens fix that class of false positive outright.
 */
function chunkTerms(chunk: Chunk): Set<string> {
  return new Set(tokenize(`${chunk.text} ${chunk.origin} ${chunk.meta} ${chunk.id}`))
}

/**
 * Whole-token match scores in full. A long term also earns partial credit as a
 * prefix so `graph` still finds `graphql` — but only from five characters up,
 * which is what keeps short terms from bleeding into unrelated words.
 */
function termScore(term: string, terms: Set<string>): number {
  if (terms.has(term)) {
    return term.length > LONG_TERM_LENGTH ? LONG_TERM_WEIGHT : SHORT_TERM_WEIGHT
  }

  if (term.length >= PREFIX_MIN_LENGTH) {
    for (const candidate of terms) {
      if (candidate.startsWith(term)) return SHORT_TERM_WEIGHT
    }
  }

  return 0
}

/**
 * Keyword pass over the corpus, highest score first. Chunks with no hit are
 * dropped so an unanswerable question produces an empty set — which is what
 * makes the refusal honest rather than decorative.
 */
export function scoreCorpus(query: string, corpus: Chunk[]): ScoredChunk[] {
  const queryTerms = tokenize(query)
  if (queryTerms.length === 0) return []

  return corpus
    .map((chunk) => {
      const terms = chunkTerms(chunk)
      const score = queryTerms.reduce((total, term) => total + termScore(term, terms), 0)
      return { chunk, score }
    })
    .filter((scored) => scored.score > 0)
    .sort((a, b) => b.score - a.score)
}

export function clampK(k: number = DEFAULT_K): number {
  return Math.max(MIN_K, Math.min(MAX_K, Math.trunc(k)))
}

/** How many trace rows the console shows, used or not. */
const TRACE_ROWS = 9

/**
 * The trace is the product feature: it shows which chunks scored, which were
 * passed to the model, and which lost.
 */
export function buildTrace(query: string, scored: ScoredChunk[], k: number): Trace {
  const top = scored[0]?.score ?? 1

  return {
    query,
    matched: scored.length,
    k: Math.min(k, scored.length),
    rows: scored.slice(0, TRACE_ROWS).map((entry, index) => ({
      id: entry.chunk.id,
      namespace: entry.chunk.namespace,
      score: entry.score,
      percent: Math.round((entry.score / top) * 100),
      used: index < k,
      preview: `${entry.chunk.text.slice(0, 72)}…`
    }))
  }
}
