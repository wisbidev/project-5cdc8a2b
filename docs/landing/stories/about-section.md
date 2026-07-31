# Story: About section

## User story

As a visitor to the landing page, I want to read a short personal introduction with a few quick facts about the owner, so that I can quickly understand who they are and what they do before deciding whether to reach out.

> Requirements source: the module SRS (`docs/landing/SRS.md`) has not been written yet. This story is grounded in the approved design (`design/index.html`, About section, lines 233–285), the design system (`design/design-system.md`), and the architecture overview (`docs/architecture/overview.md`). If the SRS is written before implementation, it must not contradict these sources.

## In scope

- The About section (`<section id="about">`) as specified in the approved design, placed after the Hero section and before Skills.
- Section header: eyebrow tag "About me", heading "A little bit about who I am", and sub-copy "The short version — and the slightly longer one."
- Decorative illustration: inline SVG (gradient avatar on a soft primary background), `aria-hidden="true"`, no interactive role.
- Introduction copy:
  - Lead paragraph (`.about-lead`) — who the owner is and where they are based.
  - Two body paragraphs (`.about-body`) — what they do / care about, and a personal note.
- Quick facts: a 4-item list with icon, label, and value:
  - **Location** — Ho Chi Minh City, Vietnam
  - **Focus** — Web development & product design
  - **Currently** — Open to new opportunities
  - **Languages** — Vietnamese, English
- Responsive layout per the design system breakpoints:
  - `lg` (≥ 960px): 2-column grid — illustration left, copy right (`.9fr 1.1fr`).
  - Below 960px: single column, illustration stacked above copy, gap 40px.
  - `sm`/mobile (≤ 640px): facts grid collapses from 2 columns to 1.
- Fact cards styled as `.fact` (surface background, border, `--radius-card`, hover lift with shadow, icon in primary-soft rounded square).
- Reveal-on-scroll entrance via the project's `.reveal` pattern, respecting `prefers-reduced-motion`.
- Server component per architecture inventory (no `"use client"`): the section is pure static JSX with no hooks, handlers, or browser APIs.
- Reusable classes from `app/globals.css` (tokens as `var(--color-*)`); no changes to `globals.css`.

## Out of scope

- Writing real personal copy — placeholder content ships as-is; the stakeholder replaces the text later. The section must read naturally with the current placeholder.
- Any interactive behaviour: no buttons, no links out of the section, no state, no event handlers.
- The other sections (Hero, Skills, Projects, Contact) and shared components (Header, Footer, RevealObserver, SkipLink) — those belong to their own stories.
- Changes to the design system, design tokens, or the approved mockup.
- Anything beyond the approved design: no new facts, no photo grid, no timeline, no social links in this section.

## UI scope

One static section on the single-page landing, directly below the Hero. Two layout states only:

1. **Desktop (`≥ 960px`)** — 2-column grid: decorative illustration left, copy + facts right.
2. **Mobile / tablet (`< 960px`)** — single column: illustration, then copy, then facts; facts become 1 column below 640px.

The section has no modal, no menu, no form, and no focusable elements. It uses the `.reveal` animation on the header and both grid columns, which must be disabled under `prefers-reduced-motion`.

## Acceptance criteria

1. The About section renders immediately after the Hero section with `id="about"` and contains the eyebrow "About me", the heading "A little bit about who I am", and the sub-copy "The short version — and the slightly longer one."
2. The lead paragraph and exactly two body paragraphs are present with the placeholder copy from the approved design; no paragraph is empty or truncated.
3. Exactly four fact items render, each with an icon, a bold label, and a value: Location → "Ho Chi Minh City, Vietnam", Focus → "Web development & product design", Currently → "Open to new opportunities", Languages → "Vietnamese, English".
4. At viewport width ≥ 960px the section shows a two-column grid: illustration on the left, copy on the right.
5. At viewport width < 960px the section collapses to one column with the illustration above the copy.
6. At viewport width ≤ 640px the facts stack in a single column.
7. At all viewports, no text overflows its container, nothing is clipped, and body text remains readable (no horizontal scroll introduced).
8. The decorative illustration is present, `aria-hidden="true"`, and renders at all breakpoints without layout shift.
9. On load with reduced motion enabled, the section is fully visible (no elements stuck at `opacity: 0`).
10. The component has no `"use client"` directive, no hooks, and no event handlers — it is a Server Component.

## Dependencies

- Approved design `design/index.html` (About section) — exists.
- Design system `design/design-system.md` — exists.
- Architecture overview `docs/architecture/overview.md` — exists.
- Existing scaffold component `code/frontend/components/About.tsx` — currently carries a stray `"use client"` directive; the implementing Dev must remove it (see criterion 10).
- `docs/landing/SRS.md` — not yet written; if it lands before implementation it must be consistent with the sources above.
- No backend, database, or external service — shape is `static`.

## Notes for Dev

- The scaffold already contains a full About implementation; treat it as a starting point and reconcile it against the criteria above rather than rewriting from scratch.
- Match the approved design's visual details: section background `--color-surface` with top/bottom `--color-border` separators, fact cards with `--radius-card`, shadow and hover lift.
- Do not edit `globals.css`; consume existing token classes and variables.
