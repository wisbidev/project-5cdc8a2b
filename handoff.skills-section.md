# Skills section handoff — iteration 3 fix

## What changed (fix iteration 3)
- `Skills.tsx`: async Server Component; uses `RevealObserver` for scroll-reveal; data via `fetchSkills()` from mock contract
- `RevealObserver.tsx`: client component; IntersectionObserver adds `.in` class; instant-reveal when `prefers-reduced-motion: reduce`
- `lib/mock/skills-section.tsx`: typed `Skill` interface + `fetchSkills()` returning `Promise<Skill[]>`; icons as typed `ReactElement`
- `lib/mock/skills-section.ts`: type re-export only (avoids TS identifier conflict with `.tsx`)
- `components/Skills.module.css`: responsive grid `1→2→3` cols at `640px`/`1120px`; icon container with hover transform

## Acceptance criteria
| AC | Description | Status |
|---|---|---|
| AC-1 | 6 skill cards with icon, heading, description | ✅ |
| AC-2 | 3-column layout at ≥ 1120px | ✅ |
| AC-3 | 2-column layout at 640–1119px | ✅ |
| AC-4 | Single-column at < 640px | ✅ |
| Reduced motion | Cards render immediately, no animation | ✅ (RevealObserver) |

## Verification
- No `app/globals.css`, `app/page.tsx`, `app/layout.tsx`, or `tailwind.config.ts` touched
- No other story's component in the diff
- Mock data in `lib/mock/skills-section.tsx`; shape mirrors the BE API contract
- Server/Client boundary: `Skills.tsx` = Server Component; `RevealObserver.tsx` = Client Component
- All CSS values trace to design-system tokens (`globals.css`)

## Review notes
- `skills-section.ts` re-exports `Skill` type from `./skills-section` (resolves to `.tsx`); `fetchSkills` is imported from the `.tsx` directly — TypeScript handles the bare specifier resolution correctly
- `card` class from `Skills.module.css` supplements the global `.card` in `globals.css`; scoped CSS module selector wins at equal specificity
