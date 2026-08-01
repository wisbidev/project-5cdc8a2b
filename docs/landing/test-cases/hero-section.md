# Test Cases — Hero Section

**Module:** `landing`
**Requirement:** LANDING-001 — Hero presents identity and primary call-to-action
**Risk level:** Low — static display component, no user input, no state mutations. The primary risk is responsive layout and anchor-scroll behaviour; content is static markup.
**Tested by:** Linh (TestLead)

---

## Happy-path cases

**Scenario:** Hero renders above the fold on desktop with all identity content

- **Given** the page is loaded on a desktop viewport (≥ 860px)
- **When** I look at the initial viewport
- **Then** the hero section is visible above the fold, without scrolling
- **And** the owner's name ("Nguyen Minh An"), the eyebrow greeting ("Hi there, I'm"), the tagline, the supporting paragraph, and both buttons ("Get in touch" and "See my work") are visible
- **And** the hero is laid out in two columns — copy on the left, decorative visual on the right

*Traces to:* LANDING-001 AC-1, SRS §4.3 Behaviour 1–2, 5

---

**Scenario:** Hero renders above the fold on mobile in a single centred column

- **Given** the page is loaded on a mobile viewport (≤ 860px)
- **When** I look at the initial viewport
- **Then** the hero is visible above the fold with the name, tagline, supporting paragraph, and both buttons visible without scrolling
- **And** the hero collapses to a single centred column

*Traces to:* LANDING-001 AC-2, SRS §4.3 Behaviour 1, 5

---

**Scenario:** "Get in touch" scrolls to the contact section

- **Given** the hero section is visible
- **When** I activate the "Get in touch" button
- **Then** the page scrolls smoothly to the `#contact` section

*Traces to:* LANDING-001 AC-3, SRS §4.3 Behaviour 4

---

**Scenario:** "See my work" scrolls to the projects section

- **Given** the hero section is visible
- **When** I activate the "See my work" button
- **Then** the page scrolls smoothly to the `#projects` section

*Traces to:* LANDING-001 AC-4, SRS §4.3 Behaviour 3

---

## Coverage summary

| Case | Automated | Manual | Reason |
|---|---|---|---|
| Desktop hero above the fold with name, tagline, paragraph, both buttons, two-column layout | yes | — | Viewport resize + DOM/layout assertion in Playwright/Cypress |
| Mobile hero above the fold, single centred column | yes | — | Viewport resize + layout assertion in Playwright/Cypress |
| "Get in touch" scrolls to `#contact` | yes | — | Click + assert target section in viewport (`scrollIntoView` observable) |
| "See my work" scrolls to `#projects` | yes | — | Click + assert target section in viewport |

All cases are automated. No manual verification is required.
