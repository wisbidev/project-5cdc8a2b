# SRS — Landing Page

Module: `landing`
Last updated: 2026-01-23
Design: [View the approved design](http://localhost:8080/design/5cdc8a2b-3d38-49de-8c34-de98338ebff0)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

A single-page personal introduction landing page ("Giới thiệu bản thân") that introduces the page owner — who they are, what they do, highlights, and how to reach them. Any visitor lands here and leaves knowing who the owner is and how to contact them. Without this page the owner has no online presence.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Guest | Any visitor, not signed in | Read all sections, click external links, submit the contact form |

No authentication, no role differences, no permissions to manage — the entire page is publicly readable.

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hero section
- About section
- Skills section
- Projects section
- Contact section

**Out of scope:**

- User authentication or accounts — belongs to no module; this is a static page.
- Email backend or database storage of form submissions — the form composes a `mailto:` link only (no server, no database).
- Analytics, A/B testing, or session tracking — not requested.

## 4. Functional requirements

### 4.1 Hero section

**Requirement LANDING-001 — Hero renders above the fold**

*As a* Guest, *I want to* see the hero section immediately on page load, *so that* I know who this page belongs to and what it is.

Behaviour:

1. On page load the browser displays the hero section at the top of the viewport without scrolling.
2. The hero contains: owner's name, one-line headline, a short tagline, and a single call-to-action (CTA) button.
3. The CTA button, when clicked, scrolls the page smoothly to the `#contact` section.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/landing/test-cases/hero.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Page loads on a desktop viewport (≥1024 px wide) | No scroll action | Hero name, headline, tagline, and CTA button are visible in the initial viewport |
| AC-2 | Page loads on a mobile viewport (375 px wide) | No scroll action | Hero name, headline, tagline, and CTA button are visible without horizontal scroll |
| AC-3 | User clicks the CTA button | Button is clicked | Page scrolls smoothly to the `#contact` section |
| AC-4 | User clicks the CTA button on a touch device | Button is tapped | Page scrolls smoothly to the `#contact` section |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Slow network | Hero assets or fonts take > 3 s to load | Content renders progressively; text is never invisible |
| Missing asset | A hero image (if present) fails to load | Placeholder colour fills the image area; no broken icon is shown |
| JavaScript disabled | Script does not execute | Page still renders; CTA button scrolls to `#contact` via native anchor href fallback |

**Data touched** — no fields read or written by this component.

### 4.2 About section

**Requirement LANDING-002 — About section displays personal introduction**

*As a* Guest, *I want to* read a short personal introduction and quick facts, *so that* I understand who the owner is and what they focus on.

Behaviour:

1. The About section renders below the hero.
2. It contains a short personal paragraph (≥ 2 sentences, ≤ 150 words) describing the owner's background and current focus.
3. It displays at least three quick-facts items (e.g. location, industry focus, years of experience).
4. Text remains readable at all supported breakpoints (320 px to 1920 px wide).

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/landing/test-cases/about.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-5 | Page loads at 320 px wide | No scroll action | About section text does not overflow horizontally |
| AC-6 | Page loads at 1440 px wide | No scroll action | About section text reflows to a comfortable reading width |
| AC-7 | About paragraph is present | Page renders | At least 2 sentences of intro text are visible |
| AC-8 | Quick-facts items are present | Page renders | At least 3 quick-facts items are visible |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Empty paragraph | No intro text is configured | A visible placeholder message is shown ("Intro text coming soon") |
| Missing quick facts | Fewer than 3 facts are configured | Available facts render; no broken or empty list item is shown |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| owner_bio | text | no | max 150 words; falls back to placeholder if empty |
| owner_location | text | no | one line, falls back to placeholder if empty |
| owner_focus | text | no | one line, falls back to placeholder if empty |
| owner_experience_years | number | no | integer, falls back to placeholder if empty |

### 4.3 Skills section

**Requirement LANDING-003 — Skills section displays skill grid**

*As a* Guest, *I want to* see the owner's skills in a scannable grid, *so that* I quickly understand their capabilities.

Behaviour:

1. The Skills section renders below the About section.
2. It displays a grid of skill cards, each with a skill name and a one-line description.
3. The grid shows 3 columns on desktop (≥1024 px), 2 on tablet (≥640 px), and 1 on mobile (<640 px).
4. Each card has consistent height within a row.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/landing/test-cases/skills.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-9 | Page renders on desktop (≥1024 px) | No scroll action | Skills grid shows exactly 3 columns |
| AC-10 | Page renders on tablet (≥640 px, <1024 px) | No scroll action | Skills grid shows exactly 2 columns |
| AC-11 | Page renders on mobile (<640 px) | No scroll action | Skills grid shows exactly 1 column |
| AC-12 | At least 3 skill cards are present | Page renders | All visible cards display a skill name and a one-line description |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Fewer than 6 skills | Fewer than 6 skill cards are configured | Available cards render; no empty card slots are shown |
| Long skill name | Skill name text is long (≥ 40 characters) | Text wraps within the card; card does not overflow the grid column |
| Long description | Description text is long (≥ 120 characters) | Text wraps; card height adjusts; other cards in the row do not change height unexpectedly |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| skill_name | text | yes | max 50 characters per card |
| skill_description | text | yes | max 120 characters per card |

### 4.4 Projects section

**Requirement LANDING-004 — Projects section showcases sample projects**

*As a* Guest, *I want to* see sample projects with descriptions and links, *so that* I can evaluate the owner's work.

Behaviour:

1. The Projects section renders below the Skills section.
2. It displays exactly 3 project cards.
3. Each card shows: project title, a one-line description, and a link.
4. Each link opens in a new browser tab (`target="_blank"`, `rel="noopener noreferrer"`).

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/landing/test-cases/projects.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-13 | Page renders | No scroll action | Exactly 3 project cards are visible |
| AC-14 | All 3 project cards are present | Page renders | Each card shows a title, a one-line description, and a clickable link |
| AC-15 | User clicks a project link | Link is clicked | The linked page opens in a new browser tab |
| AC-16 | Project links are configured | Page renders | Each link has `target="_blank"` and `rel="noopener noreferrer"` |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Link URL is missing | A project card has no URL configured | Card still renders title and description; the link element is absent or styled as disabled |
| Broken link URL | URL is not a valid URI | Browser navigates normally; no JavaScript error is thrown |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| project_title | text | yes | max 80 characters |
| project_description | text | yes | max 120 characters |
| project_url | text | no | must be a valid URL if present |

### 4.5 Contact section

**Requirement LANDING-005 — Contact section provides reach-out options**

*As a* Guest, *I want to* find contact information and reach the owner, *so that* I can get in touch.

Behaviour:

1. The Contact section renders at the bottom of the page, anchored as `#contact`.
2. It contains a closing call-to-action heading.
3. It displays at least three contact links: email, GitHub, and LinkedIn.
4. Each contact link is clickable and opens in a new tab.
5. It includes a contact form with fields: Name (required), Email (required, validated format), and Message (required, min 10 characters).
6. On valid form submission, the form composes a `mailto:` link with fields prefilled and opens the user's email client.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/landing/test-cases/contact.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-17 | Contact section is present | Page renders | Email, GitHub, and LinkedIn links are visible and clickable |
| AC-18 | User clicks the GitHub link | Link is clicked | GitHub profile opens in a new tab |
| AC-19 | User clicks the LinkedIn link | Link is clicked | LinkedIn profile opens in a new tab |
| AC-20 | User clicks the email link | Link is clicked | Default email client opens with the owner address pre-filled |
| AC-21 | Form has empty required fields | Submit is clicked | Inline validation errors appear on each empty required field |
| AC-22 | Form email field has invalid format | Submit is clicked | Inline error "Please enter a valid email address" appears on the email field |
| AC-23 | Form message field has fewer than 10 characters | Submit is clicked | Inline error "Message must be at least 10 characters" appears on the message field |
| AC-24 | All form fields are valid | Submit is clicked | The browser opens a `mailto:` link with name, email, and message prefilled |
| AC-25 | Contact form is submitted with valid data | No scroll action | Page does not navigate or refresh |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| No email address configured | Owner email is absent | Email link is hidden; the form submit still works via a fallback `mailto:` |
| Browser has no default email client | `mailto:` is triggered | Nothing happens; no error is thrown to the user |
| XSS in form fields | A user injects `<script>` in Name or Message | Input is escaped before insertion into the `mailto:` link; no script executes |
| Tab key navigation | User reaches the submit button | Submit button is reachable and activatable with keyboard only |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| contact_name | text | yes | required; min 1 character |
| contact_email | text | yes | required; must match email regex |
| contact_message | text | yes | required; min 10 characters |

## 5. Screens

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| One-page landing | Hero | LANDING-001 | default |
| One-page landing | About | LANDING-002 | default, empty-placeholder |
| One-page landing | Skills | LANDING-003 | default, underflow |
| One-page landing | Projects | LANDING-004 | default, missing-url |
| One-page landing | Contact | LANDING-005 | default, form-invalid, form-submitted |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Page reaches First Contentful Paint within 2 s on a 4 Mbps connection |
| Accessibility | Keyboard reachable; visible focus ring on all interactive elements; all images have alt text; form inputs have associated labels; colour contrast ≥ 4.5:1 for normal text and ≥ 3:1 for large text |
| Responsive | Page works at 320 px and up with no horizontal overflow at any breakpoint |
| Localisation | All copy is in Vietnamese; dates and numbers formatted for `vi-VN` if any are displayed |
| Privacy | No personal data is collected or stored; the contact form submits to the visitor's own email client only |

## 7. Dependencies and assumptions

- **Depends on:** No backend or external services — fully static.
- **Assumption:** The visitor has JavaScript enabled for the smooth-scroll behaviour; without it the native anchor href provides equivalent navigation.
- **Assumption:** The stakeholder will replace placeholder copy (name, bio, skills, projects) with real content before publishing.

| Open question | Proposed default | Who decides |
|---|---|---|
| What email address does the `mailto:` form send to? | `hello@[domain]` placeholder; stakeholder fills in real address | Stakeholder |
| What GitHub and LinkedIn URLs are used? | `#` placeholder links; stakeholder replaces with real profiles | Stakeholder |

## 8. Traceability

Every plan item in this module appears exactly once, and every requirement id traces to a test case.

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hero section | LANDING-001 | `test-cases/hero.md` |
| About section | LANDING-002 | `test-cases/about.md` |
| Skills section | LANDING-003 | `test-cases/skills.md` |
| Projects section | LANDING-004 | `test-cases/projects.md` |
| Contact section | LANDING-005 | `test-cases/contact.md` |
