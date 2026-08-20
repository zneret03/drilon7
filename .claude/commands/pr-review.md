---
description: Review the whole change set against a base ref before it becomes a pull request
argument-hint: [base-ref]
allowed-tools: Read, Grep, Glob, Bash(git diff:*), Bash(git log:*), Bash(git status:*), Bash(yarn verify:*)
---

# pr-review

Review the change set as a reviewer would: whole diff, not one file at a time.

## 1. Gather

Base ref requested: `$ARGUMENTS` — when empty, the base is `origin/main`, and the context
below already covers it. When a different base is named, ignore the pre-gathered blocks and
re-run the same three commands against that ref before reviewing.

!`git diff --stat origin/main`

!`git diff --name-status --diff-filter=ACMRD origin/main`

!`git log --oneline origin/main..HEAD`

Read the full diff of every changed file, and read the surrounding file when a hunk's
correctness depends on context above it (a `'use client'` directive, an `await`, a guard).

## 2. Summarise

Two lines, no more: what the change does, and why it exists (the route, the defect id from
`.claude/defects.md`, or the action item it closes). If you cannot state the why from
the diff and its commits, that is the first finding.

## 3. Review passes

**Correctness.** For every changed or added `.tsx`, run the checklist in
`.claude/commands/react-doctor.md` — invoke `/react-doctor` with those paths rather than
restating its items here. Review changed `.ts` yourself: control flow, `undefined` under
`noUncheckedIndexedAccess`, error paths, and whether a thrown error fails the build (good)
or a request (usually not).

**Security.** Untrusted input is the `query` body on `/api/ask` and the `q`/`ns` values in
`searchParams`: each must be validated (Zod `1–500` trimmed for the body; `ns` narrowed
against the `NAMESPACES` keys) before it reaches a render or a URL. `rateLimit(clientKey(...))`
stays the first statement in the handler, with `429` plus `Retry-After`. Model output is
untrusted text — rendered as text and parsed into citation chips, never as markup, and
`dangerouslySetInnerHTML` stays banned. No `ANTHROPIC_API_KEY` in a client module, in a
`NEXT_PUBLIC_` name, or in a log line; no `.env`, key, token or cookie value anywhere in the
diff. External anchors keep `rel='noreferrer noopener'`.

**Design system.** Every colour, size, shadow, easing and container width resolves to a token
in `app/globals.css`. New tokens are defined there or not at all — no per-component
custom property, no hex, no arbitrary Tailwind value that shadows an existing token. Panels,
cards, section headers, citation chips and trace rows follow the established patterns rather
than a new one-off.

**DRY / KISS.** Duplicated markup belongs in `components/ui` (check the barrel before
declaring something missing). Route-local code with a second caller should have been
promoted. A new abstraction with one caller, or a new dependency where a token or twenty
lines would do, is a finding.

**Accessibility.** Heading order per route, `aria-label` on icon-only controls,
`aria-hidden` on decorative icons, real `alt` text, focus visible on anything interactive,
and no content reachable only by hover.

**Performance.** Count the `'use client'` files the diff adds and what they import — a client
leaf importing `@/content` puts the corpus in the browser bundle. Check the server/client
split is still at the leaf, images go through `next/image` with sizing, and `package.json`
gained nothing unplanned.

**Tests.** Logic in `lib` needs a sibling `*.test.ts` (`vitest.config.ts` collects
`lib/**/*.test.ts` and `app/**/*.test.ts` only). Content changes are covered by the schema parse and the duplicate-id
throw in `content/index.ts` — confirm both still hold. A new refusal or scoring behaviour
without a test is a should-fix at minimum.

**Docs drift.** Did the change alter a convention in `CLAUDE.md`, close or contradict an item
in `.claude/action-items.md`, or fix a defect in `.claude/defects.md` without marking
it? Stale docs are a finding with a `file:line`, like anything else.

## 4. Verify

Run `yarn verify` and quote its real output. It runs `format:check`, `lint`, `typecheck`,
`test`, then `build` — the same order as CI. **Do not issue an approve verdict without that
output.** If it fails, the verdict is `request-changes` and the failure is blocking item 1.

## 5. Output

1. The two-line summary.
2. The findings table from `/react-doctor`'s format — `file:line`, severity, rule, fix. No
   finding without a `file:line`; never soften a blocker.
3. **Verdict:** `approve` / `approve-with-nits` / `request-changes`.
4. **Blocking items:** a numbered list, each naming the file and the change required. Empty
   when the verdict is not `request-changes`.
5. **Suggested subject:** one Conventional Commits line, e.g.
   `feat(ask): cite chunk ids in the console answer` — type from the list in
   `.claude/workflow.md`, scope = route or module, imperative, lower case, no full stop,
   72 characters or fewer.
