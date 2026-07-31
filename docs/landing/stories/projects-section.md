# Story — Projects section

Module: `landing`
Plan item: Projects section (item 4)
Implements: LANDING-004
SRS: `docs/landing/SRS.md`
Design system: `design/design-system.md`
Architecture: `docs/architecture/overview.md`

## User story

*As a* Visitor, *I want to* see a selection of the owner's projects and open
each one for details, *so that* I can quickly evaluate the quality and range of
their work from the landing page.

## In scope

- Section header: eyebrow label, heading, and a short intro paragraph that
  includes a "GitHub" placeholder link.
- Three project cards, each with a thumbnail, title, and one-line description,
  laid out per the design system's `project-card` variant.
- Activating a card opens a case-study modal (`Modal` component) showing the
  project's tag, heading, meta, body paragraphs, and a CTA button.
- Modal dismissal by close button, backdrop click, or Escape; focus returns to
  the card that opened it.
- Focus is trapped inside the modal while it is open.
- The "GitHub" link is a placeholder: activating it shows a toast (~3200ms
  auto-hide) and does not navigate.
- Reveal-on-scroll entrance for the section; `prefers-reduced-motion: reduce`
  renders content instantly.
- Responsive grid per design-system breakpoints: 3 columns ≥ 1120px, 2 columns
  ≥ 960px, 1 column below 640px.
- Client components per `docs/architecture/overview.md` §6: `Projects.tsx`,
  `Modal.tsx`, and `Toast.tsx`, each with `"use client"` as the literal first
  line; `app/page.tsx` stays a Server Component.

## Out of scope

- Real project content and URLs — placeholder projects ship; the owner replaces
  them before launch (SRS §7 assumption).
- Real GitHub or external navigation — links show the placeholder toast only,
  exactly as the approved design specifies.
- Backend, database, or data fetching — the project shape is `static`; all
  content is static markup.
- A portfolio archive or blog — only the three selected projects are shown
  (SRS §3).
- Other sections (hero, about, skills, contact) — separate stories; this story
  only touches the `#projects` section and its shared Modal/Toast components.

## UI scope

Single-page landing, `#projects` section of the approved design
(`design/index.html`). This story has UI.

States this story must support:

| State | Behaviour |
|---|---|
| Default grid | Three cards with thumbnail, title, description; resting `--shadow-sm` |
| Card hover | Card lifts (`translateY(-6px)`), `--shadow-md`, border tints toward primary |
| Modal closed | `[hidden]`, not rendered interactively |
| Modal open | Backdrop `rgba(17,24,39,.55)` + blur; modal fades/slides in (~350ms); focus moves to the close button |
| Toast shown | "GitHub" activation; dark pill, fixed bottom, auto-hides after ~3200ms |
| Reduced motion | Reveal renders instantly; modal/toast animations collapse to ~0ms; scroll behaviour `auto` |

Accessibility requirements (design system §2.6, §2.7): modal has
`role="dialog"`, `aria-modal="true"`, and `aria-labelledby` referencing its
heading; focus is trapped while open and restored to the trigger on close;
Escape closes; the toast announces nothing (decorative) and never blocks focus.

## Acceptance criteria

Test derives cases directly from these; each criterion is observable.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled to the Projects section | I look at the grid | Three project cards are shown, each with a thumbnail, title, and one-line description |
| AC-2 | The viewport is ≥ 1120px | I look at the grid | The three cards are arranged in a single row of three columns |
| AC-3 | The viewport is < 640px | I look at the grid | The cards are stacked in a single column with no horizontal page scroll |
| AC-4 | A project card is visible | I activate it | A modal opens showing the project's tag, heading, meta, body paragraphs, and a CTA button |
| AC-5 | The modal is open | I press Escape | The modal closes and focus returns to the card that opened it |
| AC-6 | The modal is open | I click the backdrop or the close button | The modal closes |
| AC-7 | The modal is open | I press Tab repeatedly | Focus stays within the modal until it is closed |
| AC-8 | The Projects section is visible | I activate the "GitHub" link | A toast appears and no navigation happens; the toast disappears on its own after ~3200ms |
| AC-9 | `prefers-reduced-motion: reduce` is set | I scroll to the Projects section | The cards are visible immediately with no reveal animation |

## Dependencies

- Approved design `design/index.html` and design system
  `design/design-system.md` — source of truth for appearance and behaviour.
- Frontend scaffold (Next.js 15 + TypeScript + Tailwind v3) with tokens in
  `app/globals.css` — story authors use existing token classes, never edit
  `globals.css`.
- `docs/architecture/overview.md` §6 — `Projects.tsx`, `Modal.tsx`,
  `Toast.tsx` component inventory and the `"use client"` rule.
- Test cases land in `docs/landing/test-cases/projects-section.md` (Test).
- No story-order dependency: the Projects section is self-contained; the
  hero's "See my work" button targets `#projects` but works whether or not this
  story has landed.
