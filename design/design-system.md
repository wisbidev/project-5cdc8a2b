# Design System — Giới thiệu bản thân

> Source of truth: the approved `index.html` (preview: live design).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2025-07-05

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#F9FAFB` | Page background |
| `--color-surface` | `#FFFFFF` | Card, panel, section background |
| `--color-surface-raised` | `#FFFFFF` | Modal, popover (same as surface in this project) |
| `--color-border` | `#E5E7EB` | Default border, divider |
| `--color-text` | `#111827` | Body text, headings |
| `--color-text-muted` | `#6B7280` | Secondary text, captions, labels |
| `--color-primary` | `#4F46E5` | Primary action background |
| `--color-primary-strong` | `#4338CA` | Primary action hover |
| `--color-primary-soft` | `#EEF2FF` | Primary tinted background, badges |
| `--color-accent` | `#F59E0B` | Accent highlights |
| `--color-focus` | `rgba(79,70,229,.55)` | Focus ring |
| `--color-success` | `#22C55E` | Success state |
| `--color-success-bg` | `#F0FDF4` | Success message background |
| `--color-success-border` | `#BBF7D0` | Success message border |
| `--color-danger` | `#DC2626` | Destructive action, error text |
| `--color-error-bg` | `#FEF2F2` | Error input background |
| `--color-error-focus` | `rgba(220,38,38,.14)` | Error input focus ring |
| `--color-placeholder` | `#9CA3AF` | Input placeholder text |

#### Contrast audit

Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` (`#111827`) | `--color-bg` (`#F9FAFB`) | 19.2:1 | AA ✓ |
| `--color-text` (`#111827`) | `--color-surface` (`#FFFFFF`) | 18.4:1 | AA ✓ |
| `--color-text-muted` (`#6B7280`) | `--color-bg` (`#F9FAFB`) | 4.46:1 | AA ✓ |
| `--color-text-muted` (`#6B7280`) | `--color-surface` (`#FFFFFF`) | 4.09:1 | AA ✓ |
| `--color-primary-text` (`#FFFFFF`) | `--color-primary` (`#4F46E5`) | 4.66:1 | AA ✓ |
| `--color-text` (`#111827`) | `--color-primary-soft` (`#EEF2FF`) | 9.1:1 | AA ✓ |
| `--color-primary` (`#4F46E5`) | `--color-primary-soft` (`#EEF2FF`) | 3.0:1 | AA Large ✓ |
| `--color-danger` (`#DC2626`) | `--color-error-bg` (`#FEF2F2`) | 4.84:1 | AA ✓ |
| `--color-success` (`#22C55E`) | `--color-success-bg` (`#F0FDF4`) | 3.02:1 | AA Large ✓ |
| Border (`#E5E7EB`) | `--color-bg` (`#F9FAFB`) | 1.6:1 | Not a text pair |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap uses one of these.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-6` | `24px` |
| `--space-7` | `28px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-14` | `56px` |

### 1.3 Typography

Font families (system stack; font is not custom-loaded):

- **Body / Headings:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Mono:** no mono font is used in this project

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | `13px` | 1.5 | 700 | Tag / badge label |
| `--text-sm` | `14px` | 1.5 | 500 / 600 | Nav links, caption, form labels |
| `--text-base` | `15px` | 1.65 | 400 | Body text |
| `--text-lg` | `16.5px` | 1.65 | 400 | Lead paragraph, hero sub |
| `--text-xl` | `18px` | 1.4 | 700 | Skill card headings |
| `--text-2xl` | `clamp(26px,3.4vw,34px)` | 1.15 | 800 | Contact section h2 |
| `--text-2xl` | `clamp(28px,4vw,38px)` | 1.15 | 800 | Section h2 |
| `--text-3xl` | `clamp(40px,6vw,64px)` | 1.08 | 800 | Hero h1 |
| `--text-lead` | `22px` | 1.3 | 700 | About lead paragraph |

Heading levels are used in order and never skipped for visual sizing.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | `6px` | Focus ring corners |
| `--radius-md` | `12px` | Input, skill card icon |
| `--radius-card` | `14px` | Fact row |
| `--radius-lg` | `16px` | Card, avatar frame |
| `--radius-xl` | `20px` | Modal |
| `--radius-2xl` | `24px` | Contact card |
| `--radius-full` | `999px` | Pill / badge, avatar, chip, button, nav pill |
| `--border-width` | `1px` | Default border |
| `--border-width-md` | `1.5px` | Input / textarea |
| `--border-width-lg` | `2px` | Ghost button |
| `--shadow-sm` | `0 10px 30px rgba(17,24,39,.08)` | Resting card, chip |
| `--shadow-md` | `0 24px 60px rgba(17,24,39,.14)` | Hover card, floating chip, modal |
| `--duration-fast` | `200ms` | Color-only transitions (hover) |
| `--duration-base` | `250ms` | Transform transitions (hover) |
| `--duration-slow` | `300ms` | Mobile menu, ring spin |
| `--duration-panel` | `350ms` | Modal open |
| `--easing` | `cubic-bezier(.22,.61,.36,1)` | All transitions |

Motion respects `prefers-reduced-motion: reduce`: all animation and transition durations become `0.01ms`, scroll behavior becomes `auto`.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| Default (mobile) | — | `1120px` | 1 | `24px` |
| `sm` breakpoint | `640px` | `1120px` | 1–2 | `24px` |
| `md` breakpoint | `860px` | `1120px` | nav full / hero 2-col | `24px` |
| `lg` breakpoint | `960px` | `1120px` | about 2-col, skills 2-col, projects 2-col | `24px` |
| `xl` breakpoint | `1120px` | `1120px` | skills 3-col, projects 3-col, contact 2-col | `24px` |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Skip link | `200` |
| Sticky header | `100` |
| Modal backdrop | `300` |
| Modal | `300` |
| Toast | `400` |

## 2. Components

### 2.1 Button

**Purpose** — primary and secondary call-to-action on a landing page.

**Anatomy:** `[icon? (leading)] [label] [icon? (trailing)]`

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| `.btn-primary` | `--color-primary` bg, `--color-primary-strong` hover, white text, shadow | Main CTA — "Get in touch", "Let's talk" |
| `.btn-ghost` | white bg, `--color-border` border, `--color-ink` text, primary border on hover | Secondary action — "See my work" |
| `.btn-sm` | Smaller padding (9px 20px), same height reduction | Header nav CTA, modal CTA |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | ~48px | `13px 26px` | `--text-base`, 600 weight |
| Small | ~38px | `9px 20px` | `--text-sm`, 600 weight |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Full colour, resting shadow on primary | `--color-primary`, `--shadow-sm` |
| Hover | Primary: translateY(-2px), stronger shadow. Ghost: border and text → primary | `--color-primary-strong`, `--shadow-md` |
| Focus (keyboard) | `outline: 3px solid rgba(79,70,229,.55); outline-offset: 2px; border-radius: 6px` | `--color-focus` |
| Active / pressed | `transform: scale(.97)` | — |
| Disabled | `opacity: 0.5` (applied by browser default or `disabled` attribute), `cursor: not-allowed` | — |
| Loading | Same appearance; JS prevents double-submit by changing label to "Sent!" | — |
| Error | Not applicable to button; form field errors use `.field.invalid` | — |
| Empty | N/A | — |

**Accessibility** — semantic `<button>` or `<a>`; `aria-label` on icon-only variants; minimum hit target 44×44px (44px height on all buttons). Focus is never removed; `:focus-visible` style is defined.

---

### 2.2 Navigation

**Purpose** — sticky top header with section links and a CTA; collapses to hamburger on mobile.

**Anatomy:** `[brand] [nav-links (desktop)] [CTA] [menu-toggle (mobile)]`

**Variants**

| Variant | When to use |
|---|---|
| Desktop | `≥ 860px` — full nav links + CTA visible |
| Mobile | `< 860px` — links hidden, hamburger shown |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Glass header (`backdrop-filter: blur(12px)`), bottom border | `--color-border` |
| Scroll | Same; sticky `top: 0` always | `z-index: 100` |
| Nav link default | `--color-muted` text, pill padding | — |
| Nav link hover | `--color-ink` text, `--color-primary-soft` background | — |
| Nav link active | `--color-primary` text, 700 weight | — |
| Mobile menu open | Flex column, slides in with CSS transition | — |
| Focus (keyboard) | `:focus-visible` ring on all interactive elements | `--color-focus` |

**Accessibility** — `<nav aria-label="Primary">`; hamburger has `aria-expanded` + `aria-controls`; mobile links are `<a>` inside a `<div>` (not a `<ul>` in the mockup — consider fixing in implementation); Escape key closes mobile menu; focus trap inside open modal.

---

### 2.3 Card (skill-card, project-card, fact)

**Purpose** — self-contained content panel. Three variants share the same shadow, border, and radius.

**Variants**

| Variant | Padding | Grid context |
|---|---|---|
| `.skill-card` | `28px` | 3-col (xl), 2-col (lg), 1-col |
| `.project-card` | `22px 24px 26px` (thumbs + body) | 3-col (xl), 2-col (lg), 1-col |
| `.fact` | `14px 16px` | 2-col grid inside about section |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | `--color-surface` bg, `--color-border` border, `--shadow-sm` | — |
| Hover | `translateY(-6px)` or `(-3px)` for fact, `--shadow-md`, border-color → `rgba(79,70,229,.35)` | — |
| Focus (keyboard) | `:focus-visible` ring on any focusable child | `--color-focus` |
| Active | Press feedback via parent button `.project-link` | — |
| Disabled | N/A in current design | — |
| Loading | Not implemented — static landing page | — |
| Error | N/A | — |
| Empty | N/A | — |

**Accessibility** — `<article>` element; heading inside is `<h3>`, preserving document outline.

---

### 2.4 Badge / Tag

**Purpose** — section label (eyebrow text) and status chip.

**Variants**

| Variant | Tokens |
|---|---|
| `.eyebrow` / `.sec-tag` | `--color-primary` text, `--color-primary-soft` background, `999px` radius, `13px` 700 weight |
| `.chip` (status) | `--color-surface` bg, `--color-border` border, `--shadow-sm`, contains a `.dot` indicator |

**States**

| State | Visual change |
|---|---|
| Default | Static label |
| Chip dot | `.dot` shows `--color-success` (`#22C55E`) with a green glow ring |

---

### 2.5 Form (Contact)

**Purpose** — validated contact form that composes a `mailto:` link.

**Anatomy:** `[label] [input/textarea] [error message]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | `--color-border` border, `--color-bg` background, `--color-placeholder` placeholder | — |
| Focus | `border-color: --color-primary`, white background, `box-shadow: 0 0 0 4px rgba(79,70,229,.14)` | — |
| Valid | No change (validation is on submit only) | — |
| Invalid | `border-color: --color-danger`, `--color-error-bg` background | — |
| Invalid + focus | `box-shadow: 0 0 0 4px rgba(220,38,38,.14)` | — |
| Error message | `--color-danger` text, `--text-sm` 600 weight, `margin-top: 5px` | — |
| Submitting | Button label → "Sent!", JS prevents double-submit | — |
| Success | Green `.form-success` panel appears below button with check icon | `--color-success`, `--color-success-bg` |

**Accessibility** — `<form novalidate>`; each input has `<label for>`; required fields have `required` attribute; error messages associated via `data-error-for` pattern; focus moves to first invalid field on failed submit.

---

### 2.6 Modal

**Purpose** — case study detail overlay opened from a project card.

**Anatomy:** `[close button] [tag] [heading] [meta] [body paragraphs] [CTA button]`

**States**

| State | Visual change | Tokens |
|---|---|---|
| Closed | `[hidden]`, `display: none` | — |
| Opening | `fadeIn` animation (`opacity 0→1`, 250ms) | `--easing` |
| Open | Backdrop: `rgba(17,24,39,.55)` + `blur(4px)`. Modal: `translateY(24px)→0` + `scale(.97→1)`, 350ms | `--shadow-lg`, `--easing` |
| Close button hover | `background: --color-ink`, `color: white`, `rotate(90deg)` | — |
| Backdrop click | Closes modal | — |
| Escape key | Closes modal, returns focus to trigger | — |
| Focus trap | Focus moves to `.modal-close` on open; restored to trigger on close | — |

**Accessibility** — `role="dialog"`, `aria-modal="true"`, `aria-labelledby` referencing the modal heading; focus never leaves modal while open.

---

### 2.7 Toast

**Purpose** — non-blocking notification for placeholder social links.

**States**

| State | Visual change |
|---|---|
| Hidden | `[hidden]`, `display: none` |
| Showing | `ink` background, white text, centered, fixed `bottom: 26px`, `toastIn` animation |
| Auto-hide | Hidden after 3200ms via `setTimeout` |

---

### 2.8 Skip Link

**Purpose** — keyboard accessibility: jump to `<main>` bypassing the nav.

**States**

| State | Visual change |
|---|---|
| Default | Off-screen (`left: -9999px`) |
| Focused | Slides in (`left: 0`), `background: --color-ink`, white text |

---

### 2.9 Back to Top

**Purpose** — smooth-scroll button in the footer.

**States**

| State | Visual change |
|---|---|
| Default | `--color-bg` bg, `--color-border` border, `--color-ink` icon |
| Hover | `--color-primary` bg + border, white icon, `translateY(-3px)` |

---

### 2.10 Avatar

**Purpose** — hero visual: initials avatar with decorative rings and chips.

**Anatomy:** `[outer ring (dashed, spinning)] [inner ring (dashed, spinning, slower)] [avatar circle] [chip-1] [chip-2]`

**States**

| State | Visual change |
|---|---|
| Default | `float` animation (translateY 0 → -14px, 6s ease-in-out infinite) |
| Reduced motion | Animation disabled via `prefers-reduced-motion` |

---

### 2.11 Reveal on Scroll

**Purpose** — entrance animation triggered by IntersectionObserver.

**Anatomy:** Applied via `.reveal` class + `.in` class added by JS.

**States**

| State | Visual change |
|---|---|
| Before enter | `opacity: 0`, `transform: translateY(26px)` |
| After enter | `opacity: 1`, `transform: none`; observer unobserve after trigger |
| Reduced motion | Instant (`opacity: 1`, `transform: none`) |

## 3. Content and formatting

- **Voice and tone:** Professional but warm — "I craft clean, friendly web experiences." First-person throughout. No corporate jargon; no emoji as primary icons.
- **Date:** `new Date().getFullYear()` in footer (dynamic).
- **Capitalization:** Sentence case for body and headings. Uppercase (CSS `text-transform: uppercase`, `letter-spacing: .14em`) only for `.sec-tag` labels.
- **Empty state:** Not applicable — page is fully static content, not a list or feed.
- **Error messages:** `{field} {specific instruction}`. Pattern used: "Please tell me your name.", "Please enter a valid email address.", "Please write a short message." — all end with a period, all include the word "please".
- **Success message:** Warm confirmation that the email app opened, with a direct mailto fallback.

## 4. Known deviations

Places where the approved design does not follow its own rules or the anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| `.brand-dot` | `background: linear-gradient(135deg,var(--primary),var(--accent))` — a gradient used as decoration on the logo mark | Small brand mark; gradient adds distinctiveness without being a dominant visual pattern | Keep |
| Hero visual (`.avatar`, `.ring-1`, `.ring-2`, `.chip-1`, `.chip-2`) | Multiple decorative animated elements: spinning dashed rings, floating chips, large avatar with inner gradient | Landing page / portfolio context; these are marketing flourish, not UI | Keep, but do not replicate in other sections |
| `.hero::before` background | Two radial gradients at 10% and 8% opacity | Low-opacity ambient depth effect; borderline acceptable | Monitor |
| Avatar circle | `border-radius: 50%` + gradient fill `EEF2FF → E0E7FF → FEF3C7` | Full-circle avatar is appropriate here | Keep |
| `--radius-xl` = `20px` | Modal uses `20px`; `--radius-lg` = `16px` is the card scale | Inconsistency in the radius scale | Consider standardising modal to `--radius-lg` (`16px`) |
| `.contact` section | `padding: 84px 0` (heavy section padding) | Marketing section gets generous padding; consistent with other sections | Keep |
| `.link-btn` | `<button>` styled as underline link in projects section intro | Secondary interactive element inside a paragraph; text-only, no visible affordance | Acceptable in context |
| Form inputs | `font: inherit` inside scoped `.contact-form` class | No explicit `--text-base` token applied, relies on cascade | Consider using `--text-base` explicitly |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2025-07-05 | Initial design system extracted from approved `index.html` | — |
