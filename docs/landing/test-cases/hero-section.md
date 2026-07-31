# Test Cases — Hero Section

Module: `landing`
Function: Hero section
Source: `docs/landing/SRS.md` — LANDING-001 (acceptance criteria AC-1..AC-4, behaviour 5, failure/boundary table, data-touched fields)
Design: `design/design-system.md` §1.5 (breakpoints), §2.1 (buttons), §2.10 (avatar)
Risk level: **Low-Medium** — the hero is static content with no user input or data writes, so there are no negative/permission/recovery paths. Its risk concentrates in two areas that are explicitly declared in the SRS: responsive layout at the breakpoint boundaries (860px, 320px) and the anchor-scroll CTA behaviour. Those checks are therefore included below even though the primary focus is the happy path.

Format: Given/When/Then, one behaviour per case. Every SRS acceptance criterion for LANDING-001 maps to a case (AC-1 → TC-01 … AC-4 → TC-04); the remaining cases trace to explicitly specified SRS behaviour.

## Happy path

**Scenario**: TC-01 — Hero renders above the fold on desktop (AC-1)
**Given**: The page is loaded on a desktop viewport (≥ 860px)
**When**: I look at the initial viewport
**Then**: The hero section is the first visible content above the fold, showing the owner's name "Nguyen Minh An", the one-line headline (tagline), and both buttons "Get in touch" and "See my work" — all visible without scrolling

**Scenario**: TC-02 — Hero renders above the fold on mobile in a single centred column (AC-2)
**Given**: The page is loaded on a mobile viewport (≤ 860px)
**When**: I look at the initial viewport
**Then**: The hero is visible above the fold with the name, tagline, and both buttons, laid out in a single centred column

**Scenario**: TC-03 — "Get in touch" scrolls to the contact section (AC-3)
**Given**: The hero is visible
**When**: I activate the "Get in touch" button
**Then**: The page scrolls smoothly to the `#contact` section

**Scenario**: TC-04 — "See my work" scrolls to the projects section (AC-4)
**Given**: The hero is visible
**When**: I activate the "See my work" button
**Then**: The page scrolls smoothly to the `#projects` section

## Explicitly specified behaviour (SRS §4.1 behaviour and failure/boundary table)

**Scenario**: TC-05 — Desktop hero uses a two-column layout with copy on the left and the decorative visual on the right
**Given**: The page is loaded on a desktop viewport (≥ 860px)
**When**: I look at the hero layout
**Then**: The hero shows two columns — the name, tagline, supporting paragraph, and buttons on the left and the decorative visual (avatar) on the right (design-system §1.5 `md` breakpoint)

**Scenario**: TC-06 — Hero content values match the SRS data-touched fields
**Given**: The hero is visible
**When**: I read the hero copy
**Then**: The eyebrow greeting reads "Hi there, I'm", the name reads "Nguyen Minh An", the tagline reads "I craft clean, friendly web experiences — from first idea to shipped product.", a short supporting paragraph is present, and the two buttons are labelled "Get in touch" and "See my work"

**Scenario**: TC-07 — Boundary: viewport at exactly 860px applies the mobile single-column layout
**Given**: The page is loaded on a viewport exactly 860px wide
**When**: I look at the hero layout
**Then**: The hero uses the single-column mobile layout (the mobile breakpoint is ≤ 860px inclusive)

**Scenario**: TC-08 — Boundary: smallest supported width (320px) shows the full hero without horizontal scroll
**Given**: The page is loaded on a 320px-wide viewport
**When**: I look at the hero
**Then**: There is no horizontal page scroll and the name, tagline, supporting paragraph, and both buttons remain fully visible and tappable

**Scenario**: TC-09 — Reduced motion: scroll is instant and decorative animations are disabled
**Given**: The page is loaded with `prefers-reduced-motion: reduce` set
**When**: I activate either hero button and observe the hero
**Then**: The scroll behaviour is instant (`auto`), not smooth, and the decorative hero animations (spinning rings, floating avatar) are disabled
