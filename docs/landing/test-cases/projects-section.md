# Test Cases — Projects Section

**Module:** `landing`
**Requirement:** LANDING-004 — Selected projects shown as cards with modals
**Risk level:** Medium — static display component plus modal open/close with keyboard and focus-trap behaviour. A broken close path or focus trap is a real accessibility/interaction defect, so the happy path must cover the modal lifecycle, not just the cards.
**Tested by:** Linh (TestLead)

---

## Happy-path cases

**Scenario:** Section header shows label, heading, and intro with a GitHub link

- **Given** the page is loaded and scrolled to the Projects section
- **When** I look at the section header
- **Then** a section label, a heading, and a short intro paragraph are shown
- **And** the intro contains a "GitHub" link

*Traces to:* LANDING-004 Behaviour 1

---

**Scenario:** Three project cards are visible with thumbnail, title, and description

- **Given** the page is loaded and scrolled to the Projects section
- **When** I look at the grid of project cards
- **Then** exactly three project cards are visible
- **And** each card shows a thumbnail, a title, and a short description

*Traces to:* LANDING-004 AC-1, Behaviour 2

---

**Scenario:** Activating a project card opens its case-study modal

- **Given** the Projects section is visible with three project cards
- **When** I activate a project card
- **Then** a modal opens showing the project's tag, heading, meta, body paragraphs, and a call-to-action button
- **And** the modal content matches the card I activated

*Traces to:* LANDING-004 AC-2, Behaviour 3

---

**Scenario:** Pressing Escape closes the modal and restores focus to the trigger

- **Given** a project modal is open
- **When** I press Escape
- **Then** the modal closes
- **And** focus returns to the card that opened it

*Traces to:* LANDING-004 AC-3, Failure table — Keyboard

---

**Scenario:** Close button and backdrop click close the modal

- **Given** a project modal is open
- **When** I click the close button or the backdrop
- **Then** the modal closes

*Traces to:* LANDING-004 AC-4

---

**Scenario:** Focus stays trapped inside the modal while it is open

- **Given** a project modal is open
- **When** I press Tab repeatedly
- **Then** focus never leaves the modal until it is closed

*Traces to:* LANDING-004 AC-5, Failure table — Focus trap

---

**Scenario:** GitHub link shows a placeholder toast and does not navigate

- **Given** the Projects section is visible
- **When** I activate the "GitHub" link
- **Then** a toast appears briefly (auto-hides after ~3200ms) and no navigation occurs

*Traces to:* LANDING-004 Behaviour 6, Failure table — Placeholder link

---

## Coverage summary

| Case | Automated | Manual | Reason |
|---|---|---|---|
| Section header with GitHub link | yes | — | Visible DOM; checkable in Playwright/Cypress |
| Three cards with thumbnail, title, description | yes | — | Visible DOM; count and content checkable |
| Card opens modal with full content | yes | — | Click + DOM assertion |
| Escape closes modal, focus restored | yes | — | Keyboard event + focus assertion |
| Close button / backdrop closes modal | yes | — | Click + visibility assertion |
| Focus trap while modal open | yes | — | Tab cycling + focus assertion |
| GitHub link shows toast, no navigation | yes | — | Click + toast visibility + URL unchanged (timer fast-forwardable) |

All cases are automated. No manual verification is required.

Per the task brief, happy-path cases only. Every acceptance criterion of LANDING-004 (AC-1–AC-5) is covered, together with Behaviour 1 (section header with GitHub link) and Behaviour 6 (placeholder GitHub link), both explicitly in the requirements. The card's interactive element is the "Case study" trigger, which opens the case-study modal per LANDING-004 Behaviour 3; the "GitHub" intro link is the placeholder link referred to in the brief (toast, no navigation). The SRS names no other roles, breakpoints, or boundaries for this function, so none are added.
