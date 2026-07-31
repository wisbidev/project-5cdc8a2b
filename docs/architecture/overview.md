# Architecture Overview — Giới thiệu bản thân

## 1. Project Shape

**Static** — frontend only. No backend, no database.

This project is a single-page personal introduction landing page. It ships as a static Next.js build with no server-side API, no persisted data, and no backend service. The contact form composes a `mailto:` link client-side.

> Adding a backend or database to a static project is dead weight: every later agent reads past it, CI builds it for nothing, and it is never deleted because nobody owns the cleanup. This architecture documents what the shape actually has and nothing else.

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15 |
| Language | TypeScript | strict |
| Styling | Tailwind CSS | v3 |
| Linter | ESLint + `next/core-web-vitals` | — |
| Container runtime | Docker Compose | v2 |
| Container base | `node:20-alpine` | 20 |

**Rejected alternatives**

| Alternative | Why it was rejected |
|---|---|
| Go backend (project default) | Shape is `static` — no data to serve, no API to expose |
| PostgreSQL | Shape is `static` — no persistent data |
| Vite / plain React | Next.js provides SSR-compatible static export, image optimisation, and built-in routing which this design will need for section anchors |
| Tailwind v4 | v4 was not yet stable when this stack was pinned; v3 is well-tested with the design tokens |

---

## 3. Folder Structure

```
.
├── .env.example                    # root — compose-level vars
├── .gitignore
├── docker-compose.yml              # frontend container only
└── code/
    └── frontend/
        ├── .env.example            # NEXT_PUBLIC_ vars only
        ├── .eslintrc.json
        ├── .gitignore
        ├── Dockerfile              # multi-stage: node:20-alpine → standalone
        ├── next.config.js
        ├── package.json
        ├── package-lock.json
        ├── postcss.config.js
        ├── tailwind.config.ts
        ├── tsconfig.json
        ├── app/
        │   ├── globals.css         # design tokens, base styles, reusable classes
        │   ├── layout.tsx          # root layout (Server Component)
        │   └── page.tsx            # page shell (Server Component, composes sections)
        └── components/            # one file per component; each is a Server Component
                                   # unless it uses "use client" (onClick, useState, useEffect, etc.)
```

---

## 4. Server / Client Boundary

Next.js App Router treats **every component as a Server Component** unless the file's **first line** is the literal string `"use client"`.

| What needs `"use client"` | What does NOT |
|---|---|
| `onClick`, `onSubmit`, `onChange` handlers | Static JSX composition |
| `useState`, `useEffect`, `useRef` | Reading props / params |
| Browser APIs (`window`, `localStorage`) | `async` data functions |
| Passing a function as a prop to a child | Passing plain data as props |

**Rule:** `app/page.tsx` stays a Server Component. Every interactive component (mobile menu toggle, form, modal, scroll-reveal observer, toast) must begin with `"use client"`. Before opening any PR, read back every component file and verify the first line is correct — `next build` reports the error against the consumer (`page.tsx`) rather than the component that is missing the directive, making the fault hard to locate downstream.

---

## 5. Design Tokens

All tokens live in `app/globals.css` as CSS custom properties. Story authors must not edit `globals.css`; they use the existing token classes. New tokens require a TL-approved design-system update.

Key tokens (from `design/design-system.md`):

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#F9FAFB` | Page background |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-text` | `#111827` | Body / headings |
| `--color-text-muted` | `#6B7280` | Secondary text |
| `--color-primary` | `#4F46E5` | Primary action |
| `--color-primary-strong` | `#4338CA` | Hover state |
| `--color-primary-soft` | `#EEF2FF` | Tinted bg, badges |
| `--color-accent` | `#F59E0B` | Accent highlights |
| `--color-border` | `#E5E7EB` | Default border |
| `--color-success` | `#22C55E` | Success state |
| `--color-danger` | `#DC2626` | Error / destructive |
| `--radius-card` | `14px` | Card corners |
| `--radius-full` | `999px` | Pills, buttons |
| `--shadow-sm` | `0 10px 30px rgba(17,24,39,.08)` | Resting card |
| `--shadow-md` | `0 24px 60px rgba(17,24,39,.14)` | Hover card, modal |
| `--easing` | `cubic-bezier(.22,.61,.36,1)` | All transitions |
| `--duration-base` | `250ms` | Transform transitions |

Motion respects `prefers-reduced-motion: reduce` — all durations collapse to `0.01ms` and scroll behaviour becomes `auto`.

---

## 6. Component Inventory

| Component | File | Client/Server |
|---|---|---|
| SkipLink | `components/SkipLink.tsx` | Server |
| Header | `components/Header.tsx` | Client (hamburger, scroll) |
| Hero | `components/Hero.tsx` | Server |
| About | `components/About.tsx` | Server |
| Skills | `components/Skills.tsx` | Server |
| Projects | `components/Projects.tsx` | Client (modal) |
| Contact | `components/Contact.tsx` | Client (form validation) |
| Footer | `components/Footer.tsx` | Server |
| Modal | `components/Modal.tsx` | Client |
| Toast | `components/Toast.tsx` | Client |
| RevealObserver | `components/RevealObserver.tsx` | Client |

---

## 7. Environment Variables

### Root `.env.example` (compose-level)

```env
# No secrets — shared keys for docker compose only
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### `code/frontend/.env.example`

```env
# Public vars — safe to commit; browser sees these
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

No backend vars exist in this shape.

---

## 8. Running Locally

### Option A — Docker Compose (recommended)

```bash
docker compose up --build
# Frontend available at http://localhost:3000
```

### Option B — Node.js directly

```bash
cd code/frontend
npm install
npm run dev
# Frontend available at http://localhost:3000
```

### Build for production

```bash
cd code/frontend
npm run build
# Output in .next/
```

---

## 9. CI / CD

`.github/workflows/ci.yml` runs on every pull request and push to `main`.

| Job | What it runs |
|---|---|
| `frontend` | `npm ci && npm run lint && npm run build` |
| `compose` | `docker compose config -q` (sanity check) |

The `backend` job is omitted — this shape has no backend.

CI gate: **all jobs must pass** before a PR can be merged.

---

## 10. Docker Compose

```yaml
services:
  frontend:
    build: ./code/frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=http://localhost:3000
    restart: on-failure
```

Named volumes are not needed (static site, no persistent state).

---

## 11. Key Decisions Summary

| Decision | Rationale | Rejected alternative |
|---|---|---|
| Static shape — no backend, no DB | Landing page stores nothing; contact form uses `mailto:` | Adding Go + Postgres "for future" costs CI time on every run |
| Next.js App Router, not plain Vite | SSR-compatible static export, image optimisation, file-based routing | Vite lacks these without extra plugins |
| Tailwind v3 (not v4) | v4 was not stable at stack-pinning time | v4 (watch for future migration) |
| `"use client"` as first line only | App Router rule; wrong placement silently breaks the build | Declaring `"use client"` mid-file |
| `globals.css` as single source of tokens | Keeps design system consistent; story authors cannot bypass it | Per-component CSS that diverges from tokens |

---

## 12. Rollout Notes

- This scaffold is the baseline every later PR branches from. If it does not build, every story is red with no story author able to fix it.
- The `mailto:` contact form requires no backend; it is implemented entirely in the `Contact.tsx` client component.
- The project currently uses placeholder content ("Nguyen Minh An"). The stakeholder must replace it with their real details before shipping.
- `prefers-reduced-motion` is handled globally via CSS; no JS feature-detection is needed for the motion layer.
