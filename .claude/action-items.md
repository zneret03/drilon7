# Action items — prioritised backlog

Purpose: one ordered list of what was worth doing to this portfolio, what v2 already did, and what only the
owner can finish.
Audit date: **2026-08-19**. Ids are stable — `CLAUDE.md`, the slash commands and code comments cite them.

**State** is one of *done in v2* (with the file that closes it), *open* (nobody is blocked, it is unbuilt), or
*owner-blocked* (the work is writing facts that do not exist yet, and nothing may be invented to fill the gap).

## Do next

1. **P0-01 — impact numbers for every role.** One verified figure across eight roles is the single largest
   weakness on the site; the console has to answer "what did he change?" from `MET`, which holds one chunk.
2. **P0-02 — a description for the Emapta Global role.** The current job and first senior title, and the corpus
   carries nothing but employer, location and start date.
3. **P0-06 — settle the Nail Disease stack contradiction.** The corpus currently says two incompatible things
   about the same project, and both are citable. Ten minutes of the owner's memory closes it; nobody else can.
4. **P2-01 — deploy the projects with no live URL.** `PRJ-NAIL-01` and `PRJ-RPTM-01` are featured and ship
   `demo: ''`; Fullstack Shopify is now the archive entry `PRJ-SHOP-01` and has no demo field at all. A live URL
   is the cheapest proof left unclaimed.

All four are **content, not code**. Every P0 in this file that could be closed by engineering is closed: what
remains at P0 is the impact numbers (P0-01), the Emapta description (P0-02) and the stack contradiction
(P0-06) — the first two require the owner to supply real figures and a real account of the role, and the third
requires him to say which of two existing claims is the true one. The retrieval console is already correct about
the absences — it refuses to characterise the Emapta engagement rather than inferring one — so shipping wrong
numbers would be worse than shipping none.

## P0

| Id | Action | Effort | Impact | State | Closes in |
| --- | --- | --- | --- | --- | --- |
| P0-01 | Write impact numbers for every role — users, latency, coverage, deploy frequency, team size | 2 hrs | Very high | owner-blocked | `content/metrics.ts` (`MET` namespace), then role bullets in `content/roles.ts` |
| P0-02 | Describe the Emapta Global role | 30 min | Very high | owner-blocked | `content/roles.ts`, replacing the placeholder chunk `EXP-EM-02` |
| P0-03 | Replace the carousel with a static timeline | 2 hrs | Very high | done in v2 | `app/experience/_components/role-timeline.tsx`; `react-slick` restricted in `eslint.config.ts` (D-05) |
| P0-04 | Cut the emoji, the star rating and "Hey Folks" | 20 min | High | done in v2 | `app/(home)/_components/hero.tsx` — rebuilt from `profile.headline`; the keyless off-palette star block is gone (D-10) |
| P0-05 | Ship one case study at depth | 4 hrs | Very high | done in v2 | `content/case-studies.ts`, `app/work/[slug]/page.tsx`; sections flattened into the `CSE` namespace by `buildCorpus()` so the write-up is citable, not asserted |
| P0-06 | Resolve `TensorFlow` vs. "no neural network" on Nail Disease Detection | 10 min | High | owner-blocked | `content/projects.ts` (`PRJ-NAIL-01.tech`) **or** `content/case-studies.ts` (the `Approach` section, chunk `CSE-NAIL-02`) — whichever is the wrong one |
| P0-07 | Make iLokal publicly reachable | 30 min | Very high | owner-blocked | The preview URL answers `302` to `vercel.com/sso-api` — Vercel deployment protection. Disable it for that project or attach the production domain, then set `demo` on `PRJ-ILOKAL-01` in `content/projects.ts`. Until then the strongest current work has no verifiable artifact. |
| P0-08 | Give the velquortech work something a reader can check | 2 hrs | Very high | owner-blocked | `PRJ-ILOKAL-01`, `PRJ-PICKLE-01`, `PRJ-TANIM-01`, `PRJ-RIDE-01` and `PRJ-NFA-01` ship both `source: ''` and `demo: ''` because the repos are private. Open one, publish a redacted extract, or record a short walkthrough — six featured projects with no reachable artifact is the site's biggest remaining credibility gap (G-09). |
| P0-09 | Ship a second case study, for iLokal | 4 hrs | High | open | `content/case-studies.ts` + a `chunkPrefix` of `CSE-ILOK`. iLokal is the only project with enough material for depth (the counter-code model, PostGIS proximity, the CSS-view-timeline landing rebuild) and it currently gets five highlight chunks where Nail Disease gets a full write-up. |

## P1

| Id | Action | Effort | Impact | State | Closes in |
| --- | --- | --- | --- | --- | --- |
| P1-01 | Sanitise or drop `dangerouslySetInnerHTML` | 1 hr | High | done in v2 | Dropped, not sanitised: content is text from `content/*`; the attribute is an ESLint error (D-01) |
| P1-02 | Move content into the repo as typed MDX or JSON | 3 hrs | High | done in v2 | Typed TS instead of MDX — `content/*` validated by `content/schema.ts`, flattened into the corpus by `content/index.ts` (D-02) |
| P1-03 | Link the two dev.to articles from the site | 15 min | High | done in v2 | `content/writing.ts` (`WRT-01`, `WRT-02`), surfaced by `app/(home)/_components/writing-list.tsx` |
| P1-04 | Restore colour to project imagery | 30 min | Medium | done in v2 | No filter token in `app/globals.css`, no hover restore anywhere (D-06) |
| P1-05 | Fix the alt text and the invalid CSS declarations | 30 min | Medium | done in v2 | `<img>` and styled-components both banned in `eslint.config.ts`; alt text written per image (D-04, D-07) |
| P1-06 | Collect two short testimonials with name and title | 1 hr | High | owner-blocked | No home yet: needs a namespace added to `namespaceSchema` in `content/schema.ts` plus a content module. Closes G-08 |

## P2

| Id | Action | Effort | Impact | State | Closes in |
| --- | --- | --- | --- | --- | --- |
| P2-01 | Add live demos for the projects with no URL | 3 hrs | Medium | owner-blocked | `content/projects.ts` — `demo: ''` on `PRJ-NAIL-01` and `PRJ-RPTM-01`; Fullstack Shopify (`PRJ-SHOP-01`) is an archive entry with no demo field |
| P2-02 | Dedupe the project archive | 30 min | Low | done in v2 | `archiveProjects` in `content/projects.ts`, 15 entries down to 8 unique; duplicate ids throw at import in `content/index.ts` |
| P2-03 | Get off Next 12 and onto the App Router | 1 day | Medium | done in v2 | Next 16.3.1 App Router, React 19, no `--openssl-legacy-provider` (`package.json`, D-11) |
| P2-04 | Add an OG image, a description and a canonical URL | 1 hr | Medium | done in v2 | `lib/seo.ts` (`pageMetadata`), `app/opengraph-image.tsx`, per-route `metadata` exports |
| P2-05 | Embed the corpus and retrieve with pgvector | 1 day | Medium | open | `lib/retrieval/score.ts` is the keyword pass it would sit behind; the fallback contract already exists, so this is additive |

Items P1-06, P2-05 and P0-06 are not in the 2026-08-19 action list. P1-06 and P2-05 come from the same audit's
gap analysis and implementation notes; P0-06 was found during the documentation-remediation pass below. All
three are recorded here so the backlog is the whole of what is left rather than the part that happened to be
tabulated.

## Closed in the remediation pass

Not backlog — a record of what changed after the 2026-08-19 audit, so none of it gets re-filed:

| Change | Where |
| --- | --- |
| The case-study write-up became citable — a new `CSE` namespace, one chunk per section plus one for the pipeline. Before this, `/work` asserted prose that no chunk backed. | `content/namespaces.ts`, the `CSE` block in `buildCorpus()` (`content/index.ts`) |
| `/api/ask` degrades on a **clipped** generation, not only on a throw: a `stop_reason` of `max_tokens` or `refusal` falls back to `extractiveAnswer` and reports `engine: 'extractive'`. A cut sentence, or a citation truncated before its `]`, is not an answer. | `app/api/ask/route.ts` |
| Citations are validated against the ids retrieval actually returned — `parseAnswer(text, allowedIds)` — so an id the model invented renders as plain text instead of a link to a chunk that does not exist. | `app/ask/_lib/parse-answer.ts` |
| `.env` is untracked: absent from the tree, absent from `git ls-files`, and covered by `.gitignore` alongside `.env.local` / `.env*.local`. `.env.example` is the only tracked template (D-03). | `.gitignore`, `.env.example` |
| A favicon and the web manifest ship: `app/favicon.ico` uses the app-dir file convention so Next emits the `<link>`, and the root metadata declares `manifest: '/manifest.json'` against the `public/manifest.json` that outlived `next-pwa`. | `app/favicon.ico`, `app/layout.tsx` |
| The shared kit gained `Panel` (the console panel shell) and `Chip` (the square outline pill), both exported from the `components/ui` barrel, replacing hand-rolled copies of each. | `components/ui/panel.tsx`, `components/ui/chip.tsx` |

## W · Work section (velquortech parity, 2026-08-20)

Adopting the `/work` archive plus per-project overview pattern. Mapping and the deliberate
omissions: [`.claude/work-section-parity.md`](work-section-parity.md).

| Id | Action | Effort | Impact | State | Closes in |
| --- | --- | --- | --- | --- | --- |
| W-01 | Limit the home grid to the top 4 featured projects and add a "View all work" button | 1 hr | High | done | `app/(home)/_components/selected-work.tsx`. Six cards with their full highlight lists inline pushed the page's own argument below the fold. |
| W-02 | Add a `/work` index listing every project — featured, the rest, then the blurb-only archive | 3 hrs | High | done | `app/work/page.tsx`. Nav item "Case study", which deep-linked one hard-coded slug, becomes "Work" (`lib/nav.ts`), and `/work` joins the sitemap. |
| W-03 | Give every project a detail page with a Project Overview block, not just the one with a case study | 3 hrs | Very high | done | `app/work/[slug]/page.tsx` — `generateStaticParams` widened from `caseStudies` to `projects`. Client, industry, timeline and services come from `project.overview`; a case study is extra depth layered on top, no longer the entry condition. |
| W-04 | Carry the challenge, solution, headline and gallery for the six 2026 projects into the corpus | 2 hrs | High | done | `content/schema.ts` (`headline`, `overview`), `content/projects.ts`, and the `-CH` / `-SOL` chunks in `buildCorpus()`. 14 gallery screenshots under `public/image/work/`. A page that states facts must state citable ones. |
| W-05 | Decide whether the gallery needs a lightbox | 2 hrs | Low | open | Velquor has a zoom trigger on the hero; this does not. A modal needs focus trapping, escape handling and scroll locking, which is real work for a nice-to-have — only do it if the screenshots turn out to be unreadable inline on a phone. |
| W-06 | Write an `overview` for the four pre-2023 projects, or accept the fallback | 2 hrs | Medium | owner-blocked | `PRJ-NAIL-01`, `PRJ-EREBUS-01`, `PRJ-RPTM-01`, `PRJ-GITP-01` have no client, industry, services, challenge or solution on record, so their detail pages render the reduced definition list. Nail Disease Detection is the one worth writing, and it partly exists already as `CSE-NAIL-*`. Nothing may be back-filled from memory. |

## Owner notes for the open items

- **P0-01** — approximate honestly rather than omit. "Roughly 40% fewer failed deploys after the pipeline
  landed" is a usable chunk; a precise-looking invention is not. One figure per role is enough to close it.
- **P0-02** — four or five bullets in the shape of the Mashup Garage entry. Until they exist, `EXP-EM-02` states
  plainly that nothing is indexed, and `/ask` will keep saying so.
- **P0-06** — the two claims cannot both be true. `content/projects.ts` lists `TensorFlow` in the
  `PRJ-NAIL-01` tech stack, while the case study rendered beside it argues the opposite in `CSE-NAIL-02`:
  "Rather than pushing raw photographs at a network… colour and texture features go to an SVM", with the
  pipeline naming Canny, OpenCV and a supervised SVM and no network anywhere. Resolve it against the source at
  `github.com/zneret03/nail_detection` — if TensorFlow is not in that repo's dependencies, drop it from `tech`;
  if it is, say where it sat in the pipeline and rewrite the `Approach` section to match. This is **not** a code
  fix: an agent choosing either branch would be inventing a fact about the owner's own project, and both strings
  are citable chunks, so the corpus is currently contradicting itself in public.
- **P1-06** — two quotes, each with a name and a title, from Find Hope or Mashup Garage. Adding a namespace is
  a two-line change once the quotes exist; without them the namespace would be another declared empty.
- **P2-01** — a dead link is worse than no link, and no link is worse than a live one. The featured two render
  their missing demo honestly today, so deploying them is upside with no cleanup. Closes G-09.
- **W-05 / W-06** — both are deliberate omissions from the work-section change, not oversights. W-06 in
  particular must stay owner-blocked: an `overview` for a 2020 student project would be reconstructed from
  memory, and every field in it becomes a citable chunk.
