import type { AskResult } from '@/app/ask/_types'

const ENDPOINT = '/api/ask'

function plural(count: number, unit: string): string {
  return `${count} ${unit}${count === 1 ? '' : 's'}`
}

/** The limiter window is ten minutes, so seconds alone would read as noise. */
function humanDelay(seconds: number): string {
  return seconds >= 60
    ? plural(Math.ceil(seconds / 60), 'minute')
    : plural(seconds, 'second')
}

/**
 * Failures are turned into finished sentences here because the console shows one
 * plain line to the reader, never a status code or a stack.
 */
function failureMessage(response: Response): string {
  if (response.status === 429) {
    const seconds = Number(response.headers.get('retry-after'))
    const wait =
      Number.isFinite(seconds) && seconds > 0 ? `in ${humanDelay(seconds)}` : 'shortly'
    return `Rate limit reached — the ask endpoint is capped. Try again ${wait}.`
  }

  if (response.status === 400) {
    return 'That question was rejected: keep it between 1 and 500 characters.'
  }

  return 'The corpus did not answer that request. Try again in a moment.'
}

/**
 * The console's only network call. Kept out of the component so the island holds
 * state and nothing else.
 */
export async function askCorpus(query: string): Promise<AskResult> {
  let response: Response

  try {
    response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query })
    })
  } catch {
    throw new Error('The console could not reach the ask endpoint. Check the connection.')
  }

  if (!response.ok) throw new Error(failureMessage(response))

  // Our own route handler, typed by the shared AskMeta contract it answers with.
  return (await response.json()) as AskResult
}
