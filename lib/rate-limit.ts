/**
 * Per-IP fixed-window limiter for the public ask endpoint.
 *
 * In-process on purpose: one small map, no extra service, no new dependency.
 * The trade-off is that each serverless instance keeps its own counter, so the
 * effective ceiling scales with instance count. That is an acceptable bound for
 * a personal site; swap in a shared store if traffic ever justifies it.
 */
type Window = { count: number; resetAt: number }

const windows = new Map<string, Window>()

const LIMIT = 10
const WINDOW_MS = 10 * 60 * 1000
const MAX_KEYS = 5_000

export type RateLimitResult = {
  allowed: boolean
  remaining: number
  retryAfterSeconds: number
}

export function rateLimit(key: string, now: number = Date.now()): RateLimitResult {
  const existing = windows.get(key)

  if (!existing || existing.resetAt <= now) {
    windows.set(key, { count: 1, resetAt: now + WINDOW_MS })
    // Opportunistic sweep keeps the map bounded without a timer.
    if (windows.size > MAX_KEYS) {
      for (const [entryKey, window] of windows) {
        if (window.resetAt <= now) windows.delete(entryKey)
      }
      // Hard ceiling. Keys rotated inside a single window are all unexpired, so
      // the sweep above can free nothing and the map grows without bound. Evicting
      // from the front of insertion order is best-effort: a victim loses its count
      // and gets a fresh window, which is the right way to fail under key churn.
      while (windows.size > MAX_KEYS) {
        const oldest = windows.keys().next().value
        if (oldest === undefined) break
        windows.delete(oldest)
      }
    }
    return { allowed: true, remaining: LIMIT - 1, retryAfterSeconds: 0 }
  }

  existing.count += 1
  const remaining = Math.max(0, LIMIT - existing.count)

  return {
    allowed: existing.count <= LIMIT,
    remaining,
    retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000)
  }
}

/** Best available client identifier behind a proxy. */
export function clientKey(headers: Headers): string {
  const forwarded = headers.get('x-forwarded-for')
  return forwarded?.split(',')[0]?.trim() || headers.get('x-real-ip') || 'anonymous'
}
