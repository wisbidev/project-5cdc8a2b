# SRS — Landing

Module: `landing`
Last updated: 2025-07-05
Design: [View the approved design](http://localhost:8080/design/5cdc8a2b-3d38-49de-8c34-de98338ebff0)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

A single-page personal introduction landing page ("Giới thiệu bản thân") that
presents the owner — who they are, what they do, selected work, and how to
reach them — to anyone who lands on the page. It exists to make a strong first
impression and turn a visitor into a contact: the page is the owner's digital
handshake, and its call-to-action is to get in touch.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anyone who opens the page | Read all sections, scroll to sections, open project case-study modals, send the owner an email via the contact form |
| Owner | The person the page introduces ("Nguyen Minh An") | Everything a visitor may do; is the recipient of the contact form email |

There is no sign-in, no account, and no admin surface: the page is fully
public, static content. Content changes are made by editing the code, not by
any in-page mechanism.

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hero section
- About section
- Skills section
- Projects section
- Contact section

**Out of scope** — name what a reader would reasonably expect here and say
where it lives instead. This section prevents the same argument twice.

- Backend API or database — deliberately not built; the project shape is
  `static` (frontend only), and the contact form sends email via `mailto:`.
- Real content (biography, project details, social links) — placeholder copy
  ships; the owner replaces it with their real details before launch.
- Multi-page navigation — the site is a single scrolling page with anchor
  links.
- Analytics, SEO tooling, or a CMS — not requested; out of scope.
- Blog or portfolio archive — only the three selected projects are shown.

## 4. Functional requirements

One subsection per function. Every requirement carries a stable id
`LANDING-NNN` — ids are permanent: never renumber, never reuse. When a
requirement is dropped, mark it `(withdrawn)` and keep the id.

### 4.1 Hero section

**Requirement LANDING-001 — Hero presents identity and primary call-to-action**

*As a* Visitor, *I want to* see, immediately on load, who this page is about
and what to do next, *so that* I understand the page's purpose in seconds and
can act on its main call-to-action.

Behaviour:

1. The page loads and the hero section is the first visible content, above the
   fold, on desktop and mobile.
2. The hero shows the owner's name, a one-line headline (tagline), a short
   supporting paragraph, and a call-to-action button labelled "Get in touch".
3. A secondary button labelled "See my work" is present beside the primary CTA
   and scrolls to the projects section.
4. Activating "Get in touch" scrolls smoothly to the contact section
   (`#contact`).
5. On desktop (≥ 860px) the hero is two columns — copy on the left, decorative
   visual on the right; on mobile it collapses to a single centred column.

**Acceptance criteria** — each maps one-to-one onto a test case in
`docs/landing/test-cases/hero-section.md`. Given/When/Then, no compound
conditions: one behaviour per criterion.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is loaded on a desktop viewport | I look at the initial viewport | The hero section is visible above the fold, with the name, tagline, and both buttons visible without scrolling |
| AC-2 | The page is loaded on a mobile viewport (≤ 860px) | I look at the initial viewport | The hero is visible above the fold with the name, tagline, and buttons, laid out in a single centred column |
| AC-3 | The hero is visible | I activate the "Get in touch" button | The page scrolls smoothly to the `#contact` section |
| AC-4 | The hero is visible | I activate the "See my work" button | The page scrolls smoothly to the `#projects` section |

**Failure, boundary and permission behaviour** — the part most often skipped
and most often the source of bugs. Every row needs a defined outcome; "should
not happen" is not an outcome.

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | N/A — no user input in the hero | — |
| Boundary | Viewport at 860px exactly | The single-column mobile layout applies (mobile breakpoint is ≤ 860px) |
| Boundary | Viewport at the smallest supported width (320px) | No horizontal page scroll; text and buttons remain fully visible and tappable |
| Not found | Target section does not exist | N/A — all anchor targets exist in the same page |
| Not permitted | N/A — fully public | — |
| Conflict | N/A — no state | — |
| Upstream failure | N/A — no dependencies; static content | — |
| Reduced motion | `prefers-reduced-motion: reduce` is set | Scroll is instant (`auto`), not smooth; decorative animations disabled |

**Data touched** — the fields this function reads and writes, in product terms.
The physical schema is TL's job in `docs/architecture/erd.md`; this is the list
that document has to satisfy.

| Field | Type | Required | Rule |
|---|---|---|---|
| Owner name | text | yes | Placeholder "Nguyen Minh An"; static content |
| Eyebrow greeting | text | yes | "Hi there, I'm" |
| Tagline | text | yes | "I craft clean, friendly web experiences — from first idea to shipped product." |
| Supporting paragraph | text | yes | Short hero sub-paragraph |
| CTA labels | text | yes | "Get in touch", "See my work" |

(No database: all hero content is static markup in the component.)

### 4.2 About section

**Requirement LANDING-002 — About introduces the owner and quick facts**

*As a* Visitor, *I want to* read a short introduction to the owner and see key
facts at a glance, *so that* I quickly learn who they are, where they are
based, and what they are currently doing.

Behaviour:

1. The About section follows the hero and shows a section label, a heading,
   and a lead paragraph introducing the owner.
2. Body paragraphs give a short personal and professional summary.
3. A quick-facts list shows four facts: Location, Focus, Currently, Languages.
4. Each fact is visible as a labelled row with an icon.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled to the About section | I read the section | The section shows the label, heading, lead paragraph, and body text |
| AC-2 | The About section is visible | I look at the quick-facts list | Four facts (Location, Focus, Currently, Languages) are each shown with an icon and a label |
| AC-3 | The About section is visible | I read the facts | The Location fact reads "Ho Chi Minh City, Vietnam" and the Languages fact reads "Vietnamese, English" |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Reduced motion | `prefers-reduced-motion: reduce` is set | Scroll-reveal animations render content immediately (no fade/slide) |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Lead paragraph | text | yes | Static content |
| Body paragraphs | text | yes | Static content |
| Facts | text (4 items) | yes | Static content: Location, Focus, Currently, Languages |

### 4.3 Skills section

**Requirement LANDING-003 — Skills presented as a card grid**

*As a* Visitor, *I want to* see the owner's skills in a scannable grid of
cards, *so that* I can quickly assess their capabilities.

Behaviour:

1. The Skills section shows a section label, heading, and short description.
2. Six skill cards are displayed, each with an icon, a heading, and a one-line
   description.
3. On wide viewports (≥ 1120px) the grid is three columns; on medium viewports
   two columns; on mobile one column.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled to the Skills section | I look at the grid | Exactly six skill cards are shown, each with an icon, heading, and description |
| AC-2 | The viewport is ≥ 1120px | I look at the grid | The cards are arranged in three columns |
| AC-3 | The viewport is < 640px | I look at the grid | The cards are stacked in a single column |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Reduced motion | `prefers-reduced-motion: reduce` is set | Scroll-reveal renders cards immediately |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Skill cards | text (6 items) | yes | Each: icon, heading (≤ 24 chars), description (one line) |

### 4.4 Projects section

**Requirement LANDING-004 — Selected projects shown as cards with modals**

*As a* Visitor, *I want to* see a selection of the owner's projects and open
each one for details, *so that* I can evaluate the quality and range of their
work.

Behaviour:

1. The Projects section shows a section label, heading, and a short intro that
   includes a "GitHub" link.
2. Three project cards are displayed, each with a thumbnail, title, and short
   description.
3. Activating a project card opens a modal with the project's tag, heading,
   meta, body paragraphs, and a call-to-action button.
4. The modal can be closed via its close button, by clicking the backdrop, or
   by pressing Escape; focus returns to the trigger when closed.
5. While the modal is open, focus is trapped inside it.
6. The "GitHub" link shows a placeholder toast (social links are placeholder
   content for now).

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled to the Projects section | I look at the grid | Three project cards are shown, each with a thumbnail, title, and description |
| AC-2 | A project card is visible | I activate it | A modal opens showing the project's tag, heading, meta, body paragraphs, and a CTA |
| AC-3 | The modal is open | I press Escape | The modal closes and focus returns to the card that opened it |
| AC-4 | The modal is open | I click the backdrop or the close button | The modal closes |
| AC-5 | The modal is open | I press Tab repeatedly | Focus stays within the modal until it is closed |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Keyboard | Modal open, Escape pressed | Modal closes; focus restored to trigger |
| Focus trap | Modal open | Focus never leaves the modal |
| Placeholder link | "GitHub" activated | A toast appears briefly (auto-hides ~3200ms); no navigation |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Project cards | text (3 items) | yes | Each: thumbnail, title, description |
| Modal content | text | yes | Per project: tag, heading, meta, body paragraphs, CTA |

### 4.5 Contact section

**Requirement LANDING-005 — Contact section with email, links, and validated form**

*As a* Visitor, *I want to* contact the owner through a validated form that
composes an email, *so that* reaching out is one simple step and I get clear
feedback.

Behaviour:

1. The Contact section shows the owner's email address, social links, and a
   contact form.
2. The form has fields for name, email, and message; all are required.
3. Submitting with invalid or missing fields shows an inline error under the
   offending field; focus moves to the first invalid field; nothing else
   happens.
4. Submitting a valid form composes a pre-filled `mailto:` email to the owner
   with the visitor's name, email, and message, and opens the visitor's mail
   client.
5. After successful submission the button label changes to "Sent!" and a green
   success panel appears with a direct mailto fallback.
6. Social links (placeholder) show a toast instead of navigating.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled to the Contact section | I look at the section | Email address, social links, and a form with name, email, and message fields are visible |
| AC-2 | The form is empty | I submit it | Inline errors appear on all three fields and focus moves to the first invalid field |
| AC-3 | I enter an invalid email address | I submit the form | An inline error appears on the email field, nothing is sent |
| AC-4 | I fill all fields with a valid email address | I submit the form | The mail client opens with a pre-filled email to the owner containing my name, email, and message |
| AC-5 | A valid submission was made | I look at the form | The button reads "Sent!" and a green success panel with a mailto fallback is shown |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | Name empty | Inline error "Please tell me your name." |
| Invalid input | Email empty or malformed | Inline error "Please enter a valid email address." |
| Invalid input | Message empty | Inline error "Please write a short message." |
| Invalid + focus | Invalid field is focused | Error-tinted focus ring; error message stays visible |
| Upstream failure | No mail client installed | Success panel's direct mailto fallback link remains available so the visitor can copy/compose manually |
| Placeholder link | A social link is activated | Toast appears; no navigation |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Owner email | email | yes | Static content; recipient of the composed email |
| Name | text | yes | Included in the composed email |
| Email | email | yes | Must be a valid email format; included in the composed email |
| Message | text | yes | Included in the composed email |
| Social links | url (placeholder) | yes | Toast on activation; real URLs later |

(No data is stored server-side: the form composes a `mailto:` link client-side.)

## 5. Screens

The design is the source of truth for appearance; this section maps functions
onto it so nothing in the design is unaccounted for and nothing specified here
is missing from the design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Hero | `#hero` | LANDING-001 | default (desktop 2-col, mobile 1-col) |
| About | `#about` | LANDING-002 | default, reveal-in |
| Skills | `#skills` | LANDING-003 | default, reveal-in |
| Projects | `#projects` | LANDING-004 | default, modal open, toast shown |
| Contact | `#contact` | LANDING-005 | default, field invalid, success |

## 6. Non-functional requirements

Only what is real for this module. Delete rows that do not apply rather than
inventing a number nobody will check.

| Area | Requirement |
|---|---|
| Performance | Static page renders without network data fetches; no blocking requests beyond the app bundle |
| Accessibility | Keyboard reachable, visible focus, labelled inputs, contrast ≥ 4.5:1; skip link to main content; modal focus trap; `prefers-reduced-motion` respected |
| Responsive | Works at 320px and up; no horizontal page scroll; breakpoints per design system (§1.5) |
| Localisation | Copy is in English (with Vietnamese title "Giới thiệu bản thân" as brand); dates use `new Date().getFullYear()` for the footer year |
| Privacy | No personal data is stored or transmitted by the page; the contact form opens the visitor's own mail client |

## 7. Dependencies and assumptions

- **Depends on:** the approved design (`design/index.html`) and design system
  (`design/design-system.md`); the frontend scaffold (Next.js 15, Tailwind v3)
  per `docs/architecture/overview.md`.
- **Assumption:** content is placeholder ("Nguyen Minh An", example facts and
  projects) that the owner will replace with real details before launch.
- **Assumption:** the "GitHub" text link and social links are placeholders that
  show a toast; the owner provides real URLs later.

| Open question | Proposed default | Who decides |
|---|---|---|
| Real contact email for the composed mail | Keep the placeholder address; owner replaces it in `Contact.tsx` before launch | Owner |
| Real GitHub / social URLs | Keep toast-on-click behaviour until owner provides URLs | Owner |

## 8. Traceability

Every plan item in this module appears exactly once, and every requirement id
traces to a test case. A gap in this table is a gap in the build.

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hero section | LANDING-001 | `test-cases/hero-section.md` |
| About section | LANDING-002 | `test-cases/about-section.md` |
| Skills section | LANDING-003 | `test-cases/skills-section.md` |
| Projects section | LANDING-004 | `test-cases/projects-section.md` |
| Contact section | LANDING-005 | `test-cases/contact-section.md` |
