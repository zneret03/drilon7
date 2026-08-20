# drilon7

Personal portfolio of Ian A. Drilon, rebuilt as a **retrieval-grounded corpus**. Every
factual claim on the site — each experience bullet, project, skill, award, certificate and
verified metric — exists as a typed chunk with a stable id such as `EXP-FH-03`, validated
by Zod before it can reach a page. The `/ask` console answers questions using only those
chunks, cites each one inline, and shows the retrieval trace beside the answer: which
chunks scored, which were sent to the model, which lost. When the corpus cannot support an
answer the console says so and names what is missing. That refusal is the point — it is
what makes the citations worth trusting, and it is why the corpus is browsable at
`/sources` rather than asserted.

**112 chunks across 11 declared namespaces** today — 50 `PRJ`, 29 `EXP`, 17 `SKL`, 5 `CSE`,
4 `AWD`, 2 each of `EDU`, `WRT` and `CRT`, and 1 `MET`. Two of the eleven (`STY`, `OPN`) are
declared and deliberately empty, and the site shows them as empty rather than quietly
dropping them. The count is never typed into a page: `corpus.length` and
`chunkCountByNamespace` are derived in `content/index.ts`.

---

## How retrieval works

Everything except `POST /api/ask` is static: the corpus is built at module load, so the
pages that read it cost nothing at request time.

```
content/*.ts  →  buildCorpus()  →  scoreCorpus()  →  clampK()  →  buildTrace()
   Zod-validated       Chunk[]         keyword pass       k = 6       visible trace
                                              ↓
                              systemPrompt(top) → Claude   (with ANTHROPIC_API_KEY)
                              extractiveAnswer(top)        (without a key, on an SDK
                                                            error, or on a clipped answer)
```

1. **Content** — `content/` holds one file per source (`roles.ts`, `projects.ts`,
   `skills.ts`, `education.ts`, `awards.ts`, `writing.ts`, `certificates.ts`,
   `metrics.ts`, `case-studies.ts`, `profile.ts`). Each file parses itself through
   `content/schema.ts` at module load, so a malformed entry fails the build rather than the
   page. Every type in `types` is inferred from those same schemas, so a shape cannot drift
   from its validator. `content/namespaces.ts` holds the eleven namespace codes with zero
   imports — `schema.ts` builds `namespaceSchema` from it, and the console's client island
   validates a citation prefix against the same array without shipping zod to the browser.
2. **`buildCorpus()`** in `content/index.ts` flattens all of it into one `Chunk[]` in a
   single pass — id, namespace, origin, text, meta. It also throws on a duplicate chunk id
   (a repeated id would break the citation contract silently) and on a case study whose
   slug has no matching project. Adding a new citable source means adding exactly one block
   there; `chunkById`, `chunkCountByNamespace` and the home-page `stats` are all derived
   from the result, never typed by hand. The case study is the newest block: the `/work`
   write-up used to assert facts no chunk backed, so the `CSE` namespace now carries one
   chunk per section (`CSE-NAIL-01`…`-04`) plus one for the pipeline (`CSE-NAIL-PIPE`),
   which makes the write-up citable from the console like everything else.
3. **`scoreCorpus(query, corpus)`** in `lib/retrieval/score.ts` is the keyword pass.
   `tokenize()` (`lib/retrieval/tokenize.ts`) lowercases, strips stop words and keeps
   `c#`, `c++` and `node.js` intact; terms longer than four characters score 2, shorter ones
   1. Chunks with no hit are dropped, so an unanswerable question produces an empty set —
   which is what makes the refusal honest rather than decorative. `clampK(DEFAULT_K)` fixes
   the cut at 6 chunks (floor 3, ceiling 8).
4. **`buildTrace(query, scored, k)`** produces what the console renders: up to 9 rows, each
   with the chunk id, its namespace, its raw score, its percentage of the top score, a
   truncated preview, and whether it made the cut. The trace is a product feature, not
   debug output — it is how a reader checks the answer against its sources.
5. **`systemPrompt(retrieved)`** in `lib/retrieval/prompt.ts` carries the citation
   contract: answer only from the retrieved chunks, cite every claim inline with its id,
   say plainly when the chunks do not support an answer and name what is missing, never
   infer or embellish, 2–4 sentences.
6. **`extractiveAnswer(retrieved, corpusSize)`** is the deterministic fallback in the same
   file. `app/api/ask/route.ts` starts from it and only upgrades to a generated answer when
   `ANTHROPIC_API_KEY` is set, the SDK call succeeds **and** the generation actually
   finished — a `stop_reason` of `max_tokens` or `refusal` degrades on exactly the same path
   as a throw, because a clipped body has a cut last sentence and may hold a citation
   truncated before its `]`. The response reports which happened as
   `engine: 'generated' | 'extractive'`. A model failure is never a 500 — the retrieval
   already succeeded, so the extractive answer and its citations still hold.

`POST /api/ask` takes `{ query: string }` (Zod, 1–500 characters, `400` otherwise), is
rate-limited per IP before anything else (`429` with `Retry-After`), and returns
`{ answer, trace, engine }` as JSON. JSON rather than a stream on purpose: the citation ids
are parsed out of the **finished** text by `app/ask/_lib/parse-answer.ts`, and a
half-arrived `[EXP-` is not a citation. That parse is also where a hallucination stops:
`parseAnswer(text, allowedIds)` links an id only when it is one the retrieval actually
returned, so anything the model invented stays plain text instead of becoming a link to a
chunk that does not exist.

---

## Screens

| Route | Screen | What it renders |
| --- | --- | --- |
| `/` | Home | Hero, a console teaser that hands the query to `/ask`, derived stat strip, the two current roles, the top four featured projects in colour with a link through to the full archive, the two published articles. |
| `/experience` | Experience | All eight roles as a static timeline with **every** bullet visible and individually citable, then skills (labelled approximate), awards, education and certificates. |
| `/work` | Work | The full archive: the featured projects, then everything else, then the blurb-only entries that have no page of their own. Derived stat row; no hand-kept totals. |
| `/work/[slug]` | Project | One page per project, statically generated from `projects` — unknown slugs `notFound()`. Project Overview (client, industry, timeline, services), The Challenge and Our Solution, the citable highlights, then a captioned gallery. Projects with no `overview` on record render a reduced form rather than filler. Nail Disease Detection adds the case study on top, each section its own `CSE` chunk. |
| `/ask` | Console | The retrieval console: answer with clickable citation chips, the trace panel, suggestion chips, in-flight and error states. A cited id that retrieval did not return renders as plain text, never a link. Accepts `?q=` and `⌘K` from anywhere. |
| `/sources` | Sources | All 112 chunks, filterable by namespace via `?ns=` (`sourcesHref()` in `lib/nav.ts` owns that query shape). Empty namespaces render an explicit empty state saying they are declared and unwritten. |
| `/contact` | Contact | A direct `mailto:`, the profile links, the resume and the location. No third-party form. |
| — | 404 | `app/not-found.tsx` — "Not in the corpus." |
| `POST /api/ask` | API | The endpoint above. `runtime = 'nodejs'`, `Cache-Control: no-store`. |

---

## Stack

| Package | Version | Why |
| --- | --- | --- |
| `next` | `^16.3.1` | App Router; Server Components render the corpus at build so retrieval is free at runtime. |
| `react` / `react-dom` | `^19.2.8` | Required by Next 16. |
| `typescript` | `^6.0.3` | `strict` + `noUncheckedIndexedAccess`; the corpus is type-safe end to end. |
| `tailwindcss` + `@tailwindcss/postcss` | `^4.3.3` | CSS-first v4 — every design token lives in `app/globals.css` and there is no `tailwind.config`. |
| `zod` | `^4.4.3` | Validates all content at module load and every content type is inferred from it. |
| `lucide-react` | `^1.32.0` | The only icon source; no raw SVG, no icon files. |
| `clsx` + `tailwind-merge` | `^2.1.1` / `^3.6.0` | Behind `cn()` in `lib/cn.ts`, so a caller's classes always win over a component's defaults. |
| `@anthropic-ai/sdk` | `^0.117.1` | Optional answer generation in `/api/ask`. Absent key → the extractive answerer. |
| `vitest` | `^4.1.11` | Node-environment unit tests on the retrieval pass (`lib/retrieval/score.test.ts`). |
| `eslint` + `eslint-config-next` | `^9.39.5` / `^16.3.1` | Flat config; the custom block bans raw SVG, `<img>`, `dangerouslySetInnerHTML` and `../../` imports. |
| `prettier` + `prettier-plugin-tailwindcss` | `^3.9.6` / `^0.8.1` | Formatting is not a review topic, and class order is sorted for you. |
| `jiti` | `^2.7.0` | Loads the TypeScript config files, so they need no experimental Node flag. |

`typescript` and `eslint` are each held one major behind the newest release. `typescript-eslint`
has no TS 7 support — its `typescript-estree` declares a supported range of `>=4.8.4 <6.1.0` —
and TS 7 also removed `baseUrl`, which is why `tsconfig.json` maps `@/*` through `paths`
alone. ESLint 10 removed the deprecated `context.getFilename()` / `context.getSourceCode()`
accessors that the `eslint-plugin-react@7.37.5` behind `eslint-config-next@16` still calls
without a fallback. Both pins are documented in `CLAUDE.md` § 2.1.

**Package manager: Yarn 4.18.0**, declared in `packageManager` and committed at
`.yarn/releases/yarn-4.18.0.cjs`, so `yarn` resolves to the same binary whether or not
Corepack is enabled. `nodeLinker: node-modules` — Turbopack and the Tailwind PostCSS plugin
both expect a real tree. `.yarnrc.yml` keeps Yarn's `npmMinimalAgeGate` at its 24-hour
default, which quarantines freshly published versions; two dependencies are pinned to the
newest release that clears it rather than lowering the gate.

**Every config file is TypeScript** — `next.config.ts`, `eslint.config.ts`,
`prettier.config.ts`, `postcss.config.ts`, `vitest.config.ts` — so a mistyped option fails
`yarn typecheck` instead of being ignored at runtime. Only `tsconfig.json`, `package.json`
and the CI workflow stay JSON/YAML, which have no TypeScript form.

---

## Getting started

```bash
node -v                      # 24.15.0 — pinned in .tool-versions (engines: >=20.9.0)
corepack enable              # optional: .yarnrc.yml's yarnPath already pins yarn 4.18.0
yarn install
cp .env.example .env.local
yarn dev                  # http://localhost:3000
```

**`ANTHROPIC_API_KEY` is optional and the site is fully functional without it.** With no
key in `.env.local`, `/api/ask` answers from `extractiveAnswer()` — real chunks, real
citations, real trace, reported as `engine: 'extractive'` — and every other screen is
unaffected, because they read the corpus directly. Add a key only to turn the console's
answers from stitched chunk text into prose.

| Variable | Required | Purpose |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | no | Enables generated answers. Absent or failing → extractive fallback. |
| `ASK_MODEL` | no | Model for `/api/ask`. Defaults to `claude-sonnet-5`. |
| `NEXT_PUBLIC_SITE_URL` | no | Canonical origin for metadata, sitemap and robots. Defaults to the Vercel URL. |

`.env` and `.env.local` are gitignored; `.env.example` is the only tracked template.

---

## Scripts

| Script | What it does |
| --- | --- |
| `yarn dev` | Local development server. |
| `yarn build` | Production build. Type errors **fail** it — `next.config.ts` keeps `typescript.ignoreBuildErrors: false`. It does **not** lint: Next 16 removed the `eslint` config key with `next lint`, so `yarn lint` and the CI Lint step are the lint gate. |
| `yarn start` | Serve the built output. |
| `yarn lint` | ESLint over the repo, including the project guardrails. |
| `yarn lint:fix` | Autofixable lint only. |
| `yarn typecheck` | `tsc --noEmit`; the fastest way to catch a `noUncheckedIndexedAccess` miss. |
| `yarn format` | Write Prettier formatting. |
| `yarn format:check` | What CI runs first. |
| `yarn test` | `vitest run` over `lib/**/*.test.ts` and `app/**/*.test.ts`. |
| `yarn test:watch` | Watch mode, for changes to retrieval scoring. |
| `yarn verify` | **The gate before pushing:** `format:check → lint → typecheck → test → build`. |

`.github/workflows/ci.yml` runs those same five steps, in the same cheapest-first order, on
every push to `main` and every pull request — so a formatting slip fails in seconds instead
of after a build.

---

## Where code goes

Anything used by more than one route is global: `components/ui` and
`components/layout` for markup, `lib` for helpers, `hooks` for hooks,
`types` for shared types. Anything used by exactly one route lives beside that route in
`app/<route>/_components/`, `_lib/` or `_types/`, where the leading underscore is what keeps
the folder out of the router. The moment a route-local file gains a second consumer it moves
up to the global folder in the same commit — never import across routes, because that is
both a layering violation and a `../../` lint error.

---

## Deployment

Deployed on **Vercel** from `main`; the default Next.js build settings need no override.
Set the environment variables from the table above in the project settings (all three are
optional, but `NEXT_PUBLIC_SITE_URL` should be the real origin so canonical URLs, the
sitemap and the OG image point at it). `/api/ask` declares `runtime = 'nodejs'` because the
Anthropic SDK runs there; every other route is static, so the corpus is rendered once at
build time and served from the edge cache.

`next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy` and `X-Frame-Options`,
and serves images as avif/webp.

**Rate limit.** `lib/rate-limit.ts` caps `/api/ask` at 10 requests per IP per 10-minute
fixed window and returns `429` with `Retry-After` past that. It is an in-process `Map` —
one small map, no Redis, no extra service. The caveat is explicit: each serverless instance
keeps its own counter, so the effective ceiling scales with the number of live instances.
That is an acceptable bound for a personal site; if traffic ever justifies it, swap in a
shared store behind the same `rateLimit(key)` signature.

---

## Deliberately not here

- **No vector database.** 112 chunks do not need embeddings, and a substring match is
  auditable in a way a cosine distance is not.
- **No CMS.** The content is the corpus: typed, in-repo, Zod-validated, reviewed in the same
  pull request as the code that renders it.
- **No streaming.** Citation ids are parsed out of complete text, and a 2–4 sentence answer
  does not earn the extra machinery.
- **No CSS-in-JS.** Tokens in `globals.css` plus Tailwind; one styling system, no colour
  literals loose in components.
- **No analytics.** Nothing to measure that would change what this site says, and no reason
  to ship a third-party script to a reader who came to check a claim.
- **No carousels, drawers, accordions or scroll-reveal.** Everything renders in one static
  pass, visible to a reader and a crawler alike.

---

## Contributing

`CLAUDE.md` at the repo root is the operating manual: the token layer, the component
contracts, the DRY/KISS rules a reviewer applies to every diff, the ESLint guardrails and
the reason each one exists, and the content rules — including the namespaces that are
owner-blocked and must not be filled in with invented facts. `.claude/` holds the agent
docs alongside it: the legacy audit and defect register in `.claude/`, and the
repo's slash commands in `.claude/commands/`.
