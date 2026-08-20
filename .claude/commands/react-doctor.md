---
description: Diagnose React 19 and Next 16 correctness plus house-rule breaches in changed or named files
argument-hint: [files|glob|--staged]
allowed-tools: Read, Grep, Glob, Bash(git diff:*), Bash(git status:*), Bash(yarn lint:*), Bash(yarn typecheck:*), Bash(yarn test:*)
---

# react-doctor

Diagnose, do not repair. This command reads code and reports defects; it changes nothing
unless the user asks in a later turn.

## 1. Scope

Argument given: `$ARGUMENTS`

- **Paths** (space-separated) — audit exactly those files.
- **A glob** — expand it with Glob, then audit the matches.
- **`--staged`** — audit the staged list only.
- **Empty** — the default: everything changed against `origin/main`, plus the staged list.

Changed against `origin/main` (working tree, so staged and unstaged both show):
!`git diff --name-only --diff-filter=ACMR origin/main`

Staged only:
!`git diff --cached --name-only --diff-filter=ACMR`

Size of the change:
!`git diff --stat origin/main`

Then: read every in-scope `.ts`/`.tsx` file **in full** before reporting anything — a
`'use client'` on line 1 changes the meaning of every line under it, and a diff hunk hides
that. List non-source files (`.css`, `.md`, config) as out of scope and move on. If scope
resolves to nothing, say so and stop; do not audit the whole repo by default.

## 2. Diagnostic pass

Work the list in order, per file. Each item is a defect class, not a style preference.

1. **`'use client'` altitude.** Is the directive on the smallest leaf that truly needs
   state, an effect, a handler or a browser API? A page or section marked client drags its
   whole subtree into the bundle and forfeits streaming. The fix is almost always to split
   the interactive leaf out (`app/sources/_components/namespace-filter.tsx` is the pattern:
   chips are client, the list stays server).
2. **Client components importing server data.** `import { corpus } from '@/content'` inside
   a `'use client'` file ships every chunk, every role and both Maps to the browser. Data
   crosses as props from a Server Component, narrowed to what the leaf renders.
3. **Keys.** Every `.map` needs a stable key from the datum's own identity — `chunk.id`,
   `project.slug`, `namespace`. Array index, `Math.random()`, or a key on a wrapper instead
   of the outermost returned element makes React reuse the wrong DOM node, so input focus
   and animation state land on the wrong row after a filter change.
4. **Hook rules.** No hook after an early `return`, inside a condition, loop or callback.
   Order must be identical on every render or React pairs state with the wrong slot.
5. **Dependency arrays.** Every value read inside `useEffect`/`useCallback`/`useMemo` is
   listed, and nothing unstable is listed — an inline object, array or arrow literal in the
   deps re-fires the effect every render. Empty deps with a captured prop reads a stale value.
6. **State derived from props.** `useState(props.x)` plus a `useEffect` that re-syncs it is
   a render-behind copy. Compute it during render instead; keep state only for what the user
   changes.
7. **Effects that are really handlers.** Posting to `/api/ask`, pushing a route or reading a
   form belongs in the submit handler. An effect keyed on a state flag runs twice under
   Strict Mode (`reactStrictMode: true` in `next.config.ts`) and fires on mount.
8. **Next 16 async props.** `params` and `searchParams` are Promises. Pages,
   `generateMetadata` and layouts must `await` them (`const { q } = await searchParams`);
   client leaves get resolved values as props. Reading `searchParams.q` directly is a type
   error at best and `undefined` at worst.
9. **Boundary payloads.** Functions, class instances, Zod schemas, Symbols and non-plain
   objects cannot cross Server → Client. A `Map` such as `chunkById` serialises but sends the
   entire map — pass the one entry the leaf needs. Server-only helpers (`serverEnv`,
   `rateLimit`) must never be reachable from a client module graph.
10. **`next/image`.** Real `alt` that describes the evidence in the screenshot, never
    `alt='image'` and never `alt=''` for content imagery; explicit `width`/`height`, or
    `fill` paired with `sizes`. No `grayscale`/`saturate-0` — the spec requires screenshots
    in colour. When `project.image` is `''`, render `EmptyState`, not an empty frame.
11. **Raw `<svg>`, `<path>`, `<img>`.** ESLint errors on all three
    (`no-restricted-syntax`). Icons come from lucide-react only; lucide v1 has no brand
    icons, so pair a generic icon with a text label.
12. **`dangerouslySetInnerHTML`.** Banned outright — it was a live XSS path in the previous
    site (`.claude/defects.md` D-01).
13. **Colour and size literals.** No `#hex`, no `bg-[…]`/`text-[rgb(…)]` arbitrary colour,
    no `style={{ color: … }}`. Only the semantic token classes defined in
    `app/globals.css` (`bg-surface`, `border-line-strong`, `text-body-strong`,
    `text-accent`, `bg-accent-wash`, …). Arbitrary sizes that duplicate a token
    (`text-[17px]` instead of `text-prose`) are the same defect: the token can be retuned
    once, the literal cannot. Two carve-outs, both narrow, both real:
    - **`app/opengraph-image.tsx` is exempt from this whole item.** It renders through
      Satori (`next/og`), which reads inline `style` objects and cannot see a Tailwind class
      or a CSS custom property — so hex literals and `style={{ color: … }}` are the only way
      it can be written, and its eight colours are copied from the palette by hand. It is
      the one file allowed them. Do not report them; do report a hex in any other file.
    - **`text-body`, `text-body-strong` and `text-heading` set colour, not size.** Tailwind
      resolves the `text-*` namespace against `--color-*` before `--text-*`, so the size
      tokens are deliberately named `--text-prose` (17px) and `--text-section` (32px).
      `text-body` used for colour is correct; `text-body` reached for as a font size is the
      finding, because it silently emits none.
14. **`../../` imports.** ESLint error. Reach across folders with `@/`; `./sibling` is fine.
15. **Type-only imports.** Types must arrive as `import type { Chunk } from '@/types'`
    (`consistent-type-imports`, separate type imports, `verbatimModuleSyntax`). A value
    import of a type keeps a runtime dependency the bundler cannot drop.
16. **Unguarded index access.** `noUncheckedIndexedAccess` is on: `arr[0]`, `rows[i]`,
    `counts[ns]`, `split(',')[0]` and `.at(0)` are all `T | undefined`. Guard, default, or
    narrow — `!` and `as` hide the case instead of handling it.
17. **Iteration-order assumptions.** Rendering a `Map`/`Set` is fine, but the key must come
    from the entry, not its position, and no ordering may be assumed beyond insertion order.
    Sorting must be explicit where the UI implies a rank (score, year, period).
18. **Missing error and empty states.** Every fetch path handles failure: `/api/ask` returns
    `400` on a bad body and `429` with `Retry-After` when rate-limited, plus a network throw.
    An in-flight state must be visible. Declared-but-empty namespaces (`STY`, `OPN`) and
    absent `source`/`demo`/`image` render `EmptyState` or an honest note — never a dead link.
19. **Accessibility.** Icon-only controls carry `aria-label`; decorative icons carry
    `aria-hidden='true'`; toggles carry `aria-pressed`. One `<h1>` per route, then `<h2>`
    via `Section title`, then `<h3>` — no level skipped, no heading chosen for its size.
20. **DRY.** The same markup or logic twice means it belongs in `components/ui` (check
    the barrel first — `Container`, `Section`, `Panel`, `Button`, `Card`, `Badge`, `Chip`,
    `ChunkIdChip`, `Kbd`, `StatBlock`, `TagList`, `ExternalLink`, `EmptyState` already
    exist). A hand-rolled console panel shell or outline pill is the common case now that
    `Panel` and `Chip` exist. Re-implementing a contract by hand is a finding even when it
    renders correctly.
21. **KISS.** A wrapper, hook, `_lib` helper or generic prop with exactly one caller is
    speculative. Inline it and name the caller that would justify it.

## 3. Verification

Run all three and quote the real output — never predict a result:

- `yarn lint`
- `yarn typecheck`
- `yarn test`

`vitest.config.ts` only collects `lib/**/*.test.ts` and `app/**/*.test.ts`, so a `.tsx` change is unlikely to be
covered by a test; say that plainly rather than implying green tests exercised the new code.

## 4. Output

A findings table, most severe first:

| file:line | severity | rule | fix |
| --- | --- | --- | --- |
| `app/ask/_components/console.tsx:42` | blocker | Next 16 `searchParams` is a Promise | `await searchParams` in `page.tsx` and pass `q` down |

- **blocker** — ESLint error, type error, wrong behaviour, an accessibility barrier, or a
  security hole. **should-fix** — a convention or DRY/KISS breach that will rot.
  **nit** — naming, ordering, wording.
- Nothing is reported without a `file:line`. If you cannot point at a line, you have a
  hunch, not a finding — drop it.
- Never soften a blocker to a nit to make the table look better, and never invent findings
  to fill it. An empty table is a valid result.

Close with one line: `Verdict: healthy` / `Verdict: N blockers, M should-fix`.

Do not fix anything unless the user asks. Report, then wait.
