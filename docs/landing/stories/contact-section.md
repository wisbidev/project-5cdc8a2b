# Story — Contact section

> Implements plan item **Contact section** (P1) and requirement **LANDING-005**
> in `docs/landing/SRS.md`. Story docs live at `docs/landing/stories/contact-section.md`.

## User story

*As a* Visitor, *I want to* contact the owner through a validated form that
composes a pre-filled email and gives clear feedback, *so that* reaching out is
one simple step and I know the email was handed to my mail client.

## In scope

- The `#contact` section per the approved design: owner email address, social
  links, and a contact form with name, email, and message fields.
- Client-side validation on submit: all three fields required, email must be a
  valid format; inline error under the offending field; focus moves to the
  first invalid field.
- Valid submit composes a `mailto:` link to the owner email with the visitor's
  name, email, and message, and opens the visitor's mail client
  (`window.location.href = mailto:...`).
- Success feedback: submit button label changes to "Sent!", a green success
  panel appears with a direct `mailto` fallback link, and double-submit is
  prevented.
- Placeholder social links (GitHub, LinkedIn) show a toast on activation; no
  navigation.
- Accessibility: labelled inputs, `required` + `aria-required`, error messages
  associated with their field, visible focus, error-tinted focus ring,
  `prefers-reduced-motion` respected.

## Out of scope

- Any backend, database, or email-sending service — the project shape is
  `static`; the form uses `mailto:` only.
- Storing or transmitting the submitted data anywhere (privacy: the page never
  receives the visitor's input; it only hands a composed link to the browser).
- Real owner email and real social URLs — placeholder content ships; the owner
  replaces them in `Contact.tsx` before launch.
- Server-side validation or spam protection (CAPTCHA, honeypot) — no server
  exists in this shape.
- Newsletter signup, multi-step forms, or any field beyond name / email /
  message.
- Persisting the "Sent!" state across reloads — it is in-memory component
  state for the session.

## UI scope

- Touches the `#contact` section of the single-page design
  (`design/index.html`): contact card (2-col layout at ≥ 1120px, 1-col below),
  `--radius-2xl` card, `.eyebrow` section label, heading per `--text-2xl`.
- States the section must render (per `docs/landing/SRS.md` §5): **default**,
  **field invalid**, **success**.
- Uses the design-system `Form (Contact)` component (§2.5): `.field.invalid`
  error styling, `.form-success` panel, button label swap to "Sent!".
- Uses the `Toast` component (§2.7) for placeholder social links — same toast
  behaviour as the Projects section story.
- The component is `components/Contact.tsx` and must begin with the literal
  string `"use client"` (form state, validation, `mailto:` navigation).

## Acceptance criteria

Derived one-to-one from LANDING-005; each maps onto a test case in
`docs/landing/test-cases/contact-section.md`. Given/When/Then, one observable
behaviour per criterion.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The page is scrolled to the Contact section | I look at the section | The owner email address, social links, and a form with name, email, and message fields are visible |
| AC-2 | The form is empty | I submit it | Inline errors appear under all three fields and focus moves to the first invalid field (name) |
| AC-3 | I enter an invalid email address (e.g. "not-an-email") | I submit the form | An inline error appears on the email field and no mail client opens |
| AC-4 | I fill all fields with a valid email address | I submit the form | The mail client opens with a pre-filled email to the owner containing my name, email, and message |
| AC-5 | A valid submission was made | I look at the form | The button reads "Sent!" and a green success panel with a direct `mailto` fallback link is shown |
| AC-6 | The Contact section is visible | I activate a social link (GitHub or LinkedIn) | A toast appears and no navigation happens |

**Failure and boundary behaviour** (defined outcomes for the non-happy path,
feeding directly into test cases):

| Case | Condition | Expected behaviour |
|---|---|---|
| Invalid input | Name field empty on submit | Inline error "Please tell me your name." under the name field |
| Invalid input | Email field empty on submit | Inline error "Please enter a valid email address." under the email field |
| Invalid input | Message field empty on submit | Inline error "Please write a short message." under the message field |
| Invalid + focus | An invalid field receives focus | Error message stays visible; error-tinted focus ring (`rgba(220,38,38,.14)`) applies |
| Upstream failure | No mail client is installed on the visitor's device | Nothing navigates, but the success panel's direct `mailto` fallback link remains visible so the visitor can compose or copy manually |
| Double submit | Button already triggered a valid submit | The form does not submit a second time (label already "Sent!", success panel shown) |
| Boundary | Viewport 320px | Contact card and form stay fully visible; no horizontal page scroll |
| Reduced motion | `prefers-reduced-motion: reduce` set | No motion on error/success transitions; content renders instantly |

## Dependencies

- Approved design (`design/index.html`) and design system
  (`design/design-system.md`) — form, toast, and card tokens come from here.
- Frontend scaffold per `docs/architecture/overview.md` — Next.js 15, Tailwind
  v3, tokens in `app/globals.css`; story must not edit `globals.css`.
- `Toast` component (`components/Toast.tsx`, Client) — the Projects section
  story introduces it; if it has not landed, this story creates it and both
  sections reuse it.
- Placeholder content assumption from the SRS: owner email and social URLs are
  placeholders to be replaced by the owner before launch.
