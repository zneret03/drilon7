# Development workflow

One page. Conventions live in `CLAUDE.md`; this is the order you do things in.

## Branches

Off `main`, one concern per branch, kebab-case slug:

| prefix | for |
| --- | --- |
| `feat/` | a new route, component or capability — `feat/ask-console` |
| `fix/` | a defect, usually one from `.claude/defects.md` — `fix/d-01-xss-path` |
| `chore/` | tooling, config, dependencies, CI — `chore/vitest-4` |
| `content/` | corpus and copy only, no component changes — `content/met-namespace` |

Never commit to `main` directly. Branch names are cheap; long-lived branches are not.

## Commits

Conventional Commits: `type(scope): subject`. Imperative, lower case, no full stop, subject
72 characters or fewer. Scope is the route or module — `ask`, `sources`, `work`, `content`,
`retrieval`, `ui`, `seo`.

`feat` · `fix` · `refactor` · `perf` · `docs` · `test` · `style` · `build` · `ci` · `chore`
· `revert`

Content edits are `feat(content):` when they add citable chunks, `fix(content):` when they
correct a claim. A breaking change to a component contract gets a `!` and a body explaining
the callers you updated.

## The local loop

1. Write the code. Server Component first; add `'use client'` only when the leaf genuinely
   needs state, an effect or a handler.
2. `/react-doctor` on what you touched. Fix every blocker before continuing — the command
   reports, you decide.
3. `yarn verify` — `format:check`, `lint`, `typecheck`, `test`, `build`.
   `yarn format` and `yarn lint:fix` clear the mechanical failures.
4. Commit. Never commit a red `verify`; a broken commit costs the next reviewer more than a
   rebase costs you.

## The PR loop

1. Push the branch, open the PR: what changed, why, and the defect or action item it closes.
2. `/pr-review` (base defaults to `origin/main`). Address blockers, re-run, repeat.
3. CI green — the same five steps, so a local pass is a real signal, not a coincidence.
4. Squash merge, delete the branch. The squash subject is the Conventional Commits line
   `/pr-review` suggested.

## What CI runs

`.github/workflows/ci.yml`, one `verify` job, in this order:

`format:check` → `lint` → `typecheck` → `test` → `build`

Cheapest first, on purpose. A stray semicolon fails in seconds instead of after a
two-minute build, and each step's failures are a superset of the noise the next one would
report. `next build` is last because it is the only step that costs real minutes, and
because `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` are both `false` —
the build re-checks what the earlier steps already proved.

## Adding a screen

1. `app/<route>/page.tsx` — Server Component, default export, no `'use client'`.
2. Route-local code lives beside it: `_components/`, `_lib/`, `_types/`. Anything a second
   route needs goes global instead (see below).
3. Export metadata: `export const metadata = pageMetadata({ title, description, path })`,
   or `generateMetadata` when it depends on `params`.
4. Dynamic segments: `generateStaticParams`, and `notFound()` for an unknown slug. `params`
   and `searchParams` are Promises in Next 16 — `await` them in the page and pass plain
   values to client leaves.
5. Add the route to `NAV` in `lib/nav.ts` and to `app/sitemap.ts`. A page absent
   from both is a page nobody finds.
6. `/react-doctor app/<route>` before you commit.

## Adding or editing content

1. Shape first: add or extend the schema in `content/schema.ts`. Types in
   `types/content.ts` are `z.infer` of those schemas, so the type follows for free —
   never hand-write a content type.
2. Write the entries in `content/<file>.ts`. Every file parses through its schema at
   module load, so a malformed entry fails the build rather than the page.
3. Chunk ids match `chunkIdSchema`: `NS-SCOPE-NN`, three-letter namespace, uppercase scope,
   two-digit ordinal — `EXP-FH-03`. The namespace must exist in `namespaceSchema` and carry
   a label in `NAMESPACES`, including the intentionally empty `STY` and `OPN`.
4. Make it citable: add the mapping block in `buildCorpus()` in `content/index.ts`. One
   block per source, no special cases.
5. `content/index.ts` throws at import on a duplicate chunk id or a case study whose
   slug has no project. That is the uniqueness check — a broken citation contract stops the
   build instead of silently shipping two `EXP-FH-03`s.
6. `yarn test`, then `yarn verify`.

## Promoting a route-local file to global

Promote when the second caller actually exists — not in anticipation (KISS).

- `app/<route>/_components/x.tsx` → `components/ui/x.tsx`, re-exported from
  `components/ui/index.ts`.
- `app/<route>/_lib/x.ts` → `lib/x.ts` · `app/<route>/_types/x.ts` → `types/`.

Move the file, update both callers to import from `@/components/ui` or `@/lib/...`, delete
the local copy in the same commit, and give the promoted export a doc comment saying why it
is shared. A duplicated file left behind is the DRY defect the promotion was meant to fix.
