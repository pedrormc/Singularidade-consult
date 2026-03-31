# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:5173 (auto-opens browser)
npm run build    # Production build
npm run preview  # Preview production build
```

No test framework is configured.

## Deployment

- **Hosting**: Vercel (static deploy of `dist/` folder)
- **Domain**: `singularventure.vercel.app`
- **Deploy flow**: `npm run build` → `npx vercel deploy ./dist --prod --yes` → `npx vercel alias <url> singularventure.vercel.app`
- **GitHub repo**: `pedrormc/Singularidade-consult` (main branch)

## Architecture

React 18 + Vite SPA for "Singular", a Brazilian venture builder / Consultório Empresarial site.

**Entry point**: `src/main.jsx` wraps the app in `BrowserRouter` + `ToastProvider`.

**Routing** (`src/App.jsx`):
- `/` → `Home` (imported from `../Home` — lives at the project root, outside `src/`)
- `/ecossistema` → `src/pages/Ecossistema.jsx`
- `/consultorio-empresarial` → `src/pages/ConsultorioEmpresarial.jsx`
- `/marketplace` → `src/pages/Marketplace.jsx`
- `/marketplace/fornecedor/:slug` → `src/pages/ProviderProfile.jsx`
- `/backoffice` → `src/pages/Backoffice.jsx` (internal lead pipeline/kanban)

**Removed routes** (no longer exist):
- `/venture-builder` and `/areas` were removed. Content merged into Home.

**Key directories**:
- `src/components/` — Navbar, Footer, Toast, LogoSVG, LeadFormModal, SuccessScreen, AnimatedShaderBackground (CSS-only, no WebGL)
- `src/hooks/` — `useScrollReveal`, `useScrollRevealAll`, `useCounter`, `utils` (phoneMask)
- `src/services/` — `leadService` (full CRUD + funnel management), `eventTracker`, `sessionManager`, `notificationService`
- `src/data/mockData.js` — `PROVIDERS` array used by Marketplace

**Brand assets** (`SG-SINGULAR/`):
- `ISOTIPO/` — S/ symbol in SVG and PNG (fundo escuro, claro, laranja)
- `LOGO SVG/SVG/` — Full logo (isotipo + wordmark "SINGULAR")
- `LOGO PNG/PNG/` — Full logo in PNG format
- Copies in `public/`: `logo-isotipo.svg`, `logo-full.svg`, `logo-isotipo-light.svg`

## Key Patterns

**Scroll reveal animations**: Add `data-reveal` to any element and `data-reveal-delay="1|2|3"` for staggered timing. Each page calls `useScrollRevealAll()` at the top, which sets up an IntersectionObserver that adds the `revealed` class when elements enter the viewport.

**Toast notifications**: Use `const showToast = useToast()` then call `showToast(message, type)` where type is `'success'` (default) or `'error'`.

**Lead persistence**: All leads are stored in `localStorage` under the key `sg_leads` via `src/services/leadService.js`. The Backoffice page polls every 3s to refresh. `FUNNEL_STATUSES` in leadService defines the full pipeline order.

**CSS variables** (defined in `src/index.css`): `--cobre` (#E64E10, brand orange), `--off-white` (#F7EEEB), `--preto` (#1C1C1C), `--cinza-escuro`. Use these for all colors.

**Icons**: Font Awesome loaded via CDN. Use `<i className="fas fa-icon-name">` for solid icons, `<i className="fab fa-brand-name">` for brand icons. No npm package — just class strings.

**Hero background**: `AnimatedShaderBackground.jsx` renders CSS-only animated diagonal streaks (orange/amber on dark). No WebGL/Three.js — pure CSS `@keyframes` with 5 streak elements + SVG noise texture. Respects `prefers-reduced-motion`.

**Logo**: `LogoSVG.jsx` renders the S/ isotipo from `public/logo-isotipo.svg`. Footer uses `public/logo-full.svg` (isotipo + wordmark).

## Responsive Design

Mobile-first with 3 breakpoints in `src/index.css`:
- `@media (max-width: 1024px)` — tablet adjustments
- `@media (max-width: 768px)` — mobile stacking (grids → single column)
- `@media (max-width: 480px)` — small mobile (2x2 stat grid, full-width buttons, 16px input font)

**Important**: All layout styles (grid, flex) are in CSS classes, NOT inline styles. Inline `style={}` on layout elements prevents media query overrides.

## Content Alignment

Home page content follows the **Playbook Consultório Empresarial** document:
- **Metáfora médica**: check-up, anamnese, Raio-X Financeiro, sessões semanais
- **3 fases**: Raio-X Financeiro (sessões 1-2), Quick Wins de Caixa (3-8), Gestão Integrada (9-12)
- **Pricing**: R$1.500/mês + taxa de êxito | Sócio de Aluguel: R$12.000/3 meses + êxito
- **Garantia**: 60 dias (clareza do caixa + plano de metas ou +1 mês grátis)
- **Cases**: Pet Shop (ticket R$1.300), Clínica Estética (+R$2k em 3 dias), Empresa de Serviços (+R$5k/mês)
- **Hub ARCO**: espaço físico regenerativo onde as sessões acontecem (raio de 5km)
- **ICP**: empresários de PMEs (R$50k–R$500k/mês), 1–50 funcionários, dor real no caixa
