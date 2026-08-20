import { describe, expect, it } from 'vitest'
import { buildTrace, clampK, scoreCorpus } from './score'
import { tokenize } from './tokenize'
import { corpus } from '@/content'

describe('tokenize', () => {
  it('drops stop words and one-character tokens', () => {
    expect(tokenize('What has he done about the CI?')).toEqual(['done', 'ci'])
  })

  it('keeps dotted and suffixed stack names whole', () => {
    expect(tokenize('node.js and c# and c++')).toEqual(['node.js', 'c#', 'c++'])
  })
})

describe('scoreCorpus', () => {
  it('returns nothing for a query with no indexed terms', () => {
    expect(scoreCorpus('the a an of', corpus)).toEqual([])
  })

  it('ranks the GraphQL bullets above unrelated chunks', () => {
    const results = scoreCorpus('graphql production', corpus)
    expect(results.length).toBeGreaterThan(0)
    expect(results[0]?.chunk.text.toLowerCase()).toContain('graphql')
  })

  it('does not let a short term match inside an unrelated word', () => {
    // `ci` used to match `City`, dragging the Quezon City roles into CI/CD answers.
    const ids = scoreCorpus('ci', corpus).map((result) => result.chunk.id)
    expect(ids).toContain('SKL-CICDPI')
    expect(ids).not.toContain('EXP-EM-01')
  })

  it('still credits a long term as a prefix', () => {
    const ids = scoreCorpus('graph', corpus).map((result) => result.chunk.id)
    expect(ids).toContain('SKL-GRAPHQ')
  })

  it('sorts by descending score', () => {
    const scores = scoreCorpus('next.js testing pipelines', corpus).map((r) => r.score)
    expect([...scores].sort((a, b) => b - a)).toEqual(scores)
  })
})

describe('clampK', () => {
  it('holds k inside the retrieval bounds', () => {
    expect(clampK(1)).toBe(3)
    expect(clampK(99)).toBe(8)
    expect(clampK()).toBe(6)
  })
})

describe('buildTrace', () => {
  it('marks only the top-k rows as used', () => {
    const scored = scoreCorpus('react next.js tailwind', corpus)
    const trace = buildTrace('react next.js tailwind', scored, 3)
    expect(trace.rows.filter((row) => row.used)).toHaveLength(3)
    expect(trace.rows[0]?.percent).toBe(100)
  })

  it('never claims more used chunks than it matched', () => {
    const scored = scoreCorpus('erebus', corpus)
    const trace = buildTrace('erebus', scored, 6)
    expect(trace.k).toBeLessThanOrEqual(trace.matched)
  })
})
