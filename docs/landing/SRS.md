# SRS — Landing page (Giới thiệu bản thân)

Module: `landing`
Last updated: 2025-07-05
Design: [View the approved design](http://localhost:8080/design/5cdc8a2b-3d38-49de-8c34-de98338ebff0)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only the functions
> that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

A single-page personal introduction site ("Giới thiệu bản thân" — *Introduce
myself*) that presents the owner to visitors: who they are, what they do, their
skills, three sample projects, and how to reach them. It is the owner's digital
business card and first impression for recruiters, clients, and collaborators.

The module is a static landing page (Next.js + TypeScript + Tailwind CSS) with
no backend, no database, and no sign-in. All content is placeholder copy taken
from the approved design; the owner later replaces it with their real details
directly in source. If this module does not exist, the owner has no public
presence for this project.

## 2. Actors

This page has exactly one runtime role — anyone who opens it. There is no
authentication and no account state; content is edited in source code, not in
the product.

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anyone who opens the page | View all sections, open project case-study modals, use the contact form (composes an email), follow contact links |
| Owner | The person the page introduces | Not an in-product role; replaces placeholder content and real profile URLs in the source code |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Hero section
- About section
- Skills section
- Projects section
- Contact section

The approved design also specifies a page shell that ships inside the hero and
contact stories: a sticky header with section navigation and a mobile menu, a
skip link, a footer with a back-to-top control, and a toast for placeholder
links. Behavioural requirements for these live under §4.1 and §4.5.

**Out of scope** — what a reader would reasonably expect here and where it
lives instead:

- Backend, database, or CMS — deliberately not built; the page is fully static
  and content is edited in source.
- Real social profile URLs (GitHub, LinkedIn) — not yet known; links are
  placeholders that show a toast until the owner supplies the URLs.
- Analytics, tracking, or form data storage — deliberately not built; the form
  only composes a `mailto:` email and nothing is transmitted to a server.
## 4. Functional requirements

One subsection per function. Every requirement carries a stable id
`LANDING-NNN` — ids are permanent: never renumber, never reuse. When a
requirement is dropped, mark it `(withdrawn)` and keep the id.

### 4.1 Hero section

The top of the page: a full-width hero with the owner's name, a one-line
headline, a short tagline, and a call-to-action button that scrolls to the
contact section. This function also covers the page header shell that sits
above the hero, because the hero story builds the top of the page as one unit.

**Requirement LANDING-001 — Hero renders above the fold**

*As a* Visitor, *I want to* see the owner's name, a one-line headline, a short
tagline, and a call-to-action button as soon as the page opens, *so that* I
immediately know who this page is about and what to do next.

Behaviour:

1. The page opens with a full-width hero section as its first content.
2. The hero displays, in order: the owner's name (as a heading), a one-line
   headline, a short tagline, and a call-to-action button labelled to invite
   contact (e.g. "Get in touch").
3. On desktop (≥ 1120px) the entire hero content — name, headline, tagline and
   CTA — is visible without scrolling.
4. On mobile (375px) at least the name, tagline and CTA are visible without
   scrolling, and no element overflows the viewport width.

**Acceptance criteria** — each maps one-to-one onto a test case in
`docs/landing/test-cases/hero.md`. Given/When/Then, no compound conditions: one
behaviour per criterion.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A desktop viewport (≥ 1120px) | the page finishes loading | the hero shows the name, headline, tagline and CTA button, all visible without scrolling |
| AC-2 | A mobile viewport (375px) | the page finishes loading | the hero shows the name, tagline and CTA button without scrolling and with no horizontal overflow |
| AC-3 | The hero is displayed | I check the CTA button | it has an accessible label and is a real button/anchor, not static text |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Headline or tagline is long | Text wraps within the hero container; the page never scrolls horizontally |
| Missing target | The `contact` section id is absent | Defect — the CTA must always target the contact section on this page; tests assert the target exists |
| Not permitted | N/A | No permission model exists on a public static page; every visitor sees the full hero |

**Data touched** — static placeholder content in source; no runtime data.

| Field | Type | Required | Rule |
|---|---|---|---|
| Name | text | yes | Heading-level text, ≤ 40 characters placeholder |
| Headline | text | yes | One line, wraps gracefully on small screens |
| Tagline | text | yes | Short paragraph, placeholder copy |
| CTA label | text | yes | Invites contact; scrolls to `#contact` |

**Requirement LANDING-002 — CTA scrolls to the contact section**

*As a* Visitor, *I want to* click the call-to-action and land on the contact
section, *so that* I can reach the owner without scrolling manually.

Behaviour:

1. The hero CTA targets the contact section element (anchor `contact`).
2. Clicking the CTA scrolls the page smoothly to the contact section.
3. When the visitor prefers reduced motion, scrolling jumps instantly instead
   of animating.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The hero is displayed | I click the CTA button | the page scrolls to the contact section (element with id `contact`) |
| AC-2 | The visitor has `prefers-reduced-motion: reduce` | I click the CTA button | the page jumps to the contact section without animation |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Reduced-motion preference is on | Scroll animation is disabled; navigation still works |
| Missing target | No element with id `contact` | Clicking the CTA does not visibly scroll; covered by AC-1, which asserts the target exists |

**Data touched** — none (anchor navigation only).

**Requirement LANDING-003 — Sticky header navigation**

*As a* Visitor, *I want to* reach any section from a header that stays on
screen, *so that* I can navigate a long page quickly.

Behaviour:

1. A header sticks to the top of the viewport while scrolling.
2. On desktop (≥ 860px) the header shows the brand, links to the About,
   Skills, Projects and Contact sections, and the CTA.
3. Clicking a header link scrolls to its section.
4. On mobile (< 860px) the links and CTA collapse behind a menu toggle
   (hamburger); the toggle announces its state (`aria-expanded`) and opens or
   closes the menu; Escape closes an open menu.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled down | I look at the top of the viewport | the header remains visible (sticky) |
| AC-2 | A desktop viewport (≥ 860px) | I click a header link | the page scrolls to that section |
| AC-3 | A mobile viewport (< 860px) | I click the menu toggle | the menu opens, and `aria-expanded` reflects the open state; clicking again or pressing Escape closes it |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Exactly at the 860px breakpoint | Desktop header is shown (≥ 860px) |
| Not permitted | N/A | Public page; no role restrictions |

**Data touched** — none (static links).

**Requirement LANDING-004 — Skip link**

*As a* keyboard Visitor, *I want to* jump straight to the main content, *so
that* I do not tab through the navigation on every visit.

Behaviour:

1. A skip link is the first focusable element on the page.
2. It is visually hidden until it receives keyboard focus, then becomes
   visible and moves focus to the main content.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page has loaded | I press Tab once | the skip link appears and, when activated, moves focus to the main content |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Skip link not focused | It stays visually hidden and does not intercept other focus |

**Data touched** — none.
### 4.2 About section

**Requirement LANDING-005 — About block renders**

*As a* Visitor, *I want to* read a short personal introduction and a few quick
facts, *so that* I understand the owner's background and focus.

Behaviour:

1. The About section shows a short paragraph describing the owner's background
   and what they do.
2. It also shows quick facts — at minimum location and focus area — presented
   as small fact rows or chips.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The About section is displayed | I read it | it contains an introduction paragraph and fact rows for location and focus area |
| AC-2 | The section is displayed | I inspect the content | every quick fact value is populated (no empty rows) |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Paragraph text is long | Text wraps within the container; no clipping and no horizontal scroll |
| Not permitted | N/A | Public page; full content visible to every visitor |

**Data touched** — static placeholder content in source.

| Field | Type | Required | Rule |
|---|---|---|---|
| Intro paragraph | text | yes | Several sentences about background and work |
| Location fact | text | yes | Short value, e.g. a city |
| Focus area fact | text | yes | Short value, e.g. "Web & product design" |

**Requirement LANDING-006 — About text is readable at all breakpoints**

*As a* Visitor, *I want to* read the introduction comfortably on any device,
*so that* the page works on mobile as well as desktop.

Behaviour:

1. At every breakpoint from 320px up, the About text stays within its
   container at the body text size defined in the design system (≥ 15px),
   wraps correctly, and does not cause horizontal page scroll.
2. Fact rows reflow from a two-column arrangement on wide screens to stacked
   rows on narrow screens.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A mobile viewport (320px) | the About section is rendered | all text is fully visible, ≥ 15px, with no horizontal scroll |
| AC-2 | A desktop viewport (≥ 1120px) | the About section is rendered | facts display side by side (two columns) |
| AC-3 | A mobile viewport (≤ 640px) | the About section is rendered | facts stack in a single column and remain fully visible |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | 320px viewport | Text never overflows or clips; page has no horizontal scrollbar |
| Not permitted | N/A | — |

**Data touched** — none at runtime (static content only).

### 4.3 Skills section

**Requirement LANDING-007 — Six skill cards render**

*As a* Visitor, *I want to* see the owner's skills as a grid of cards, *so
that* I can scan what they are good at.

Behaviour:

1. The Skills section shows a grid of six skill cards.
2. Each card contains a title (e.g. "Web Development", "Design",
   "Communication") and a one-line description.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The Skills section is displayed | I count the cards | exactly six cards are shown |
| AC-2 | A card is displayed | I read it | it shows a title and a one-line description, both non-empty |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | A description is longer than one line of its column | It wraps within the card; the card grows without breaking the grid |
| Not permitted | N/A | — |

**Data touched** — static placeholder content.

| Field | Type | Required | Rule |
|---|---|---|---|
| Skill title | text | yes | Short noun phrase, e.g. "Web Development" |
| Skill description | text | yes | One sentence, placeholder copy |

**Requirement LANDING-008 — Grid reflows responsively**

*As a* Visitor, *I want to* see the skills reflow cleanly, *so that* they are
legible on every screen size.

Behaviour:

1. On wide screens (≥ 1120px) the grid shows three columns.
2. On medium screens it shows two columns.
3. On mobile (≤ 640px) it shows one column.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A desktop viewport (≥ 1120px) | the Skills section is rendered | the six cards form a 3-column grid |
| AC-2 | A mobile viewport (≤ 640px) | the Skills section is rendered | the cards stack in a single column, each fully visible |
| AC-3 | Any viewport | the Skills section is rendered | cards do not overlap and the page does not scroll horizontally |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Exactly 640px | Single column applies (≤ 640px); two columns above |
| Not permitted | N/A | — |

**Data touched** — none at runtime.
### 4.4 Projects section

**Requirement LANDING-009 — Three project cards render**

*As a* Visitor, *I want to* see a showcase of three sample projects, *so that*
I can gauge the owner's work.

Behaviour:

1. The Projects section shows three project cards.
2. Each card contains a project title, a one-line description, and a
   "Case study" link (per the approved design, the link opens a detail modal —
   see LANDING-010).
3. The section intro mentions the owner's GitHub; that GitHub link is a
   placeholder and behaves as specified in LANDING-011.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The Projects section is displayed | I count the cards | exactly three cards are shown |
| AC-2 | A project card is displayed | I read it | it shows a title, a one-line description, and a "Case study" control, all non-empty |
| AC-3 | The Projects section is displayed | I check the section intro | the GitHub link is present and clickable (shows the placeholder toast per LANDING-011) |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Description is long | It wraps within the card; cards in a row keep equal height |
| Not permitted | N/A | — |

**Data touched** — static placeholder content.

| Field | Type | Required | Rule |
|---|---|---|---|
| Project title | text | yes | Short title, e.g. "Travel Planner" |
| Project description | text | yes | One sentence |
| Case-study control | control | yes | Button opening the matching modal |
| Modal content | text | yes | Tag, heading, role/meta line, paragraphs, CTA |

**Requirement LANDING-010 — Case study opens a modal**

*As a* Visitor, *I want to* click "Case study" and see the project's details in
an overlay, *so that* I can learn more without leaving the page.

Behaviour:

1. Clicking a card's "Case study" control opens the modal belonging to that
   card (each of the three cards opens its own modal).
2. The modal is a dialog with `role="dialog"`, `aria-modal="true"`, and an
   accessible name; while open, focus is trapped inside it and the page behind
   is inert.
3. The modal closes when the visitor clicks its close button, clicks the
   backdrop outside the dialog, or presses Escape.
4. On close, focus returns to the "Case study" control that opened it.
5. Only one modal is open at a time.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | A project card is displayed | I click its "Case study" control | a modal opens showing that project's title and detail content |
| AC-2 | The modal is open | I click the close button | the modal closes and focus returns to the control that opened it |
| AC-3 | The modal is open | I press Escape | the modal closes and focus returns to the control that opened it |
| AC-4 | The modal is open | I click the backdrop outside the dialog | the modal closes |
| AC-5 | A modal is open | I press Tab repeatedly | focus stays within the modal (focus trap) |
| AC-6 | A modal is open | I try to open another card's modal | the open modal closes and the new one opens; never two at once |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Modal content is taller than the viewport | The dialog scrolls internally (`max-height`), the page behind does not scroll |
| Not permitted | N/A | — |
| Conflict | Two "Case study" clicks in quick succession | The second click replaces the open modal (no stacked modals) |

**Data touched** — static content only; the modal holds the card's detail copy.

### 4.5 Contact section

**Requirement LANDING-011 — Contact links**

*As a* Visitor, *I want to* reach the owner by email, GitHub and LinkedIn,
*so that* I can get in touch the way I prefer.

Behaviour:

1. The contact section shows an email link, a GitHub link and a LinkedIn link.
2. Clicking the email link opens the visitor's email client with the owner's
   address pre-filled (`mailto:`).
3. GitHub and LinkedIn do not yet have real URLs. While they are placeholders,
   clicking either shows a toast that names the link as a placeholder (e.g.
   "GitHub link is a placeholder") and does not navigate away.
4. The same placeholder-toast behaviour applies to the GitHub link in the
   Projects section intro (LANDING-009).
5. The toast is announced to assistive technology (`role="status"`) and
   dismisses itself after a few seconds.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The contact section is displayed | I click the email link | the email client opens with the owner's address pre-filled |
| AC-2 | The contact section is displayed | I click the GitHub link | a toast appears naming the placeholder, and the page does not navigate |
| AC-3 | The contact section is displayed | I click the LinkedIn link | a toast appears naming the placeholder, and the page does not navigate |
| AC-4 | The Projects section intro | I click its GitHub link | the same placeholder toast appears and the page does not navigate |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | No email client is configured | The browser applies its default `mailto:` handling; the page does not need to compensate |
| Not permitted | N/A | — |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Owner email | text | yes | Valid `mailto:` target (placeholder: `hello@minhan.dev`) |
| GitHub URL | text | placeholder | Empty until the owner supplies it; toast while placeholder |
| LinkedIn URL | text | placeholder | Empty until the owner supplies it; toast while placeholder |
**Requirement LANDING-012 — Contact form validates input**

*As a* Visitor, *I want to* send a message through a simple form, *so that* I
can contact the owner without leaving the page.

Behaviour:

1. The contact form has three fields: name, email, and message, each with a
   visible label.
2. On submit, the form validates client-side: name is non-empty, email is
   non-empty and a well-formed address, message is non-empty.
3. Invalid fields show an inline error message naming the problem (e.g.
   "Please tell me your name.", "Please enter a valid email address.",
   "Please write a short message."); focus moves to the first invalid field.
4. While errors are shown, no email is composed (the submit is blocked).

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The form is empty | I submit it | inline errors appear on name, email and message, and no email client opens |
| AC-2 | Name and message are filled but email is `not-an-email` | I submit it | an inline error on the email field says the address is invalid, and no email client opens |
| AC-3 | The form has errors | I correct all fields and submit again | errors clear and the form proceeds (see LANDING-013) |
| AC-4 | The form is displayed | I inspect it | every field has a visible label associated with it (`<label for>`) |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | Field empty or malformed | Inline error on that field; nothing is composed; focus moves to the first invalid field |
| Boundary | Message with only whitespace | Treated as empty; error shown |
| Double submit | Visitor clicks submit twice quickly | Only one email is composed (submission is guarded against double-trigger) |
| Not permitted | N/A | — |

**Data touched**

| Field | Type | Required | Rule |
|---|---|---|---|
| Name | text | yes | Non-empty after trimming |
| Email | text | yes | Non-empty, well-formed address |
| Message | text | yes | Non-empty after trimming |

**Requirement LANDING-013 — Valid submit composes a pre-filled email**

*As a* Visitor, *I want to* submit the form and have my email app open with
everything pre-filled, *so that* sending the message takes one click.

Behaviour:

1. On a valid submit, the page opens the visitor's email client via a
   `mailto:` link addressed to the owner, with the subject and the message
   body pre-filled from the form fields.
2. The page then shows a success message confirming the email app should have
   opened, with a direct `mailto:` fallback link to the owner's address in
   case it did not.
3. The submit button reflects the submission (label changes, e.g. to "Sent!")
   and cannot be double-triggered.

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | All three fields are valid | I submit the form | the email client opens with the owner's address, and the subject/body pre-filled from my input |
| AC-2 | A valid submit has happened | I look at the form | a success message appears that includes a direct email link to the owner |
| AC-3 | A valid submit has happened | I click submit again | no second email is composed (double-submit guard) |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Upstream failure | No email client is configured | The success message's direct `mailto:` link remains the fallback; the page shows no error it cannot act on |
| Double submit | Two rapid clicks | Guarded; a single email is composed and the button shows "Sent!" |

**Data touched** — the form values are only placed into the `mailto:` URI; the
page stores or transmits nothing.

**Requirement LANDING-014 — Footer and back-to-top**

*As a* Visitor, *I want to* see a footer with a back-to-top control, *so that*
I can return to the top of a long page easily.

Behaviour:

1. The page ends with a footer that shows the current year (computed at
   render time) and a back-to-top control.
2. Clicking back-to-top scrolls smoothly to the top of the page (instantly
   when reduced motion is preferred).

**Acceptance criteria**

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled down | I click the back-to-top control | the page scrolls to the top |
| AC-2 | The footer is displayed | I inspect it | it shows the current year |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Boundary | Reduced-motion preference | Scroll to top is instant, no animation |
| Not permitted | N/A | — |

**Data touched** — none; the year is generated from the visitor's clock.
## 5. Screens

The design is the source of truth for appearance; this section maps functions
onto it so nothing in the design is unaccounted for and nothing specified here
is missing from the design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Header | Sticky nav + hamburger | LANDING-003 | default, mobile-open, reduced-motion |
| Hero | Hero with avatar visual | LANDING-001, LANDING-002 | default, reduced-motion |
| About | About + fact rows | LANDING-005, LANDING-006 | default |
| Skills | 6 skill cards | LANDING-007, LANDING-008 | default (3/2/1-column reflow) |
| Projects | 3 project cards | LANDING-009 | default |
| Project modal | Modal overlay | LANDING-010 | closed, open, error-free |
| Contact | Contact card + form | LANDING-011, LANDING-012, LANDING-013 | default, field errors, success |
| Footer | Footer + back-to-top | LANDING-014 | default |
| Toast | Placeholder-link notice | LANDING-011 | hidden, showing, auto-hide |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Page is fully rendered and interactive within 3s on a typical 4G connection; all assets are static (no runtime data fetch) |
| Accessibility | Keyboard reachable throughout; visible focus ring; labelled form fields; focus trap in modal; skip link; `role="status"` toast; body text contrast ≥ 4.5:1 and interactive-element contrast ≥ 3:1 (see design-system contrast audit) |
| Responsive | Works from 320px up; no horizontal page scroll at any breakpoint |
| Motion | All animation respects `prefers-reduced-motion: reduce` (durations collapse, scroll becomes instant) |
| Localisation | Page copy is in English (placeholder); the site name "Giới thiệu bản thân" appears verbatim as the owner's brand |
| Privacy | The form stores or transmits nothing; it only composes a `mailto:` email in the visitor's own client |

## 7. Dependencies and assumptions

- **Depends on:** the approved design (`design/index.html`) and its extracted
  `design/design-system.md`; no other module, no backend, no database.
- **Assumption:** placeholder copy and the placeholder email
  `hello@minhan.dev` are acceptable and will be replaced later by the owner.
  If the owner supplies real GitHub/LinkedIn URLs, the placeholder toast
  behaviour (LANDING-011) is replaced by real navigation links.

| Open question | Proposed default | Who decides |
|---|---|---|
| Real GitHub/LinkedIn profile URLs | Keep placeholder toast behaviour until the owner provides URLs | Stakeholder |
| Real email address | Keep `hello@minhan.dev` placeholder | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Hero section | LANDING-001, LANDING-002, LANDING-003, LANDING-004 | `test-cases/hero.md` |
| About section | LANDING-005, LANDING-006 | `test-cases/about.md` |
| Skills section | LANDING-007, LANDING-008 | `test-cases/skills.md` |
| Projects section | LANDING-009, LANDING-010 | `test-cases/projects.md` |
| Contact section | LANDING-011, LANDING-012, LANDING-013, LANDING-014 | `test-cases/contact.md` |
