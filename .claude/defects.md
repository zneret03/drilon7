# Legacy defects — findings and their state in v2

Purpose: keep the twelve defects found in the legacy code citable by id, each with what v2 did about it.
Audit date: **2026-08-19**. Line numbers refer to the legacy tree, still readable at `HEAD`
(`git show HEAD:<file>`) — the migration deletes those files in this working tree.

Grouped HIGH first. **Status in v2** is one of *fixed* (gone, with the file that replaced it), *prevented*
(a lint rule or type now blocks the pattern), or *still open*. Most are both fixed and prevented; the guard
table at the end maps every guard back to the id it defends.

## HIGH

### D-01 · Untrusted remote HTML injected into the DOM
Legacy: `components/Featured.tsx:333`, `components/Projects.tsx:262`, `components/WorkExperience.tsx:200`
Finding: all three passed a `description` field straight from `https://zneret03.github.io/drilon7_api/main.json`
into `dangerouslySetInnerHTML`. That file is a public GitHub Pages document — write access to it meant script
execution on the portfolio origin.
Status in v2: **fixed and prevented.** The remote JSON is gone; content is typed TypeScript in `content/*`,
parsed through `content/schema.ts` at module load and rendered as text nodes. Reintroducing the attribute is
an ESLint error (`no-restricted-syntax`, `eslint.config.ts`), and the rule message points back at this id.

### D-02 · Content frozen at build time
Legacy: `pages/index.tsx:31`
Finding: `getStaticProps` fetched `process.env.STATIC_API` with no `revalidate` and no on-demand revalidation,
so an edit to `main.json` never reached the live site until someone redeployed.
Status in v2: **fixed.** There is no fetch. `content/*` compiles into the bundle, `buildCorpus()` in
`content/index.ts` flattens it once per process, and the only route to production is a commit through
`.github/workflows/ci.yml`. The same import also throws on a duplicate chunk id or a case study whose slug has
no project, so a content mistake fails the build rather than a page.

### D-03 · Dead backend referenced from a committed `.env`
Legacy: `.env` (tracked in git)
Finding: `PRODUCTION="https://strapi-drilon7.herokuapp.com/graphql"` had not existed since Heroku retired its
free tier, alongside a `localhost:1337` Strapi URL and the GitHub Pages `STATIC_API`. The file was tracked.
Status in v2: **fixed.** `.env` is deleted and ignored — it is absent from the working tree, absent from
`git ls-files`, and `.gitignore` covers `.env`, `.env.local` and `.env*.local`;
`.env.example` documents the three remaining variables with empty values. Server variables are read through the
Zod-parsed accessor in `lib/env.ts`, so a missing `ANTHROPIC_API_KEY` degrades `/api/ask` to the extractive
answerer instead of breaking anything. No Strapi or GraphQL dependency remains in `package.json`.

## MED

### D-04 · Invalid CSS shipping to production
Legacy: `components/Projects.tsx:146` (`max-width: 4 00px`), `components/LandingPage.tsx:162` and `:179`
(`font-weight: 600px`)
Finding: both declarations are invalid and silently dropped, so the hero name rendered at normal weight and a
project column had no max width. Nothing warned, because they were strings inside styled-components templates.
Status in v2: **fixed and prevented.** styled-components is gone and a restricted import, so there are no CSS
strings to typo: every rule is a Tailwind utility resolved against the tokens in `app/globals.css`, and no
component carries a raw length or colour literal. A wrong utility name yields no declaration at all rather than
a malformed one, which fails visibly in review instead of silently at runtime.

### D-05 · Half the experience hidden behind a carousel
Legacy: `components/WorkExperience.tsx:13` (`slidesToShow: 3`), `:16` (`arrows: false`)
Finding: a recruiter saw three of six roles and had to find the dots. Carousel content also indexes poorly.
Status in v2: **fixed and prevented.** `app/experience/_components/role-timeline.tsx` renders all eight
roles from `content/roles.ts` as an `<ol>`, every bullet visible with its own `ChunkIdChip`. `react-slick`
is a restricted import in `eslint.config.ts`.

### D-06 · Images stripped of colour by default
Legacy: `components/Featured.tsx:286` and `:292`, `components/WorkExperience.tsx:108`,
`components/About.tsx:133–141` via `--filter` / `--filter-colored` in `css/GlobalStyles.tsx:130–134`
Finding: `grayscale(100%)` on every project and job image, restored only on hover. The screenshots are the
evidence; desaturating them by default hid the work.
Status in v2: **fixed.** No filter token exists in `app/globals.css` and no component applies one — imagery
renders in colour at rest, with no hover restore to discover.

### D-07 · Missing and empty alt text
Legacy: `components/WorkExperience.tsx:190` (`alt=""`), `components/Featured.tsx:366` (`alt="featured "`),
`components/LandingPage.tsx:283` (`alt=''` on the profile card)
Finding: decorative-empty alt on images that carry meaning, and one alt that is a stray word plus a space. Both
fail an accessibility pass and both were one-line fixes.
Status in v2: **fixed and prevented.** `<img>` is an ESLint error, so every image is a `next/image`, which
`jsx-a11y/alt-text` covers (`eslint-config-next` configures it with `img: ['Image']`). Alt text is written per
image from the content it shows, and icon-only controls carry `aria-label` instead of an empty alt.

### D-08 · Unthrottled scroll listeners, duplicated
Legacy: `components/LandingPage.tsx:232–247`, `components/LeftContent.tsx:119–128`
Finding: both components registered the same `mountNavbar` handler reading `window.pageYOffset` on every scroll
event, with no rAF and no throttle. `LandingPage`'s `sticky` state was computed and never rendered.
Status in v2: **fixed by deletion.** Stickiness is CSS on the command bar, not state. the app tree contains exactly
one `addEventListener` — the ⌘K `keydown` in `hooks/use-hotkey.ts`, bound once and removed in the same
effect's teardown.

## LOW

### D-09 · Broken scroll-reveal wiring
Legacy: `components/Projects.tsx:177–183`, ref attached at `:216`
Finding: `useAnimationScroll(revealSubTitle)` was assigned to both `title` and `subTitle`; the `revealTitle` ref
was attached to the heading and never animated. The heading therefore never revealed, and nothing failed loudly.
Status in v2: **fixed by deletion.** `aos`, `scrollreveal` and `react-spring` are gone. The one reveal is the
`--animate-rise` token in `app/globals.css:85`, applied as a class — there is no per-element wiring left to
get wrong. No ESLint rule prevents this class of bug; removing the machinery is what prevents it.

### D-10 · Keyless list and off-palette colour
Legacy: `components/LandingPage.tsx:288–289`
Finding: `[...Array(5)].map(() => <Icons name='Star' fill='#2AFF4C' />)` — five children with no `key`, filled
with a green that appears in no design token. The rating it decorated had no source.
Status in v2: **fixed and prevented.** The star card is cut (see `section-parity.md`, Hero row). Hand-rolled
`components/icons/*` is replaced by lucide-react; `<svg>` and `<path>` are ESLint errors and `react-feather` is
a restricted import. `react/jsx-key` (from `react/recommended` inside `next/core-web-vitals`) errors on the
missing key, and a hex literal has nowhere to live because components only reference semantic token classes.

### D-11 · Dependency drift
Legacy: `package.json`
Finding: `next@^12` with `NODE_OPTIONS='--openssl-legacy-provider'` on the dev script, `react-spring@^8` four
majors behind, and a `resolutions` block pinning `@types/react` to `^19` while `react` was `^18`.
Status in v2: **fixed.** Next 16.3.1, React 19.2.8, TypeScript **6.0.3**, no `NODE_OPTIONS` flag, no
`resolutions` block, eight runtime dependencies total (`package.json`). `yarn verify` runs format, lint,
typecheck, test and build, and CI runs the same chain cheapest-first.

TypeScript is 6, not 7, and that is deliberate rather than drift: `typescript-eslint` has no TS 7 support —
the installed `@typescript-eslint/typescript-estree` declares `SUPPORTED_TYPESCRIPT_VERSIONS = '>=4.8.4 <6.1.0'`
— so `yarn lint` would run outside its parser's supported range. TS 7 also removed `baseUrl`, which is why
`tsconfig.json` maps `@/*` through `paths` alone. `eslint` is held at 9 for the matching reason: ESLint 10
removed the deprecated `context.getFilename()` / `context.getSourceCode()` accessors that the
`eslint-plugin-react@7.37.5` behind `eslint-config-next@16` still calls with no fallback. Both pins, and the
condition for lifting them, are in `CLAUDE.md` § 2.1 — fixing dependency drift is not the same as taking
every newest major.

### D-12 · Permanent empty state on failure
Legacy: `components/Projects.tsx:224`, `components/Certificates.tsx:88`
Finding: `Please Wait...` rendered whenever the array was empty — but the data was static, so a build-time fetch
failure left that message on the page forever.
Status in v2: **fixed.** There is no fetch to fail, and Zod parses every module in `content` at import, so
malformed content fails the build. Genuine emptiness is stated rather than spun: `EmptyState` on `/sources` for
the declared-empty `STY` and `OPN` namespaces, and an explicit note where a project's `demo` is `''`.

## Still open

None of the twelve. Every defect is closed in code; what remains open is content, tracked in
`.claude/action-items.md` (P0-01, P0-02, P2-01) and `.claude/gap-analysis.md`.

## Guards → defects

Every rule in the custom block of `eslint.config.ts`, plus the inherited rules that carry a defect, and what
each one defends. A dash means the guard encodes a convention rather than a past defect.

| Guard | Where | Level | Prevents |
| --- | --- | --- | --- |
| `no-restricted-syntax` · `dangerouslySetInnerHTML` attribute | custom block | error | D-01 |
| `no-restricted-syntax` · `<svg>` element | custom block | error | D-10 |
| `no-restricted-syntax` · `<path>` element | custom block | error | D-10 |
| `no-restricted-syntax` · `<img>` element | custom block | error | D-07 (escalates the inherited `@next/next/no-img-element` warning to an error) |
| `no-restricted-imports` · `styled-components` | custom block | error | D-04, D-11 |
| `no-restricted-imports` · `react-slick` | custom block | error | D-05 |
| `no-restricted-imports` · `react-feather` | custom block | error | D-10 |
| `no-restricted-imports` · pattern `../../*` | custom block | error | — import discipline |
| `@typescript-eslint/consistent-type-imports` | custom block | error | — convention |
| `@typescript-eslint/no-unused-vars` | custom block | error | — convention (it would not have caught D-08 or D-09: both dead values were passed as props or listed in a dependency array) |
| `eqeqeq` | custom block | error | — convention |
| `no-console` (allows `warn`, `error`) | custom block | warn | — convention; `/api/ask` logs a generation failure through `console.error` deliberately |
| `react/jsx-key` | `next/core-web-vitals` → `react/recommended` | error | D-10 |
| `jsx-a11y/alt-text` (`img: ['Image']`) | `eslint-config-next` | warn | D-07 |
| `react-hooks/exhaustive-deps` | `eslint-config-next` | warn | D-08, D-09 — both effects shipped an empty dependency array over live values |

Guards outside ESLint, for completeness: Zod schemas in `content/schema.ts` (D-02, D-12), `.gitignore` plus
`.env.example` (D-03), the token layer in `app/globals.css` (D-04, D-06, D-10), and the `verify` chain in
`.github/workflows/ci.yml` (D-02, D-11). `tsconfig.json` strict mode with `noUncheckedIndexedAccess` guards a
class of bug the legacy code never reached, so it carries no defect id.
