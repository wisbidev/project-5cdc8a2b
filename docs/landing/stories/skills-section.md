# Story — Skills Section

Plan item: Skills section (LANDING-003)
Module: `landing`
Status: Draft

## User story

As a **Visitor**, I want to see the owner's skills in a scannable grid of
cards, so that I can quickly assess their capabilities at a glance.

## In scope

- The `#skills` section: section label (eyebrow tag), heading, and a short
  one-line description.
- Exactly six skill cards, each with an SVG icon, a heading (≤ 24 chars), and a
  one-line description.
- Responsive grid reflow per design system §1.5 and SRS LANDING-003:
  - 3 columns at ≥ 1120px (xl),
  - 2 columns at 640–1119px,
  - 1 column below 640px (mobile).
- Scroll-reveal entrance (reveal-in state) using the existing
  `RevealObserver` client component; cards render instantly when
  `prefers-reduced-motion: reduce` is set.
- Skill-card visual treatment per design system §2.3: `--color-surface`
  background, `--color-border` border, `--shadow-sm` at rest, `translateY(-6px)`
  + `--shadow-md` + primary-tinted border on hover.
- Placeholder skill content the owner later replaces with real skills.

## Out of scope

- Any skill detail beyond the card itself — no filters, no progress bars or
  percentages, no per-skill pages or modals, no expandable cards.
- Real skill content — placeholder copy ships; the owner edits the static data
  in `Skills.tsx` before launch.
- Editing `app/globals.css` or the design tokens — this story only uses
  existing token classes; new tokens require a TL-approved design-system change
  (architecture overview §5).
- Any interactive behaviour in the section — `Skills.tsx` is a Server
  Component; no `"use client"`, no state, no handlers. Hover effects are pure
  CSS.
- The Hero, About, Projects, and Contact sections — each is its own story.

## UI scope

- Section id `skills`, anchored from the nav ("Skills" link).
- Section header: eyebrow tag "Skills" (`--color-primary` text on
  `--color-primary-soft` pill, per design system §2.4), h2 heading, short
  description line.
- Six cards in a single responsive grid (`grid-cols-1 sm:grid-cols-2
  xl:grid-cols-3`), each an `<article>` with a `.skill-card` treatment: icon
  at top, `<h3>` heading (`--text-xl`), one-line `<p>` description.
- States: default, hover (lift + stronger shadow), reveal-in on scroll.
  No other states exist for this section.

## Acceptance criteria

Each criterion maps one-to-one onto a test case in
`docs/landing/test-cases/skills-section.md`. Given/When/Then, one observable
behaviour per criterion.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled to the Skills section | I look at the grid | Exactly six skill cards are shown, each with an icon, a heading, and a one-line description |
| AC-2 | The viewport is ≥ 1120px wide | I look at the grid | The six cards are arranged in three columns |
| AC-3 | The viewport is 640–1119px wide | I look at the grid | The six cards are arranged in two columns |
| AC-4 | The viewport is < 640px wide | I look at the grid | The six cards are stacked in a single column |
| AC-5 | The page is scrolled to the Skills section and `prefers-reduced-motion: reduce` is set | I look at the cards | All six cards are fully visible immediately — no fade/slide entrance animation |

## Failure, boundary and permission behaviour

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Viewport exactly 1120px | Three-column layout applies (xl breakpoint is inclusive) |
| Boundary | Viewport exactly 639px | Single-column layout applies (two columns start at 640px) |
| Boundary | Narrowest supported viewport (320px) | No horizontal page scroll; every card's text is fully visible without overflow |
| Reduced motion | `prefers-reduced-motion: reduce` is set | Scroll-reveal renders cards instantly (`opacity: 1`, no transform); hover lift still allowed as it is a color/shadow state with `0.01ms` duration |
| Invalid input | N/A — no user input in this section | — |
| Not permitted | N/A — fully public static content | — |
| Upstream failure | N/A — no data fetches, no dependencies beyond the app bundle | — |

## Data touched

Static content in `components/Skills.tsx` — no database, no API (shape:
`static`).

| Field | Type | Required | Rule |
|---|---|---|---|
| Section label | text | yes | "Skills" eyebrow tag |
| Section heading | text | yes | Static h2 |
| Section description | text | yes | One-line intro |
| Skill cards | array of 6 | yes | Each: `icon` (inline SVG), `title` (≤ 24 chars), `description` (one line) |

## Dependencies

- **Approved design** (`design/index.html`) and design system
  (`design/design-system.md`) — the source of truth for the section's
  appearance and tokens.
- **Frontend scaffold** per `docs/architecture/overview.md` — Next.js 15,
  Tailwind v3, `globals.css` tokens, and the `RevealObserver` client component
  for the reveal-in state.
- **Section anchor** — the sticky header's "Skills" nav link targets
  `#skills`; the section must expose that id.

## Implementation notes (for Dev)

- `components/Skills.tsx` is a **Server Component**: no `"use client"`, no
  state, no handlers. It renders static JSX from a local data array.
- Grid: `grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3` (or the
  equivalent Tailwind classes matching the token scale) inside the `1120px`
  container; spacing per design system §1.2 (`--space-6` gutter).
- Cards: `<article class="skill-card">` with the icon, `<h3>` heading
  (`--text-xl`), and one-line `<p>` description; hover lift per design system
  §2.3 (translateY, shadow, primary-tinted border).
- Wrap the grid (or section content) in the existing `.reveal` pattern via
  `RevealObserver` for the entrance animation.
- Do not edit `app/globals.css`; use the existing token classes and the
  `.skill-card` styles already defined there.
- Placeholder skills to ship (owner replaces later): Web Development,
  UI/UX Design, Communication, Project Management, Problem Solving,
  Continuous Learning — each with an icon and a one-line description.
