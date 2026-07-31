# Design System — Giới thiệu bản thân

> Source of truth: the approved `index.html` (preview: http://localhost:8080/design/5cdc8a2b-3d38-49de-8c34-de98338ebff0).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2026-05-27

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#F9FAFB` | Page background |
| `--color-surface` | `#FFFFFF` | Card / panel background |
| `--color-surface-raised` | `#FFFFFF` | Modal, toast (same white surface) |
| `--color-border` | `#E5E7EB` | Default border, divider |
| `--color-text` | `#111827` | Body text (ink) |
| `--color-text-muted` | `#6B7280` | Secondary text, captions |
| `--color-text-placeholder` | `#9CA3AF` | Form input placeholders |
| `--color-primary` | `#4F46E5` | Primary action background |
| `--color-primary-strong` | `#4338CA` | Primary hover |
| `--color-primary-soft` | `#EEF2FF` | Primary tint background (eyebrow, icon chips) |
| `--color-accent` | `#F59E0B` | Warm accent (brand dot gradient, decorative) |
| `--color-primary-text` | `#FFFFFF` | Text on primary |
| `--color-on-ink` | `#FFFFFF` | Text on dark (toast, skip link, social hover) |
| `--color-success` | `#22C55E` | Success icon, status dot |
| `--color-success-soft` | `#F0FDF4` | Success banner background |
| `--color-success-border` | `#BBF7D0` | Success banner border |
| `--color-danger` | `#DC2626` | Error text, invalid border |
| `--color-danger-soft` | `#FEF2F2` | Invalid field background |
| `--color-focus` | `rgba(79,70,229,.55)` | Focus ring (primary at 55%) |

Decorative-only colors (never carry text): `#E0E7FF`/`#FEF3C7`/`#C7D2FE` (avatar + illustration fills), `#7C3AED`, `#0EA5E9`, `#14B8A6`, `#F43F5E`, `#CBD5E1`, `#E2E8F0` (project thumbnail gradients), `#22C55E` status dot.

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` `#111827` | `--color-bg` `#F9FAFB` | 16.6:1 | AA |
| `--color-text` `#111827` | `--color-surface` `#FFFFFF` | 17.4:1 | AA |
| `--color-text-muted` `#6B7280` | `--color-surface` `#FFFFFF` | 4.8:1 | AA |
| `--color-text-muted` `#6B7280` | `--color-bg` `#F9FAFB` | 4.6:1 | AA |
| `--color-primary-text` `#FFFFFF` | `--color-primary` `#4F46E5` | 6.3:1 | AA |
| `--color-primary-text` `#FFFFFF` | `--color-primary-strong` `#4338CA` | 7.9:1 | AA |
| `--color-on-ink` `#FFFFFF` | `--color-text` `#111827` | 16.6:1 | AA |
| `--color-primary` `#4F46E5` | `--color-surface` `#FFFFFF` | 6.3:1 | AA |
| `--color-primary` `#4F46E5` | `--color-primary-soft` `#EEF2FF` | 4.3:1 | FAIL (see §4) |
| `--color-danger` `#DC2626` | `--color-surface` `#FFFFFF` | 4.8:1 | AA |
| `--color-danger` `#DC2626` | `--color-danger-soft` `#FEF2F2` | 4.4:1 | FAIL (see §4) |
| `--color-text-placeholder` `#9CA3AF` | `--color-bg` `#F9FAFB` | 2.4:1 | FAIL (see §4) |
| `--color-success` `#22C55E` | `--color-surface` `#FFFFFF` (icon) | 2.3:1 | FAIL, decorative (see §4) |

### 1.2 Spacing

Base unit: `4px`. Every margin, padding, and gap in the product uses one of these.

| Token | Value |
|---|---|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-7` | `28px` |
| `--space-8` | `32px` |
| `--space-10` | `40px` |
| `--space-12` | `48px` |
| `--space-14` | `56px` |
| `--space-16` | `64px` |
| `--space-18` | `72px` |
| `--space-21` | `84px` |

Section vertical rhythm: hero `72px 0 40px` (48/32 on mobile), sections `84px` (64 on ≤640px). Container padding `24px`. Values off the 4px scale (`13px`, `26px`) are recorded in §4.

### 1.3 Typography

Font families (system stack, no webfont loaded — the mockup relies on the OS stack for both body and headings):

- Body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Headings: same as body (weight and size carry the hierarchy)
- Mono: none used

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | 13px | 1.4 | 400–800 | sec-tag, field-error, form-note |
| `--text-sm` | 14px | 1.5 | 400–700 | chips, stats caption, labels, footer, social-btn, modal-role |
| `--text-base` | 15–16.5px | 1.65 | 400 | body copy, buttons, inputs, modal paragraphs |
| `--text-lg` | 18–19px | 1.5 | 700 | h3 (skill, project), tagline |
| `--text-xl` | 22px | 1.5 | 700 | about-lead |
| `--text-2xl` | clamp(28px,4vw,38px) | 1.2 | 800 | h2 (section headings) |
| `--text-3xl` | clamp(40px,6vw,64px) | 1.08 | 800 | h1 (hero) |

Special: hero tagline `clamp(18px,2.4vw,24px)`/600, contact h2 `clamp(26px,3.4vw,34px)`/800, stat number `30px`/800, brand `17px`/800, contact-line `17px`/700. Letter-spacing: headings `-0.01em` to `-0.03em` (larger sizes get tighter tracking). Heading levels run h1 → h2 → h3 without skipping; the modal uses h3 after an h2 section heading.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-xs` | 6px | Focus ring radius, skip-link corner |
| `--radius-sm` | 10–12px | Inputs, icon containers (fact-icon, contact-icon), menu-toggle, mobile menu items |
| `--radius-md` | 14–16px | Cards (skill, project, fact), hero-stats, form-success, skill-icon, invalid fields |
| `--radius-lg` | 20–24px | Modal, contact-card, about-visual, illustration rect |
| `--radius-full` | 999px | Buttons, pills (eyebrow, sec-tag, chips), avatar, toast, round icon buttons (modal-close, back-top, social-btn) |
| `--border-width` | 1px (`1.5px` on form inputs, `2px` on buttons) | Default border, inputs, buttons |
| `--shadow-sm` | `0 10px 30px rgba(17,24,39,.08)` | Resting cards (skill, project, hero-stats, chips) |
| `--shadow-lg` | `0 24px 60px rgba(17,24,39,.14)` | Modal, contact-card, avatar, toast |
| `--shadow-btn` | `0 8px 20px rgba(79,70,229,.35)` | Primary button resting glow |
| `--shadow-btn-hover` | `0 12px 26px rgba(79,70,229,.4)` | Primary button hover |
| `--duration-fast` | 0.2s | Color changes (links, borders, backgrounds) |
| `--duration-base` | 0.25–0.3s | Hover transforms, card lifts, button transitions |
| `--duration-slow` | 0.35–0.7s | Modal entrance, reveal-on-scroll, success pop |
| `--easing` | `cubic-bezier(.22,.61,.36,1)` | All transitions and entrance animations |

Ambient animations: hero avatar `float 6s` / chips `float 5s` (`translateY(-14px)` mid-point), decorative rings `spin 30s`/`44s`. Motion respects `prefers-reduced-motion: reduce`: durations collapse to `.01ms`, scroll-behavior becomes `auto` (already in the mockup).

### 1.5 Layout and breakpoints

| Name | Max width | Container | Columns | Gutter |
|---|---|---|---|---|
| Base | — | `max-width:1120px`, padding `0 24px` | hero `1.15fr/.85fr`; about `.9fr/1.1fr`; contact `1fr/1.1fr`; skills/projects `repeat(3,1fr)`; stats `repeat(3,1fr)`; facts `1fr 1fr` | 20–56px |
| ≤960px | 960px | same | skills, projects `1fr 1fr`; about, contact single column | 36–40px |
| ≤860px | 860px | same | hero single column, centered; nav collapses to hamburger | 48px |
| ≤640px | 640px | `24px` (contact-card `22px`) | skills, projects, facts single column | 16px |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | 0 |
| Sticky header | 100 |
| Skip link | 200 |
| Modal backdrop | 300 |
| Toast | 400 |

The `.reveal` scroll animation is `opacity 0 → 1` + `translateY(26px) → 0` over `.7s`; it runs once per element via IntersectionObserver (threshold `.12`).

## 2. Components

One subsection per reusable component. Every component lists **all** states.

### 2.1 Button (`.btn`)

**Purpose** — Primary and secondary calls to action. Use for the hero CTAs, nav CTA, form submit, modal CTA. Not for in-text links (use `.link-btn`).

**Anatomy** — `[label] [trailing icon?]` (icon inherits `currentColor`, 16px, stroke 2.4).

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| `btn-primary` | bg `--color-primary`, text `--color-primary-text`, `--shadow-btn` | The one main action on a screen |
| `btn-ghost` | bg `--color-surface`, border `--color-border`, text `--color-text` | Secondary action alongside primary |

**Sizes**

| Size | Padding | Text token |
|---|---|---|
| Default | `13px 26px` | `--text-base` 15px/600 |
| `btn-sm` | `9px 20px` | 14px/600 |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Pill, filled or bordered | `--radius-full`, `--border-width` 2px |
| Hover | Primary: bg `--color-primary-strong`, `translateY(-2px)`, stronger shadow. Ghost: border+text `--color-primary`, `translateY(-2px)` | `--color-primary-strong`, `--shadow-btn-hover` |
| Focus (keyboard) | 3px ring `--color-focus`, 2px offset, radius 6px | `--color-focus` |
| Active / pressed | `transform: scale(.97)` | — |
| Disabled | Not defined in the approved mockup | see §4 |
| Loading | Not defined (form submit switches label to "Sent!" instead) | see §4 |
| Error | N/A — buttons carry no error state | |
| Empty | N/A — buttons always have a label | |

**Accessibility** — 2px border keeps the pill visible on all surfaces; focus ring is visible via `:focus-visible`. Hit target ≥ 44px for `btn-sm` only via added padding; add padding if used in a dense row (see §4).

### 2.2 Site header (`.site-header`, `.nav`, `.nav-links`, `.menu-toggle`, `.mobile-menu`)

**Purpose** — Sticky primary navigation; collapses to a hamburger menu below 860px.

**Anatomy** — `[brand (dot + wordmark)] [nav links…] [nav CTA?] [menu-toggle (mobile)]`; mobile menu drops below the bar.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Sticky, translucent `--color-bg` at 85% + `backdrop-filter: blur(12px)`, 1px bottom border; links `--color-text-muted` | `--color-bg`, `--color-border`, z 100 |
| Hover (link) | Link becomes `--color-text`, bg `--color-primary-soft` | `--color-primary-soft` |
| Active (link) | Current section link: `--color-primary`, weight 700 | `--color-primary` |
| Focus (keyboard) | Global `:focus-visible` ring | `--color-focus` |
| Menu open (≤860px) | Toggle lines morph to X (`.open`); mobile menu slides in with `--color-bg` bg; `aria-expanded` toggles with label "Open/Close menu" | `--easing` |

**Accessibility** — `aria-label="Primary"` on nav, `aria-controls` + `aria-expanded` on toggle, Escape closes the menu, link activation closes it.

### 2.3 Section tag pill (`.sec-tag`, `.eyebrow`)

**Purpose** — Small uppercase section label; the eyebrow variant also carries a leading emoji (see §4).

**Anatomy** — `[emoji?] label` inside a pill.

| Token | Value |
|---|---|
| Radius | `--radius-full` |
| Text | `--text-xs` 13px, weight 800, `letter-spacing .14em`, uppercase (`--text-sm` 14px/700 for eyebrow) |
| Colors | text `--color-primary`, bg `--color-primary-soft` |

**States** — static decoration; no interactive states. Focus N/A (not focusable). Contrast 4.3:1 — see §4.

### 2.4 Skill card (`.skill-card`)

**Purpose** — Grid tile for one skill (3 columns desktop, 2 at ≤960px, 1 at ≤640px).

**Anatomy** — `[skill-icon (52px tinted square)] [h3] [description]`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White surface, 1px border, radius-md, `--shadow-sm` resting is absent (shadow appears only on hover) | `--color-surface`, `--color-border` |
| Hover | `translateY(-6px)`, `--shadow-lg`, border tinted `rgba(79,70,229,.35)`; icon `scale(1.08) rotate(-4deg)` | `--shadow-lg` |
| Focus (keyboard) | Card itself is not focusable (no link); inner content only | `--color-focus` |
| Active / pressed | None defined | |
| Disabled | N/A | |
| Loading | N/A | |
| Error | N/A | |
| Empty | N/A — a skill card always has an icon, title and description | |

### 2.5 Project card (`.project-card` + `.project-link`)

**Purpose** — Case-study teaser opening a detail modal.

**Anatomy** — `[thumb 16/9 gradient (--t1→--t2 per project)] [h3] [description] [case-study link]`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White surface, 1px border, radius-md, `overflow:hidden` | `--color-surface`, `--color-border` |
| Hover (card) | `translateY(-6px)`, `--shadow-lg` | `--shadow-lg` |
| Hover (`.project-link`) | Color `--color-primary-strong`, arrow gap 7px → 11px | `--color-primary-strong`, `--easing` |
| Focus (keyboard) | Global `:focus-visible` ring on the focusable `.project-link` | `--color-focus` |
| Active / pressed | None defined | |
| Disabled / Loading / Error | N/A — static content | |
| Empty | N/A — placeholder content already present in mockup | |

**Accessibility** — the `.project-link` is a real `<button type="button" data-modal>`; the modal receives focus on open and returns it on close (see 2.8).

### 2.6 Fact card (`.fact`)

**Purpose** — Two-column quick-fact tiles in the About section (single column ≤640px).

**Anatomy** — `[fact-icon 40px tinted square] [strong label + muted value]`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | `--color-bg` background, 1px border, radius-sm | `--color-bg`, `--color-border` |
| Hover | `translateY(-3px)`, `--shadow-sm` | `--shadow-sm` |
| Focus / Active / Disabled / Loading / Error / Empty | N/A — static content | |

### 2.7 Floating chip (`.chip`) + status dot (`.dot`)

**Purpose** — Decorative floating badges over the hero avatar ("Open to work", "3+ years experience").

**Anatomy** — `[dot?] label`; pill with `--shadow-sm` and `float` animation at staggered delays.

**States** — static decoration; no interactive states. The green dot is `--color-success` with a 3px halo ring — decorative, not a status indicator for assistive tech (parent has `aria-hidden="true"`).

### 2.8 Modal (`.modal-backdrop`, `.modal`, `.modal-close`)

**Purpose** — Project case-study overlay. Backdrop is fixed, `z-index 300`, `rgba(17,24,39,.55)` + blur(4px); panel max-width 560px, max-height 86vh with scroll, radius-lg, `--shadow-lg`.

**Anatomy** — `[close button (top-right, 40px circle)] [sec-tag] [h3 title] [role line] [problem/actions/result paragraphs] [CTA button]`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Open | Backdrop `fadeIn .25s`, panel `modalIn .35s` (`translateY(24px) scale(.97) → none`); body scroll locked | `--easing` |
| Hover (close) | bg `--color-text`, white icon, `rotate(90deg)` | `--color-text` |
| Focus (keyboard) | Close button focused on open; Escape closes; focus returns to trigger | `--color-focus` |
| Active / pressed | None defined | |
| Disabled / Loading / Error / Empty | N/A — static content; empty state never occurs because only cards with content open modals | |

**Accessibility** — `role="dialog" aria-modal="true" aria-labelledby`; backdrop click closes; body scroll lock while open. Full focus trap is not implemented in the mockup (see §4).

### 2.9 Form field (`.field`, `.contact-form input/textarea`)

**Purpose** — Contact form: name, email, message. On valid submit it composes a `mailto:` and shows the success banner.

**Anatomy** — `[label] [input/textarea] [error line (reserved 18px min-height)]`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | `1.5px` border `--color-border`, bg `--color-bg`, radius-sm, 15px text | `--color-border`, `--color-bg` |
| Focus | Border `--color-primary`, bg white, 4px ring `rgba(79,70,229,.14)` | `--color-primary` |
| Invalid | Border `--color-danger`, bg `--color-danger-soft`, 4px ring `rgba(220,38,38,.14)`; error message in `--text-xs`/600 | `--color-danger`, `--color-danger-soft` |
| Placeholder | `--color-text-placeholder` | `#9CA3AF` (see §4) |
| Disabled / Loading | Not defined in mockup | see §4 |
| Error | Per-field message via `.field-error`; re-validates live once a field has been marked invalid | `--color-danger` |
| Empty | N/A — placeholder text guides the user; submit is blocked by validation | |

**Success banner (`.form-success`)** — green tinted panel `--color-success-soft`/`--color-success-border`, `pop .45s`, white check in `--color-success` circle, direct `mailto` fallback link. Submit button label becomes "Sent!".

**Accessibility** — visible `<label for>` on every field; `autocomplete` hints; validation runs on submit and re-runs live after first error; `novalidate` so the custom messages show.

### 2.10 Social button (`.social-btn`)

**Purpose** — GitHub / LinkedIn placeholder buttons in the contact section (show a toast explaining they are placeholders).

**Anatomy** — `[20px brand icon] [label]`, pill, `--color-bg` bg, 1px border.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Muted, bordered pill | `--color-border` |
| Hover | Inverts: bg `--color-text`, white text, `translateY(-2px)` | `--color-text` |
| Focus (keyboard) | Global `:focus-visible` ring | `--color-focus` |
| Active / pressed | None defined | |
| Disabled / Loading / Error / Empty | N/A | |

### 2.11 Toast (`.toast`)

**Purpose** — Transient feedback for placeholder links and email-compose confirmation.

**Anatomy** — `[message text]`, dark pill, fixed bottom-center, `z-index 400`, `--shadow-lg`, `toastIn .4s`; hides after 3.2s or when `hidden`.

**States**

| State | Visual change | Tokens |
|---|---|---|
| Visible | `role="status"`, slides up | `--color-text`, `--shadow-lg` |
| Hidden | `hidden` attribute | |
| Hover / Focus / Active / Disabled / Loading / Error / Empty | N/A — non-interactive, single message | |

### 2.12 Supporting controls

| Component | Default | Hover | Focus | Notes |
|---|---|---|---|---|
| `.link-btn` (inline GitHub link) | `--color-primary`, underline, 600 | `--color-primary-strong` | global ring | Real `<button>` styled as text |
| `.back-top` (footer) | 44px circle, `--color-border`, bg `--color-bg` | bg `--color-primary`, white icon, `translateY(-3px)` | global ring | `aria-label="Back to top"` |
| `.contact-line` (email link) | `--color-text`, 700, icon in tinted 44px square | `--color-primary` | global ring | |
| `.skip-link` | Off-screen (`left:-9999px`), on focus moves to `left:0`, z 200, bg ink/white text | — | visible on focus | `href="#main"` |
| `.reveal` | `opacity:0`, `translateY(26px)` | — | — | Adds `.in` via IntersectionObserver |

## 3. Content and formatting

- Voice and tone: warm, professional, first-person — direct sentences that sound like the owner talking ("I turn vague ideas into focused, well-crafted websites").
- Locale: English UI; brand name and owner name kept verbatim as the stakeholder wrote them ("Giới thiệu bản thân", "Nguyen Minh An", "Ho Chi Minh City").
- Numbers: plain numerals with `+` suffix for approximate stats ("3+", "15+"); no decimals, no locale grouping used.
- Capitalization: sentence case everywhere — buttons, headings, labels ("Get in touch", "See my work"); only section tags are uppercase (via CSS `text-transform`, source stays sentence case).
- Empty / error wording: error messages are one short complete sentence ("Please tell me your name."); the success banner explains what happened and the fallback action.

## 4. Known deviations

Places where the approved design does not follow its own rules or the anti-patterns in `references/ai-defaults.md`. Recorded, not silently fixed.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Primary color `#4F46E5` (indigo) | Matches the default AI-indigo palette (ai-defaults #1); no brand existed | Stakeholder deferred the look; approved as-is | Rebrand later = swap `--color-primary`/`--color-primary-strong` tokens only |
| Eyebrow / sec-tag (`--color-primary` on `--color-primary-soft`) | Contrast 4.3:1, just under 4.5:1 AA for 13–14px text | Approved | Darken text to `#4338CA` (7.9:1) or widen to 700 if contrast is raised |
| `.field-error` (`--color-danger` on `--color-danger-soft`) | 4.4:1, just under AA | Approved | Use `--color-danger` on white via a solid chip if required |
| Placeholders `#9CA3AF` | 2.4:1 on input bg | Approved; placeholder text is supplementary | Swap to `#6B7280` if audited strictly |
| Success check (white on `#22C55E`) | 2.3:1 | Decorative icon inside a green banner; banner text itself is `--color-text` | Keep — no text depends on it |
| `.btn` padding `13px 26px`, `btn-sm` `9px 20px` | `13px`/`26px` off the 4px spacing scale | Approved proportions | Next scale revision: `12px 24px` or `16px 28px` |
| `14.5px` text (skill/project descriptions) | Off the standard ramp between `--text-sm` and `--text-base` | Approved | Snap to 14px or 15px when re-typesetting |
| Eyebrow emoji (`👋`) | Emoji as iconography (ai-defaults #7); renders per platform | Approved as a friendly greeting | If consistency is wanted, swap for an inline SVG or remove |
| Disabled / loading button states | Not defined anywhere in the mockup | Static site has no async submit; form shows "Sent!" instead | Define before any future async form work |
| Modal focus trap | Only initial focus + Escape + return-focus; Tab is not trapped | Approved | Add a focus trap if modals grow keyboard-heavy |
| Nav links hit target | `padding 8px 14px` → ~36px tall, below 44px; `.modal-close` 40px | Approved density | Bump padding to 10px 16px when auditing touch targets |
| Gradient thumbnails | Gradients used decoratively on 3 project thumbs (ai-defaults #2) | They are placeholder art until the owner supplies real images | Replace with real screenshots at content hand-off |
| Footer year `2025` hard-coded in HTML | JS overwrites with the current year at runtime | Intended behavior | None |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-05-27 | Extracted design system from approved `index.html` | PR (this change) |
