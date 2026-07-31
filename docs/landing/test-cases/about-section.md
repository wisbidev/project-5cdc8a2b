# Test Cases — About Section

**Module:** `landing`  
**Function:** About section  
**Requirement:** LANDING-002  
**Risk level:** Low — static display content, no user input, no writes  
**Rationale for risk level:** The section renders fixed placeholder content; the only dynamic behaviour is an optional scroll-reveal that degrades gracefully under `prefers-reduced-motion`.

---

## Automated test cases

### AC-1 — Section content is present and readable

**Scenario**: About section renders label, heading, lead paragraph, and body text  
**Given**: The page has been navigated and the About section is in the viewport  
**When**: A user reads the About section  
**Then**: The section displays a visible label, a visible heading, a visible lead paragraph, and at least one body paragraph

> Traces to: LANDING-002 Behaviour #1

---

### AC-2 — Quick-facts list shows four facts with icons and labels

**Scenario**: Quick-facts list displays all four facts  
**Given**: The About section is visible  
**When**: A user looks at the quick-facts list  
**Then**: Four facts are shown, each labelled "Location", "Focus", "Currently", and "Languages", and each accompanied by an icon

> Traces to: LANDING-002 Behaviour #3

---

### AC-3 — Specific fact values are rendered

**Scenario**: Location and Languages facts contain the correct placeholder values  
**Given**: The About section is visible  
**When**: A user reads the Location and Languages facts  
**Then**: The Location fact reads "Ho Chi Minh City, Vietnam" and the Languages fact reads "Vietnamese, English"

> Traces to: LANDING-002 Behaviour #4

---

## Manual verification cases

The following checks require a human to inspect the rendered result; no automated tool can assert them.

| # | Scenario | Pass criterion |
|---|---|---|
| M-1 | Page is loaded on a desktop viewport (≥ 860 px) | The About section text is fully legible; no clipping or overflow |
| M-2 | Page is loaded on a mobile viewport (320 px wide) | The About section renders in a single column; text and facts remain readable without horizontal scrolling |
| M-3 | `prefers-reduced-motion: reduce` is set in the OS | The About section content renders immediately without any fade or slide animation |

---

## Coverage summary

| Requirement | Covered by |
|---|---|
| LANDING-002 AC-1 (label, heading, paragraphs) | AC-1 |
| LANDING-002 AC-2 (four facts with icons and labels) | AC-2 |
| LANDING-002 AC-3 (Location and Languages values) | AC-3 |
| Reduced-motion graceful degradation | M-3 |
| Readable on desktop | M-1 |
| Readable on mobile | M-2 |
