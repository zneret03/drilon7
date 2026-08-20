# Gap analysis — senior-role signals

Purpose: name the nine signals a senior frontend hire is assessed on, where each one stands, and which part of
the corpus would hold the answer.
Audit date: **2026-08-19**, read against the resume, the LinkedIn export and the legacy site.

**State** is the state of the *material*, not of the layout: *missing* (nothing exists to index), *partial*
(some exists, thin or unquantified), *hidden* (it exists in the resume and the corpus but is not framed as a
claim). v2 changed what is visible; only the owner can change what is true. Ids are stable and cited from code
— `content/metrics.ts` points at G-01.

| Id | Signal | State | Where the answer lives |
| --- | --- | --- | --- |
| G-01 | Quantified impact | missing | `MET` · `content/metrics.ts` |
| G-02 | Depth on one project | partial | `content/case-studies.ts` |
| G-03 | Testing and delivery practice | partial (was hidden) | `STY` · a new module in `content` |
| G-04 | Architecture ownership | partial (was hidden) | `MET` + `STY` |
| G-05 | Mentoring and influence | partial | `MET` · `content/roles.ts` |
| G-06 | Current role is a blank | missing | `content/roles.ts` (`EXP-EM-*`) |
| G-07 | Public writing | partial (was missing) | `WRT` · `content/writing.ts` |
| G-08 | Social proof | missing | no namespace yet · `content/schema.ts` |
| G-09 | Live, reachable work | partial | `content/projects.ts` (`demo`) |

## G-01 · Quantified impact — missing
- Evidence: eight roles in `content/roles.ts`, one verified figure in the whole corpus — `MET-01`, the
  50,000+ files a month digitised by the Senti.AI BIR 2307 platform, itself derived from `EXP-SA-02`. The other
  twenty-eight `EXP` bullets describe activity, not outcome.
- In v2: the shortage is declared instead of disguised. `content/metrics.ts` states in its doc comment that
  nothing is estimated to pad the list, `content/index.ts` throws if the one figure disappears, and the home
  stat strip (`app/(home)/_components/stat-strip.tsx`) derives its figures from content that already
  exists rather than asserting new ones.
- Close it by: for each role, one thing that got faster, cheaper or more reliable, and by how much. Approximate
  honestly — a rough figure with a stated basis is a usable chunk; an invented precise one is not.
- Home: the `MET` namespace, one chunk per role in `content/metrics.ts`. Action item P0-01.

## G-02 · Depth on one project — partial
- Evidence: eighteen projects (ten full entries, eight archived blurbs) at roughly a paragraph each reads as breadth. The archive
  used to dilute the four that matter.
- In v2: one case study ships at depth — `nail-disease-detection`, four sections plus a six-step pipeline in
  `content/case-studies.ts`, rendered by `app/work/[slug]/page.tsx`. The archive moved into `/sources`
  so it no longer competes with the featured four.
- Close it by: a second case study on paid work rather than the thesis — the Senti.AI engineering templates or
  the BIR 2307 platform — with the constraints, the alternatives rejected and what he would change.
- Home: `content/case-studies.ts`, plus a matching project slug in `content/projects.ts`.

## G-03 · Testing and delivery practice — partial (audit: hidden)
- Evidence: `EXP-MG-03` (unit and integration tests, and the GitHub workflows that gate staging and production
  deploys on a passing suite), `EXP-FH-05` (unit testing, linters, CI/CD to staging and production), and the
  `Jest / testing` and `CI-CD pipelines` entries in `content/skills.ts`. Two roles, none of it on the old
  site.
- In v2: retrievable and visible — both bullets render on `/experience` with citable ids.
- Close it by: state it as a standard he holds, not a duty he performed. What gates a deploy, what gets tested
  first, what he does when the suite is slow. One paragraph is enough, and it is the clearest senior marker in
  the resume.
- Home: the `STY` namespace — declared in `content/schema.ts`, still empty.

## G-04 · Architecture ownership — partial (audit: hidden)
- Evidence: `EXP-SA-01` (rebuilt the company-wide Fastify / Lit / Terraform templates), `EXP-FH-01` (PostgreSQL
  ERDs), `EXP-AT-03` (MySQL schema converted to NoSQL), `EXP-MG-02` (Elixir Phoenix GraphQL schemas and their
  test suites). All four are design authority; none appeared on the legacy site.
- In v2: all four render as bullets and are individually citable.
- Close it by: give the Senti.AI template work a scale figure — how many engineers, how many repositories
  started from it — and a written position on templates as leverage. It is the strongest ownership claim in the
  corpus and currently reads as one line among twenty-nine.
- Home: `MET` for the figure, `STY` for the written practice behind it.

## G-05 · Mentoring and influence — partial
- Evidence: `EXP-FH-06` (mentored peers, cleared blockers for the wider team), `EXP-MG-05` (unblocked developers
  through troubleshooting and pairing), `EXP-MG-04` (worked with QA on requirements and edge cases). Three
  roles; on the old site all of it sat in bullet six of a carousel slide a reader never reached.
- In v2: promoted by construction — the timeline renders every bullet, so nothing is behind an interaction.
- Close it by: scope it. How many people, over how long, and what changed for them. Panels ask this directly at
  senior level and "mentored peers" does not survive the follow-up question.
- Home: `MET` for the scope figure, `content/roles.ts` for the bullet text.

## G-06 · Current role is a blank — missing
- Evidence: `EXP-EM-01` carries title, employer, location and start date; `EXP-EM-02` exists only to say that
  engagement detail is not indexed. `context` is `''`. It is the most important entry on the page and the only
  one with nothing under it.
- In v2: the blank is explicit rather than papered over, and the refusal is enforced at retrieval — the system
  prompt in `lib/retrieval/prompt.ts` forbids inference, so `/ask` declines to characterise the role.
- Close it by: four or five bullets in the shape of the Mashup Garage entry, added as `EXP-EM-03` onward, and
  then delete the placeholder `EXP-EM-02`.
- Home: `content/roles.ts`. Action item P0-02.

## G-07 · Public writing — partial (audit: missing)
- Evidence: two dev.to posts — `WRT-01` on orchestration-worker graphs, `WRT-02` on SSH and WSL2. Neither was
  linked from the legacy portfolio.
- In v2: both are in `content/writing.ts`, linked from `app/(home)/_components/writing-list.tsx`,
  and citable from `/ask`.
- Close it by: keep publishing, and prefer a post that ties to a claim already in the corpus — writing that
  explains a shipped decision is worth more here than a tutorial.
- Home: the `WRT` namespace, `content/writing.ts`.

## G-08 · Social proof — missing
- Evidence: no testimonial, reference or client quote exists in the repo, the resume or the LinkedIn export.
  There is also nowhere to put one: `NAMESPACES` in `content/index.ts` declares ten namespaces and none of
  them holds attributed quotes.
- In v2: unchanged, and deliberately not simulated. An unsourced quote would break the citation contract the
  whole site rests on.
- Close it by: two short quotes with a name and a title from Find Hope or Mashup Garage colleagues. Then extend
  `namespaceSchema` in `content/schema.ts` with a references namespace, add the content module, and
  `buildCorpus()` picks it up in one block.
- Home: a new namespace in `content/schema.ts` plus a new module in `content`. Action item P1-06.

## G-09 · Live, reachable work — missing (regressed)
- Evidence: this got **worse**, not better, when the 2026 work was added. All six featured projects now ship
  `demo: ''`, and the five velquortech entries (`PRJ-ILOKAL-01`, `PRJ-PICKLE-01`, `PRJ-TANIM-01`,
  `PRJ-RIDE-01`, `PRJ-NFA-01`) ship `source: ''` too, because those repositories are private. The strongest,
  most current work is therefore the least verifiable work on the site: a reader can see a screenshot and
  read a claim, and check neither.
- iLokal does have a deployment, and it is not reachable: the preview URL answers `302` to
  `vercel.com/sso-api`, so a visitor without org access lands on a Vercel login page. That is a dead link
  wearing a live one's clothes, which is why `demo` is `''` rather than the preview URL.
- In v2: absence is rendered honestly. A missing demo produces a stated note, never a dead link, and `''` is a
  legal value in `projectSchema` precisely so the absence is typed rather than faked.
- Close it by, in order of value: make iLokal publicly reachable (disable deployment protection or attach the
  production domain); open at least one velquortech repository, or publish a redacted extract; deploy
  Nail Disease Detection.
- Home: `content/projects.ts`. Action items P0-07, P0-08, P2-01.

## Owner hand-over

Three namespaces are thin or empty because no source material exists, and nothing was invented to fill them:

| Namespace | Label in `NAMESPACES` | Chunks | Why it is empty |
| --- | --- | --- | --- |
| `MET` | Verified impact metrics | 1 | One verified figure — `MET-01`, Senti.AI, 50,000+ files a month — against eight roles (G-01) |
| `STY` | How he builds — not yet written | 0 | Declared, unwritten. Needs a short written position on delivery and design practice (G-03, G-04) |
| `OPN` | Positions held — not yet written | 0 | Declared, unwritten. Needs the stances he would defend in a review |

These are visible on `/sources` as `EmptyState` panels rather than hidden, because a declared-and-empty
namespace is an honest gap and a quietly missing one is a lie by omission.

The single highest-value hand-over is therefore not code: real impact numbers, a description of the Emapta
Global role, two or three attributable testimonials, and a short written position on how he builds. **Nothing
here may be invented to fill a gap.** Every claim on this site is a chunk the console will cite by id, so a
fabricated figure does not just weaken the page — it breaks the one guarantee the page makes. Until the
material arrives, the correct behaviour is the current one: the corpus stays silent and `/ask` refuses.
