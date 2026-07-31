# Story — Hero section

**Module:** `landing`  
**Plan item:** 1 — Hero section  
**SRS requirement:** LANDING-001  
**Story file:** `docs/landing/stories/hero-section.md`

---

## User story

As a Visitor, I want to see the owner's name, tagline, and call-to-action buttons
immediately on load, so that I understand the page's purpose in seconds and can
act on its primary call-to-action.

---

## In scope

- Full-width hero renders as the first visible section above the fold on both
  desktop (≥ 860px) and mobile (< 860px) viewports.
- Desktop layout: two columns — copy on the left, decorative avatar visual on
  the right.
- Mobile layout: single centred column — name, eyebrow, tagline, paragraph,
  buttons, avatar visual stacked vertically.
- Primary CTA button ("Get in touch") scrolls smoothly to `#contact`.
- Secondary CTA button ("See my work") scrolls smoothly to `#projects`.
- `prefers-reduced-motion: reduce` — scroll is instant (`auto`), decorative
  animations are disabled.
- `Hero.tsx` is a Server Component (no `"use client"` directive needed; no
  interactive state).

---

## Out of scope

- About, Skills, Projects, Contact sections — those are separate stories.
- Scroll-reveal entrance animations on the hero — the hero is above the fold on
  load and should be immediately visible; the `RevealObserver` applies to
  sections below the fold.
- Animated decorative elements (`float`, spinning rings) — those are visual
  polish inside the approved design; the hero's functional behavior is
  independent of whether those animations run.
- Any dynamic content or data fetching — the hero is fully static markup.
- Skip link — that belongs to the Header/Page shell, not to this story.

---

## UI scope

**Screens / sections touched:** `#hero` only.

**States that must exist:**

| State | Description |
|---|---|
| Desktop (≥ 860px) | Two-column layout; copy left, avatar visual right |
| Mobile (< 860px) | Single centred column; no horizontal scroll |
| Reduced motion | Instant scroll; animations disabled |
| 320px viewport | No horizontal overflow; all elements fully visible and tappable |

No error or loading states — the hero is static and renders immediately.

---

## Acceptance criteria

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded on a desktop viewport (≥ 860px) | I look at the initial viewport | The hero is visible above the fold with the name, eyebrow, tagline, supporting paragraph, and both buttons visible without scrolling |
| AC-2 | The page is loaded on a mobile viewport (< 860px) | I look at the initial viewport | The hero is in a single centred column; the name, eyebrow, tagline, paragraph, and both buttons are visible without scrolling |
| AC-3 | The hero is visible | I activate the "Get in touch" button | The page scrolls smoothly to the `#contact` section |
| AC-4 | The hero is visible | I activate the "See my work" button | The page scrolls smoothly to the `#projects` section |
| AC-5 | `prefers-reduced-motion: reduce` is set | I activate either CTA button | The page scrolls to the target section instantly (`auto`), not smoothly |
| AC-6 | The viewport is 320px wide | I look at the hero | No horizontal page scroll; all text and buttons remain fully visible and tappable (44×44px minimum hit area) |

---

## Dependencies

| Dependency | Why it matters | Status |
|---|---|---|
| Approved design (`design/index.html`) | Source of truth for the hero layout and visual | Approved |
| Design system (`design/design-system.md`) | Tokens for colour, spacing, typography, radius, shadow, motion | Approved |
| Frontend scaffold (Next.js 15, Tailwind v3, `globals.css`) | Component must be placed in `code/frontend/components/Hero.tsx` following the layout conventions | Scaffold exists |
| `Header` component renders the nav anchors | The hero CTA targets `#contact` and `#projects` anchors defined in the Header nav | Header is a separate story |

The last dependency is listed for awareness only; it does not block this story.
The anchor targets exist on the same page and will be wired when the Contact and
Projects stories are implemented.

---

## Implementation notes (for Dev)

- Place component at `code/frontend/components/Hero.tsx`.
- No `"use client"` directive — this is a static Server Component.
- Import tokens from `globals.css` (CSS custom properties).
- Scroll to anchor: use a named handler — either an inline `<a href="#contact">`
  with `scroll-behavior: smooth` set on `<html>`, or a minimal client-side
  `scrollIntoView({ behavior: 'smooth' })` handler. The design system handles
  `prefers-reduced-motion` via CSS, so the `scroll-behavior: smooth` CSS approach
  is sufficient and keeps the component server-rendered.
- Eyebrow text uses the `.eyebrow` class; headings use the design token
  `--text-3xl` (hero h1); buttons use `.btn-primary` and `.btn-ghost`.
- Avatar visual (decorative rings, chips, initials) is inside the hero component;
  the `float` animation on `.avatar` must be disabled via
  `@media (prefers-reduced-motion: reduce)`.
