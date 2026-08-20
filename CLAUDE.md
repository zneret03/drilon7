# CLAUDE.md — drilon7 v2 operating manual

Read this before touching the repo. It is the contract; the code is the proof.

---

## 1. What this is

A personal portfolio rebuilt as a **retrieval-grounded corpus**: every factual claim on the site exists as a typed chunk with a stable id such as `EXP-FH-03`, validated by Zod at module load. The `/ask` console answers questions using only those chunks, cites each one inline, and shows the retrieval trace — which chunks scored, which were sent to the model, which lost. When the corpus cannot support an answer the console says so and names what is missing: **refusal is the feature**, because it is what makes the citations worth trusting. A citation only renders as a link when its id is one retrieval actually handed the model — `parseAnswer` takes that id set — so an id the model invents degrades to plain text rather than becoming a link to nothing.

---

## 2. Stack

Exact versions from `package.json` (`node >=20.9.0`, `.tool-versions` pins `nodejs 24.15.0`, `packageManager yarn@4.18.0`).

| Package | Version | Why it is here |
| --- | --- | --- |
| `next` | `^16.3.1` | App Router; Server Components render the corpus at build so retrieval costs nothing at runtime. |
| `react` / `react-dom` | `^19.2.8` | Required by Next 16. |
| `typescript` | `^6.0.3` | `strict` + `noUncheckedIndexedAccess` + `verbatimModuleSyntax`; the corpus is type-safe end to end. **Pinned one major back — see § 2.1.** |
| `tailwindcss` + `@tailwindcss/postcss` | `^4.3.3` | CSS-first v4 — tokens live in `app/globals.css`, there is **no** `tailwind.config`. |
| `zod` | `^4.4.3` | Single source of content shape: validates content and every type is inferred from it. |
| `lucide-react` | `^1.32.0` | The only icon source. Tree-shaken, no icon files, no raw SVG. |
| `clsx` + `tailwind-merge` | `^2.1.1` / `^3.6.0` | Behind `cn()` in `lib/cn.ts`; later classes win so callers can override defaults. |
| `@anthropic-ai/sdk` | `^0.117.1` | Optional generation in `/api/ask`. Absent key → deterministic extractive answer. |
| `vitest` | `^4.1.11` | Node-environment unit tests on the retrieval pass (`lib/retrieval/score.test.ts`). |
| `eslint` + `eslint-config-next` | `^9.39.5` / `^16.3.1` | Flat config; the custom block encodes this document's rules (§ 9). **Pinned one major back — see § 2.1.** |
| `jiti` | `^2.7.0` | Loads the TypeScript config files, so they work without Node's experimental type stripping. |
| `prettier` + `prettier-plugin-tailwindcss` | `^3.9.6` / `^0.8.1` | Formatting is not a review topic. Class order is sorted for you. |
| `@types/node`, `@types/react`, `@types/react-dom` | `^26.2.0`, `^19.2.18`, `^19.2.4` | Types match the runtimes; no `resolutions` override. |

### 2.1 Two deliberate version pins

`typescript` and `eslint` are each one major behind the newest release. Do **not** bump
them without checking these first — both were tried and both broke:

| Pin | Newest | Why it is held back |
| --- | --- | --- |
| `typescript@6.0.3` | `7.x` | `typescript-eslint` has no TS 7 support: the installed `@typescript-eslint/typescript-estree` declares `SUPPORTED_TYPESCRIPT_VERSIONS = '>=4.8.4 <6.1.0'`, so `6.0.3` is the newest release it will parse under. TS 7 also **removed** `baseUrl`, which is why `tsconfig.json` maps `@/*` through `paths` alone. |
| `eslint@9.39.5` | `10.x` | ESLint 10 removed the deprecated `context.getFilename()` / `context.getSourceCode()` accessors, and the `eslint-plugin-react@7.37.5` that `eslint-config-next@16` pulls in still calls them with no fallback — `lib/rules/jsx-filename-extension.js:64` and `lib/rules/forward-ref-uses-ref.js:60`. |

Re-test with `yarn up typescript eslint` when either upstream lands support; revert the pin
in the same commit that proves `yarn verify` still passes.

### 2.2 Package manager — Yarn 4

| Fact | Detail |
| --- | --- |
| Version | `yarn@4.18.0`, declared in `packageManager` **and** committed at `.yarn/releases/yarn-4.18.0.cjs` |
| Linker | `nodeLinker: node-modules` — Turbopack, `@tailwindcss/postcss` and `next/font` all expect a real tree; PnP buys nothing here |
| Why both the field and the release | Corepack users get 4.18.0 from `packageManager`; a machine whose global `yarn` is still Classic 1.x follows `yarnPath` to the same binary. Byte-identical Yarn everywhere. |
| Supply-chain gate | `npmMinimalAgeGate: 1440` in `.yarnrc.yml` quarantines npm versions younger than 24h. `lucide-react` and `@anthropic-ai/sdk` are pinned to the newest versions that clear it. **If an install fails with "quarantined", pin the previous version — never lower the gate.** |
| Lockfile | `yarn.lock` is committed; `package-lock.json` is gitignored. CI runs `yarn install --immutable`. |

### 2.3 Configuration is TypeScript

Every config that can be TypeScript is TypeScript, so a typo in an option name fails
`yarn typecheck` instead of being silently ignored at runtime:

| File | Typed as | Verified loaded by |
| --- | --- | --- |
| `next.config.ts` | `NextConfig` | `next build` prints `Running next.config.ts` |
| `eslint.config.ts` | `Linter.Config[]` | `eslint --print-config` shows the custom rules |
| `prettier.config.ts` | `Config` | `prettier --check` honours `singleQuote` |
| `postcss.config.ts` | local literal type | a deliberately bad plugin name fails the build |
| `vitest.config.ts` | `defineConfig` | `vitest run` resolves the `@/` alias |

`tsconfig.json`, `package.json` and `.github/workflows/ci.yml` stay in their required
formats — JSON and YAML have no TypeScript equivalent.

### Removed in v2 — do not reintroduce

| Gone | Why |
| --- | --- |
| `styled-components` | Replaced by the Tailwind token layer. The legacy `:root` hexes were ported verbatim, so zero visual drift and a smaller bundle. ESLint errors on the import. |
| `react-slick` | The carousel showed 3 of 6 roles behind dots and hid the rest from crawlers — six is what the legacy `slidesToShow: 3` config held; `content/roles.ts` ships eight only because the migration added the roles the old site never listed. The Experience screen is now a static timeline. ESLint errors on the import. |
| `react-spring` | Four majors behind and used only for entrance motion. Replaced by `animate-rise` / `animate-blink` / `animate-sweep` in `globals.css`. |
| `react-helmet` | Superseded by the App Router Metadata API — see `lib/seo.ts` and per-route `generateMetadata`. |
| `aos`, `scrollreveal`, `smooth-scroll` | Scroll-triggered reveal meant content did not exist until you scrolled. Everything now renders in one static pass. Also the source of the broken reveal wiring and the duplicated unthrottled scroll listeners in `.claude/defects.md`. |
| `next-pwa` | A service worker cached a portfolio nobody installs, and it fought the App Router. `public/manifest.json` and the icons stay; the plugin does not. |
| `react-feather` | One icon library, not two. ESLint errors on the import. |
| `.babelrc` | It disabled the SWC compiler for the whole app. Deleted; SWC is the compiler. |
| `NODE_OPTIONS=--openssl-legacy-provider` | A Node 17 workaround for a Webpack 4 hash. Nothing needs it on Node 24; keeping it would have re-enabled a retired OpenSSL provider. |

---

## 3. Commands

| Command | Reach for it when |
| --- | --- |
| `yarn dev` | Local development. |
| `yarn build` | Reproducing a production build; also the last gate in `verify`. Type errors **fail** it (`next.config.ts` sets `typescript.ignoreBuildErrors: false`). Lint is a **separate** gate — Next 16 removed the `eslint` config key along with `next lint`, so the build runs no linter at all. |
| `yarn start` | Serving the built output. |
| `yarn lint` | After any edit to `.ts`/`.tsx`. This is where the § 9 guardrails fire. |
| `yarn lint:fix` | Autofixable lint only — import style, unused vars. |
| `yarn typecheck` | `tsc --noEmit`. The fastest way to catch a `noUncheckedIndexedAccess` miss. |
| `yarn format` | Write Prettier formatting. Never hand-format. |
| `yarn format:check` | What CI runs first. |
| `yarn test` | `vitest run`, collects `lib/**/*.test.ts` and `app/**/*.test.ts`. |
| `yarn test:watch` | While changing retrieval scoring. |
| **`yarn verify`** | **The pre-push gate.** `format:check → lint → typecheck → test → build`. Nothing lands without it. |

`.github/workflows/ci.yml` runs the same five steps in the same cheapest-first order on every push to `main` and every PR, so a formatting slip fails in seconds rather than after a build.

---

## 4. Folder structure

```
.
├── .claude/                     agent docs — flat: every plan sits at this level
│   ├── section-parity.md        legacy site → v2, nothing dropped without a replacement
│   ├── work-section-parity.md   velquortech /work pattern → this repo, and what was cut
│   ├── defects.md               the legacy defect register, D-01 … D-12, with v2 status
│   ├── gap-analysis.md          senior-role signals, G-01 … G-09
│   ├── action-items.md          the single backlog: P0/P1/P2 plus the W series
│   ├── workflow.md              branch names, commit types, the local and PR loops
│   └── commands/                slash commands (/react-doctor, /pr-review)
├── .github/workflows/ci.yml     verify, cheapest step first
├── .yarn/releases/              the pinned yarn 4.18.0 binary — committed
├── .yarnrc.yml                  yarnPath, node-modules linker, 24h age gate
├── yarn.lock                    committed; CI installs with --immutable
├── next.config.ts               strict build, avif/webp, security headers
├── eslint.config.ts             flat config + the custom guardrail block (§ 9)
├── prettier.config.ts           no semis, single quotes, width 90
├── postcss.config.ts            @tailwindcss/postcss, nothing else
├── vitest.config.ts             node env, @/ alias, colocated *.test.ts
├── tsconfig.json                strict, noUncheckedIndexedAccess, @/* → ./*
├── .env.example                 ANTHROPIC_API_KEY, ASK_MODEL, NEXT_PUBLIC_SITE_URL
├── public/                      image/, /Resume.pdf, /certificates/*.pdf, manifest.json
├── app/                         routes only — one folder per screen
│   ├── globals.css              ← the design tokens. Single source of colour.
│   ├── layout.tsx               fonts as CSS variables, CommandBar + main + Footer;
│   │                            metadata carries manifest: '/manifest.json'
│   ├── favicon.ico              app-dir convention — Next emits the <link> itself
│   ├── (home)/                  Home; route group keeps its _components off the root
│   ├── not-found.tsx            "Not in the corpus."
│   ├── opengraph-image.tsx      generated OG card — the one file with inline hexes (§ 5)
│   ├── sitemap.ts robots.ts     real routes, siteUrl-based
│   ├── experience/              static timeline, every bullet citable
│   ├── work/                    the archive index; _components/ stats + archive list
│   ├── work/[slug]/             one page per project; generateStaticParams + notFound()
│   ├── ask/                     console; _components/ (client island),
│   │                            _lib/parse-answer.ts, _lib/ask-client.ts, _types/
│   ├── sources/                 browsable corpus; _components/ filter chips
│   ├── contact/                 mailto, socials, resume
│   └── api/ask/route.ts         POST JSON → { answer, trace, engine }
├── components/                  GLOBAL, reusable
│   ├── ui/                      container, section, panel, button, card, badge, chip,
│   │                            chunk-id, kbd, stat-block, tag-list, external-link,
│   │                            empty-state, index.ts (barrel)
│   └── layout/                  brand-mark, command-bar, footer
├── content/                     the corpus source. schema.ts + one file per source,
│                                index.ts builds and validates it; namespaces.ts holds
│                                the namespace codes with zero imports, so a client
│                                leaf can check a citation prefix without zod
├── hooks/                       use-hotkey.ts
├── lib/                         cn, env, icons, nav, rate-limit, seo, suggestions,
│                                retrieval/
└── types/                       content.ts, retrieval.ts, index.ts (barrel)
```

**Placement rule — apply it without debate:**

- Reusable by more than one route → `components`, `lib`, `hooks`, `types`.
- Used by **exactly one** route → that route's `_components/`, `_lib/`, `_types/`.
- The leading underscore is what keeps those folders out of the router — no underscore and Next treats the folder as a segment.

**The moment a route-local file gains a second consumer, move it up to the global folder — in the same commit as the second caller.** Never import across routes (`app/sources/_components/...` from `app/ask/...` is wrong twice: it is a layering violation and `../../` is a lint error). Promotion is cheap; a cross-route import is a knot.

---

## 5. Design system

### Two layers, defined once in `app/globals.css`

1. **Palette** — raw named hexes, ported verbatim from the legacy `css/GlobalStyles.tsx` `:root`. `--color-navy`, `--color-green`, the slate family. Edited nowhere else.
2. **Semantic roles** — aliases pointing at the palette. `--color-background`, `--color-surface`, `--color-heading`. **Components use only this layer.**

Recolouring the site is one edit in layer 1. Reach into the palette directly only when no semantic role exists (`bg-dark-navy` for the footer ground is the one sanctioned case).

| Class | Meaning | Hex |
| --- | --- | --- |
| `bg-background` | page ground | `#0a192f` |
| `bg-surface` | panel / console body | `#0d1f3a` |
| `bg-surface-raised` | panel header strip | `#122845` |
| `border-line` | hairline divider | `#172a45` |
| `border-line-strong` | panel border, inactive marks | `#303c55` |
| `text-heading` | headings | `#e6f1ff` |
| `text-body` | body prose | `#a8b2d1` |
| `text-body-strong` | answer prose, emphasised body | `#ccd6f6` |
| `text-muted` | mono meta, labels | `#8690b0` |
| `text-accent` / `bg-accent` | the green | `#64ffda` |
| `bg-accent-hover` | green hover | `#9dffe8` |
| `bg-accent-wash` | 10% green fill | `rgb(100 255 218 / .1)` |
| `bg-dark-navy` | deepest ground (footer) | `#020c1b` |

### Type

`font-sans` = Instrument Sans (`--font-instrument-sans`) · `font-mono` = JetBrains Mono (`--font-jetbrains-mono`), both loaded through `next/font/google` in `app/layout.tsx` with `display: 'swap'`.

| Class | px | Use |
| --- | --- | --- |
| `text-2xs` | 12 | citation chips, badges, brand initials |
| `text-xs` | 13 | mono meta, `mono-label` |
| `text-sm` | 14 | nav items, trace rows |
| `text-base` | 16 | controls |
| `text-prose` | 17 | default body prose (set on `body` in the base layer) |
| `text-lg` | 18 | card titles |
| `text-lead` | 19 | hero lead paragraph |
| `text-xl` | 20 | section subheads |
| `text-2xl` | 22 | `h3` on case study sections |
| `text-subsection` | 26 | paired column headings (`(home)/_components/writing-and-recognition.tsx`) |
| `text-section` | 32 | `h2` / screen titles (`ui/section.tsx`, `ui/stat-block.tsx`) |
| `text-display` | clamp 40→76 | the one `h1` per page |

**`text-body`, `text-body-strong` and `text-heading` are COLOUR utilities, not sizes.** Tailwind resolves the `text-*` namespace against `--color-*` before `--text-*`, so a `--text-body` token would be shadowed by `--color-body` and never emit a `font-size` — the compiled CSS just yields `.text-body{color:…}`. That is why the size tokens the redesign added are named `--text-prose`, `--text-subsection` and `--text-section`; `globals.css` says so in the comment above the scale. Writing `text-body` expecting 17px silently sets a colour and leaves the size inherited.

Tracking: `tracking-mono` (.12em, uppercase mono) · `tracking-display` (−.035em, display only). Utility `mono-label` = mono + 13px + uppercase + wide tracking; use it instead of restating those four classes.

Shape, motion, layout: `rounded-sm` (5px) · `shadow-hard` (10px offset block) · `shadow-hard-sm` (3px) · `shadow-lift` / `shadow-lift-hover` · `ease-standard` · `max-w-page` (1240px) · `h-bar` (4rem) · `animate-rise`, `animate-blink`, `animate-sweep`. `prefers-reduced-motion` is handled once in the `@layer base` block — never re-implement it per component.

### Vertical rhythm — one owner per page

`ui/section.tsx` carries **no** vertical padding. The page that stacks sections owns the
spacing, through exactly one `gap-*` (flex/grid) or `space-y-*` (wrapper div):

| Page | Rhythm |
| --- | --- |
| `(home)/page.tsx` | `gap-16 md:gap-20` on the column |
| `experience/page.tsx` | `space-y-20` |
| `work/page.tsx` | `space-y-20` |
| `work/[slug]/page.tsx` | `space-y-16` — denser, it is a reading page |
| `sources`, `ask`, `contact` | single section, `mt-12` |

**Never give `Section` a `py-*` and never add a second gap on top of the wrapper.** Both
happened: `Section` had `py-16` while `/experience` also had `space-y-24`, so two adjacent
sections sat **224px** apart, and the same double-count put 208px between the home
sections while `/work` used 128px — three rhythms on one site, two of them accidental.

### Hard rule

**No `#hex`, no `rgb(...)`, no arbitrary Tailwind colour value (`bg-[#0a192f]`, `text-[rgb(...)]`) may appear in a component.** Token classes only. A colour a token cannot express is a missing token: add the semantic role in `globals.css`, then use it.

**One sanctioned exception: `app/opengraph-image.tsx`.** It renders through Satori (`next/og`), which reads inline `style` objects and cannot see a Tailwind class or a CSS custom property, so its eight colours are copied from the palette by hand. Nothing else may follow it, and a new hex anywhere else is a review reject. The check is scoped to match:

```bash
grep -rn '#[0-9a-fA-F]\{3,6\}' app components \
  --include='*.ts' --include='*.tsx' | grep -v opengraph-image
```

must return nothing. (`--include` also excludes `globals.css`, which is where the palette is supposed to live.)

### Visual language

- **Square corners.** `rounded-sm` is 5px and rare; panels, cards and buttons are square.
- **Hard offset shadows**, not blurs — `shadow-hard` on panels, `shadow-hard-sm` on the brand mark.
- **Mono for labels, meta, ids and numbers**; sans for prose. Mono is the machine voice, and this site is about machine-checkable claims.
- **No greyscale on imagery.** The legacy site desaturated every screenshot and restored colour on hover. Screenshots are the evidence — show them in colour, no hover trick.
- **Nothing hidden behind carousels, drawers, accordions, "show more", or scroll-reveal.** One static pass. Mobile nav is a horizontally scrollable row, not a hamburger.
- Page frame is always `mx-auto max-w-page px-7` (that is `Container`).
- Section headers are always the same pattern (7px green square · mono kicker · hairline rule · optional right meta) — that is `Section`, never hand-rolled.

---

## 6. Icons

- **`lucide-react` only.** Import the component you need: `import { ArrowUpRight } from 'lucide-react'`.
- **No raw SVG.** `<svg>` and `<path>` are ESLint errors (§ 9). No icon files, no icon components of your own, no `<img>` for an icon.
- **lucide v1 has no brand icons.** GitHub, LinkedIn, dev.to and Instagram do not exist as glyphs. Pair a generic icon with an explicit text label — the label carries the brand, and it reads better to a screen reader than a logo ever did.
- **`@/lib/icons` is only for name-driven content.** `resolveIcon(name)` exists because `profile.socials[].icon` is a string in a content file. A component that knows its icon at author time imports from `lucide-react` directly — do not route a literal through `resolveIcon`.
- Icon-only controls need an `aria-label`. Decorative icons beside a text label need nothing.

---

## 7. Principles — DRY and KISS

These are the two rules a reviewer applies to every diff here. Each one has a live example in this repo.

### DRY — say it once

| Rule | Example in this repo | Reviewer check |
| --- | --- | --- |
| **The token layer is the single source of colour.** | `globals.css` defines palette → semantic; not one component contains a hex. | Any `#`, `rgb(`, or `bg-[...]` in `app` or `components` → reject. |
| **The corpus is built in exactly one function.** | `buildCorpus()` in `content/index.ts` flattens every source into `Chunk[]` in one pass. Adding a citable source means adding **one block** there. | A route that maps content into chunk-shaped objects → reject; extend `buildCorpus`. |
| **Types are inferred from Zod schemas.** | `types/content.ts` is `z.infer<typeof roleSchema>` and friends, so a shape cannot drift from its validator. Nested types come off the parent (`Role['bullets'][number]`). | A hand-written `interface` mirroring a schema → reject. Change `schema.ts`; the type follows. |
| **Derived numbers are computed, never typed twice.** | `stats` derives from `roles.length`, unique orgs, `projects.length + archiveProjects.length` and `Math.max` over skills; `chunkCountByNamespace` counts the corpus. The legacy site hard-coded a project count that went stale the moment the archive was deduped. | A literal count, total, or year span in JSX → reject; derive it. |
| **Shared markup becomes a component the second time it appears.** | The citation chip renders in console answers, experience bullets and the sources list → `ui/chunk-id.tsx`. The section header renders on every screen → `ui/section.tsx`. Class joining happens in exactly one place → `cn()`. | Copy-pasted JSX in a second file → move it to `components` in the same commit. |
| **One helper per job.** | `pageMetadata()` for metadata, `serverEnv()` for env, `rateLimit()` for the cap, `tokenize()` for splitting. | A second local `slugify`/`clsx`/`formatX` → use the existing one or promote it. |

### KISS — no machinery you cannot justify

| Rule | Example in this repo |
| --- | --- |
| **No abstraction until a second caller exists.** | `useHotkey` is one hook because every shortcut on the site has the same shape; `contentIcons` is a flat map, not a registry, because only social links are name-driven. Do not add a provider, factory, or generic wrapper for one call site. |
| **The retrieval pass is a keyword scorer, not a vector database.** | `lib/retrieval/score.ts`: tokenize, weight longer terms higher, drop zero-score chunks, sort. Seventy-four chunks do not need embeddings, and a substring match is auditable in a way a cosine distance is not. pgvector stays an open item, not a dependency. |
| **`/api/ask` returns JSON, not a stream.** | Citation ids must be parsed out of **complete** text (`app/ask/_lib/parse-answer.ts`); a half-arrived `[EXP-` is not a citation. A 2–4 sentence answer does not earn the streaming machinery. The route says so in a comment. |
| **The rate limiter is an in-process `Map`.** | `lib/rate-limit.ts`: fixed window, opportunistic sweep, no Redis, no new service. The trade-off (per-instance counters) is documented in the file. Swap it out when traffic justifies it, not before. |
| **No state library.** | Console turns are `useState` inside one client island. There is no global store because there is no cross-route state. |
| **No CSS-in-JS.** | Tokens plus Tailwind. `styled-components` is a lint error. |
| **No icon library beyond lucide.** | Nothing enters `package.json` that a token, a helper, or twenty lines of local code can do. |
| **Degrade, never crash.** | No API key, an SDK throw, **or a generation that stopped on `max_tokens` or `refusal`** → `extractiveAnswer` and `engine: 'extractive'`. A clipped body is not an answer: its last sentence is cut and a citation truncated before its `]` silently stops being a citation, so it degrades on the same path as a throw. The ask endpoint never 500s for a model failure. |

### When DRY and KISS disagree

- **Duplicate twice, extract on the third.** Two similar blocks are cheaper to read than a premature abstraction with three boolean props.
- **Never abstract across two things that merely look alike.** A role bullet and a case-study section both render a mono label above prose; they answer to different data and will diverge. One component with a `variant` union spanning unrelated concepts is worse than two honest ones.
- If the extraction needs a flag to serve its second caller, it was not shared logic.

---

## 8. Conventions

**Rendering**
- **Server Components by default.** Data comes from `@/content` at build; most screens need nothing else.
- `'use client'` only where state, effects or event handlers are genuinely required, and only on the **smallest leaf**: the command bar, the console island, the sources filter chips, the home console teaser. Layout, footer, brand mark, cards and sections stay server.
- Never mark a page `'use client'` to fix one interactive child — extract the child.

**Content**
- Every content edit goes through a Zod schema in `content/schema.ts`. Types are inferred from the schema — never hand-write a matching `interface`.
- New chunk ids follow `NS-SCOPE-NN` and must be unique; `content/index.ts` throws at import on a duplicate, so a collision fails the build rather than the page.
- A claim that stands on its own gets its own chunk. Role bullets, case-study sections and project `highlights` all use the same `{ id, text }` shape and are all flattened by `buildCorpus()` — one block per source, no per-namespace special cases.
- `featured` curates the home grid **through the `featuredProjects` export**, not through a filter inside a component. It was a flag nothing read until the 2026 work arrived and ten projects tried to render as "Selected work".
- `projectSchema.timeline` is a free string, not a `^\d{4}$` year: several projects are on record with a duration and no start date, and a year would have to be invented to satisfy the stricter shape. Never invent one.
- Private repo or unreachable deployment → `source: ''` / `demo: ''`. The UI states the absence; it never renders a link that bounces. A Vercel preview behind deployment protection counts as unreachable.

**TypeScript**
- `import type { Chunk } from '@/types'` — separate type imports, enforced by lint and required by `verbatimModuleSyntax`.
- `noUncheckedIndexedAccess` is on: `arr[0]` is `T | undefined`. Guard it — `scored[0]?.score ?? 1`, `forwarded?.split(',')[0]?.trim()`, `metrics.at(0)` with an explicit throw. No `!`, no `as` to paper over it.
- All shared types come from `@/types`. Route-only types go in `app/<route>/_types/`.

**Imports**
- `@/` alias for anything outside the current folder. `./sibling` is fine. `../../` is an ESLint error.

**Naming**
- Files: `kebab-case.ts(x)` — `use-hotkey.ts`, `case-studies.ts`, `chunk-id.tsx`.
- Components: `PascalCase`, one primary export per file, named to match the file.
- Helpers: `camelCase`. Module constants: `SCREAMING_SNAKE` (`DEFAULT_K`, `NAV`, `NAMESPACES`).
- Route folders: lowercase, one per screen; private folders prefixed `_`.

**Next 16 specifics**
- `params` and `searchParams` are Promises: `const { slug } = await params`, `const { q = '' } = await searchParams`.
- Dynamic routes need `generateStaticParams`, `generateMetadata`, and `notFound()` for unknown input.
- Metadata comes from `pageMetadata()` in `@/lib/seo` — never hand-build an `openGraph` object.
- Images: `next/image` with **real** alt text describing the screenshot. The legacy site shipped `alt=""` and `alt="featured "`.
- Route handlers declare their runtime (`export const runtime = 'nodejs'`).

**Content**
- **Every content edit goes through a Zod schema.** Files in `content` parse themselves through `schema.ts` at module load, so a malformed entry fails the build, not the page. New field → add it to the schema first; the type and the validation both follow.
- New chunk ids follow **`NS-SCOPE-NN`** (`EXP-FH-03`, `PRJ-NAIL-01`, `CSE-NAIL-02`, `MET-01`), matching `/^[A-Z]{3}(-[A-Z0-9]+)+$/` where `NS` is one of the eleven codes in `content/namespaces.ts`. That file has **zero imports** on purpose: `content/schema.ts` builds `namespaceSchema` from it, and the console's client island checks a citation prefix against the same array without pulling zod or the corpus into the browser bundle. Ids must be **unique across the whole corpus** — `content/index.ts` throws on a duplicate, because a repeated id breaks the citation contract silently.
- A case study slug must match a project slug; `index.ts` throws otherwise.
- Absent data is rendered honestly. `source`, `demo` and `image` may be `''` — state the absence, never emit a dead link.
- Never read `process.env` in a component. `serverEnv()` and `siteUrl` from `@/lib/env`.

**Accessibility**
- One `h1` per page, headings in order, no level skipped.
- `aria-label` on every icon-only control; `aria-current` on the active nav item.
- Interactive elements are `<button>` or `next/link` — never a `<div>` with `onClick`, never a bare `<a>` for an internal route.

---

## 9. Guardrails ESLint enforces

`eslint.config.ts` = `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript` + a custom block that encodes this document. Every rule exists because of a specific defect in `.claude/defects.md`.

| Rule | Blocks | Defect it prevents |
| --- | --- | --- |
| `no-restricted-syntax` → `<svg>` | Hand-rolled SVG elements | Icon markup duplicated per component and drifting from the palette; lucide is the one source (§ 6). |
| `no-restricted-syntax` → `<path>` | Hand-rolled SVG paths | Same. |
| `no-restricted-syntax` → `dangerouslySetInnerHTML` | Any use, anywhere | **D-01, HIGH:** three legacy components piped remote GitHub Pages JSON straight into the DOM — write access to that repo meant script execution on the site. |
| `no-restricted-syntax` → `<img>` | Raw image tags | Unsized, eager, unnegotiated images and the empty-`alt` accessibility failures. `next/image` sizes, lazy-loads and serves avif/webp. |
| `no-restricted-imports` → `styled-components` | Reintroducing CSS-in-JS | Two styling systems, and colour literals escaping the token layer. |
| `no-restricted-imports` → `react-feather` | A second icon library | Two icon sets, two visual grammars, double the bundle. |
| `no-restricted-imports` → `react-slick` | A carousel | Half the experience hidden behind dots and invisible to crawlers. |
| `no-restricted-imports` → pattern `../../*` | Deep relative reaches | Fragile paths that break on every file move and hide layering violations. Use `@/`. |
| `@typescript-eslint/consistent-type-imports` (separate type imports) | Mixed value/type imports | Type-only imports surviving into the runtime bundle; also required by `verbatimModuleSyntax`. |
| `@typescript-eslint/no-unused-vars` (`^_` exempt) | Dead bindings | The legacy sticky-scroll state that was computed on every scroll event and never read. |
| `eqeqeq` (`null` ignored) | `==` / `!=` | Coercion bugs around `''` and `0` — and `''` is a meaningful value in this content model. |
| `no-console` (`warn`/`error` allowed) | Stray `console.log` | Debug output shipping to production. |

Also non-negotiable, outside ESLint:

- **Type errors fail the build.** `next.config.ts` keeps `typescript.ignoreBuildErrors: false`; the legacy config silenced it. There is deliberately **no** `eslint` key beside it — Next 16 removed `eslint.ignoreDuringBuilds` along with `next lint`, so `next build` never lints. Lint is its own gate: `yarn lint` locally, the Lint step in `.github/workflows/ci.yml`, and the `lint` link in the `verify` chain. Do not read a green build as a green lint.
- **Security headers.** `next.config.ts` sets `X-Content-Type-Options`, `Referrer-Policy` and `X-Frame-Options`.
- **No secrets in git.** `.env` is untracked and gitignored (along with `.env.local` and `.env*.local`); `.env.example` is the only tracked template. The legacy repo committed a `.env` pointing at a Heroku backend that no longer exists.
- **Install metadata ships.** `app/favicon.ico` uses the app-dir file convention so Next emits the `<link>` itself, and `app/layout.tsx` declares `manifest: '/manifest.json'` against the `public/manifest.json` that survived `next-pwa`'s removal.

---

## 10. Review loop

Run in this order. Do not skip to `verify` — it checks that the code compiles, not that it is good.

1. **`/react-doctor`** on any React you generated or hand-wrote, **before it lands**. Catches client/server boundary mistakes, missing keys, effect misuse, and hooks doing work a Server Component should do.
2. **`/pr-review`** on the diff, before opening the PR. Reads the change against § 7 and § 8 — duplication, premature abstraction, token violations, placement.
3. **`yarn verify`** last: `format:check → lint → typecheck → test → build`. Same steps CI runs.

Fix what those find in the same branch. `.claude/workflow.md` has the full loop; `.claude/action-items.md` has what is still open — read it before proposing new work, so you do not re-file something already triaged. Slash commands live in `.claude/commands/`; the legacy audit and defect register live in `.claude/`.

---

## 11. Content is owner-blocked — do not fill the gaps

Of the eleven namespaces in `content/namespaces.ts`, three are deliberately thin. They are the owner's to write, and inventing content would destroy the only thing this site claims: that every statement is sourced. (`CSE` is the newest and is **not** one of them: the `/work` write-up used to assert facts no chunk backed, so `buildCorpus()` now emits one chunk per case-study section plus one for the pipeline.)

| Namespace | State |
| --- | --- |
| `MET` | **One** verified figure (`MET-01`: the Senti.AI BIR 2307 platform digitising 50,000+ files a month via OCR) against **eight** roles. That single chunk is the source for the `50k+` home stat. |
| `STY` | "How he builds" — declared in the schema and `NAMESPACES`, intentionally **empty**. |
| `OPN` | "Positions held" — declared, intentionally **empty**. |

Rules:

- **Never invent a number**, a percentage, a user count, a latency figure, a team size, or a date. If it is not in `content`, it does not exist.
- **Never write a testimonial or a quote.** There are none in the repo or the resume, and a fabricated one is unrecoverable.
- **Never write role descriptions.** The current Emapta Global role has employer, location and start date only. The console correctly refuses to characterise it — that refusal is working as designed, not a bug to patch.
- Do not delete `STY` and `OPN` to make the Sources screen look complete. Empty namespaces render `EmptyState` explaining they are declared and unwritten. Visible absence is the honest state.
- Do not silently widen a Zod schema to admit softer content. If a claim needs a hedge, the hedge is the content (`skills` are labelled "approximate" for exactly this reason).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
