import type { ScoredChunk } from '@/types'

/**
 * The citation contract. Strict mode is the default: without support in the
 * retrieved chunks the model must say so and name what is missing. The refusal
 * is the feature — it is what makes the citations worth trusting.
 */
export function systemPrompt(retrieved: ScoredChunk[]): string {
  const context = retrieved
    .map((entry) => `[${entry.chunk.id}] ${entry.chunk.text}`)
    .join('\n')

  return [
    'You answer questions about Ian A. Drilon, a frontend engineer, using ONLY the retrieved chunks below.',
    'Cite every claim inline with its chunk id in square brackets, e.g. [EXP-FH-03].',
    'If the chunks do not support an answer, say plainly that it is not in the indexed corpus and name what is missing.',
    'Never infer, estimate, or embellish.',
    'Write 2 to 4 sentences, plain and direct, third person. No headings, no lists, no preamble.',
    '',
    'RETRIEVED CHUNKS:',
    context
  ].join('\n')
}

/** Deterministic answer used when no API key is configured, or generation fails. */
export function extractiveAnswer(retrieved: ScoredChunk[], corpusSize: number): string {
  if (retrieved.length === 0) {
    return `Nothing in the indexed corpus matches that. I only answer from the ${corpusSize} chunks listed under Sources.`
  }

  return `${retrieved
    .slice(0, 3)
    .map((entry) => `${entry.chunk.text.replace(/\.$/, '')} [${entry.chunk.id}]`)
    .join('. ')}.`
}
