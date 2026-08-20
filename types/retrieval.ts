import type { Chunk, ChunkId, Namespace } from './content'

/** One corpus chunk with the score the keyword pass gave it. */
export type ScoredChunk = {
  chunk: Chunk
  score: number
}

/** A single row of the retrieval trace shown in the console. */
export type TraceRow = {
  id: ChunkId
  namespace: Namespace
  score: number
  /** Score as a percentage of the top hit, for the bar width. */
  percent: number
  /** True when the chunk was inside top-k and sent to the model. */
  used: boolean
  preview: string
}

/** Everything the console needs to render one question and its answer. */
export type Trace = {
  query: string
  matched: number
  k: number
  rows: TraceRow[]
}

export type AskRequest = {
  query: string
}

/** Non-streamed metadata the ask endpoint returns in a header before the body. */
export type AskMeta = {
  trace: Trace
  engine: 'generated' | 'extractive'
}

/** One rendered segment of an answer: prose, or a clickable citation. */
export type AnswerPart =
  { kind: 'text'; text: string } | { kind: 'citation'; id: ChunkId; namespace: Namespace }

export type Turn = {
  query: string
  parts: AnswerPart[]
  trace: Trace
  engine: AskMeta['engine']
}
