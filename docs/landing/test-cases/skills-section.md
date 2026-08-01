# Test Cases — Skills Section

**Module:** `landing`
**Requirement:** LANDING-003 — Skills presented as a card grid
**Risk level:** Low — static display component, no user input, no state mutations. The primary risk is layout reflow at breakpoints; content is static.
**Tested by:** Linh (TestLead)

---

## Happy-path cases

**Scenario:** Six skill cards are visible with icon, heading, and description

- **Given** the page is loaded and scrolled to the Skills section
- **When** I look at the grid of skill cards
- **Then** exactly six skill cards are visible
- **And** each card shows an icon, a heading, and a one-line description

*Traces to:* LANDING-003 AC-1, SRS §4.3 Behaviour 1–2

---

**Scenario:** Grid displays three columns on wide desktop viewport

- **Given** the page is loaded and scrolled to the Skills section
- **And** the viewport width is 1120px or greater
- **When** I look at the grid of skill cards
- **Then** the cards are arranged in three equal columns

*Traces to:* LANDING-003 AC-2, SRS §4.3 Behaviour 3

---

**Scenario:** Grid displays a single column on mobile viewport

- **Given** the page is loaded and scrolled to the Skills section
- **And** the viewport width is less than 640px
- **When** I look at the grid of skill cards
- **Then** the cards are stacked in a single column, one per row

*Traces to:* LANDING-003 AC-3, SRS §4.3 Behaviour 3

---

**Scenario:** Grid reflows cleanly at medium breakpoint

- **Given** the page is loaded and scrolled to the Skills section
- **And** the viewport width is between 640px and 1119px (inclusive)
- **When** I look at the grid of skill cards
- **Then** the cards are arranged in two columns

*Traces to:* LANDING-003 Behaviour 3 — the SRS specifies three breakpoints; this covers the un-named middle tier

---

## Reduced-motion case

**Scenario:** Cards render immediately when reduced motion is preferred

- **Given** the browser has `prefers-reduced-motion: reduce` set
- **And** the page is loaded and scrolled to the Skills section
- **When** the skill cards become visible
- **Then** all six cards are rendered immediately with no fade or slide animation

*Traces to:* LANDING-003 Failure table — Reduced motion

---

## Coverage summary

| Case | Automated | Manual | Reason |
|---|---|---|---|
| Six cards with icon, heading, description | yes | — | Visible DOM; count and content checkable in Playwright/Cypress |
| Three-column layout at ≥ 1120px | yes | — | Viewport resize + layout assertion in Playwright/Cypress |
| Single-column layout at < 640px | yes | — | Viewport resize + layout assertion in Playwright/Cypress |
| Two-column layout at 640–1119px | yes | — | Viewport resize + layout assertion in Playwright/Cypress |
| Reduced motion renders cards immediately | yes | — | Prefers-reduced-motion media query is testable in Playwright/Cypress |

All cases are automated. No manual verification is required.
