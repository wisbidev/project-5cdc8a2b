# Test Cases — Contact Section

**Module:** `landing`  
**Function:** Contact section  
**Requirement:** LANDING-005  
**Risk level:** Medium — a form that composes email on submit and triggers client-side state changes; no server writes (shape: static), but submission outcome and validation feedback are user-observable behaviour  
**Rationale for risk level:** The section is the page's primary conversion path (its CTA target). It performs user input handling and changes UI state after a valid submit, which warrants behavioural coverage beyond pure display; everything still runs client-side with no backend.

---

## Automated test cases

### AC-1 — Contact section renders email, social links, and the form

**Scenario**: Contact section shows the owner's email, social links, and the contact form  
**Given**: The page has been navigated and the Contact section (`#contact`) is in the viewport  
**When**: A user looks at the section  
**Then**: The owner's email address, the social links (GitHub, LinkedIn), and a form with fields labelled "Name", "Email", and "Message" are all visible

> Traces to: LANDING-005 Behaviour #1

---

### AC-2 — Links are clickable and open mail / show placeholder toast

**Scenario**: Contact links respond to activation  
**Given**: The Contact section is visible  
**When**: A user activates the email link  
**Then**: The mail client opens with a `mailto:` addressed to the owner's email

**Scenario**: A social link is activated  
**Given**: The Contact section is visible  
**When**: A user activates the GitHub or LinkedIn link  
**Then**: A toast appears briefly (auto-hides ~3200ms) and the page does not navigate

> Traces to: LANDING-005 Behaviour #1, Behaviour #6; Failure/placeholder "Social link activated → toast appears; no navigation"

---

### AC-3 — Empty form submit shows inline errors and moves focus

**Scenario**: Submitting the empty form flags all three fields  
**Given**: The Contact form is visible and all three fields are empty  
**When**: A user submits the form  
**Then**: Inline error messages appear under all three fields ("Please tell me your name.", "Please enter a valid email address.", "Please write a short message.") and focus moves to the first invalid field (Name); no email is composed

> Traces to: LANDING-005 Behaviour #3; AC-2

---

### AC-4 — Invalid email submit is rejected inline

**Scenario**: A malformed email address is rejected  
**Given**: The Contact form is visible, Name and Message are filled, and the Email field contains a malformed address (e.g. "not-an-email")  
**When**: A user submits the form  
**Then**: An inline error "Please enter a valid email address." appears on the Email field and no email is composed

> Traces to: LANDING-005 Behaviour #3; AC-3

---

### AC-5 — Valid submit composes a pre-filled mailto email

**Scenario**: A valid submission opens the mail client with a pre-filled email  
**Given**: The Contact form is visible, all fields are filled, and the Email field contains a valid address (e.g. "visitor@example.com")  
**When**: A user submits the form  
**Then**: The mail client opens a pre-filled email addressed to the owner's email containing the visitor's name, email, and message

> Traces to: LANDING-005 Behaviour #4; AC-4

---

### AC-6 — Success state is shown after a valid submit

**Scenario**: The form shows its success state after a valid submission  
**Given**: A valid submission has just been made  
**When**: A user looks at the form  
**Then**: The submit button label reads "Sent!" and a green success panel appears containing a direct `mailto:` fallback link

> Traces to: LANDING-005 Behaviour #5; AC-5; Failure/upstream "No mail client installed → success panel's direct mailto fallback link remains available"

---

## Manual verification cases

The following checks require a human to inspect the rendered result; no automated tool can assert them.

| # | Scenario | Pass criterion |
|---|---|---|
| M-1 | Page is loaded on a desktop viewport (≥ 1120 px, contact is 2-col per design system §1.5) | The Contact section renders email, social links, and the form without clipping or overflow; all controls are reachable |
| M-2 | Page is loaded on a mobile viewport (320 px wide) | The Contact section renders in a single column; fields, links, and the submit button remain fully visible and tappable without horizontal scrolling |
| M-3 | A valid submission is made on a device without a configured mail client | The green success panel with the direct `mailto:` fallback link is still shown, so the visitor can copy or compose the email manually |

---

## Coverage summary

| Requirement | Covered by |
|---|---|
| LANDING-005 AC-1 (email, social links, form visible) | AC-1 |
| LANDING-005 AC-2 (empty form → inline errors + focus to first invalid) | AC-3 |
| LANDING-005 AC-3 (invalid email → inline error, nothing sent) | AC-4 |
| LANDING-005 AC-4 (valid submit → pre-filled mailto opens mail client) | AC-5 |
| LANDING-005 AC-5 (button "Sent!" + green success panel with mailto fallback) | AC-6 |
| LANDING-005 Behaviour #6 (social links show toast, no navigation) | AC-2 |
| Links clickable (email → mailto, GitHub/LinkedIn → toast) | AC-2 |
| No mail client installed fallback | AC-6, M-3 |
| Readable/usable on desktop and mobile | M-1, M-2 |
