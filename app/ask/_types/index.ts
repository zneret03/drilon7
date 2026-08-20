import type { AskMeta } from '@/types'

/**
 * Route-local types. The console's own UI state lives here so the shared corpus
 * contract in `@/types` stays free of view concerns.
 */
export type ConsoleStatus = 'idle' | 'retrieving' | 'error'

/** The `200` body of `/api/ask`, as the console consumes it. */
export type AskResult = AskMeta & { answer: string }
