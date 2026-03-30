# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:5173 (auto-opens browser)
npm run build    # Production build
npm run preview  # Preview production build
```

No test framework is configured.

## Architecture

React 18 + Vite SPA for "Singular", a Brazilian venture builder/consultancy site.

**Entry point**: `src/main.jsx` wraps the app in `BrowserRouter` + `ToastProvider`.

**Routing** (`src/App.jsx`):
- `/` → `Home` (imported from `../Home` — lives at the project root, outside `src/`)
- `/ecossistema` → `src/pages/Ecossistema.jsx`
- `/venture-builder` → `src/pages/VentureBuilder.jsx`
- `/areas` → `src/pages/Areas.jsx`
- `/marketplace` → `src/pages/Marketplace.jsx`
- `/marketplace/fornecedor/:slug` → `src/pages/ProviderProfile.jsx`
- `/backoffice` → `src/pages/Backoffice.jsx` (internal lead pipeline/kanban)

**Key directories**:
- `src/components/` — Navbar, Footer, Toast, LogoSVG, LeadFormModal, SuccessScreen, plus Three.js 3D components (BlackHole3D, SingularSingularity, AnimatedShaderBackground, BlackHoleVortex, SingularityBetaTest3d)
- `src/hooks/` — `useScrollReveal`, `useScrollRevealAll`, `useCounter`, `utils` (phoneMask)
- `src/services/` — `leadService` (full CRUD + funnel management), `eventTracker`, `sessionManager`, `notificationService`
- `src/data/mockData.js` — `PROVIDERS` array used by Marketplace

## Key Patterns

**Scroll reveal animations**: Add `data-reveal` to any element and `data-reveal-delay="1|2|3"` for staggered timing. Each page calls `useScrollRevealAll()` at the top, which sets up an IntersectionObserver that adds the `revealed` class when elements enter the viewport.

**Toast notifications**: Use `const showToast = useToast()` then call `showToast(message, type)` where type is `'success'` (default) or `'error'`.

**Lead persistence**: All leads are stored in `localStorage` under the key `sg_leads` via `src/services/leadService.js`. The Backoffice page polls every 3s to refresh. `FUNNEL_STATUSES` in leadService defines the full pipeline order.

**CSS variables** (defined in `src/index.css`): `--cobre` (brand orange), `--off-white`, `--preto`, `--cinza-escuro`. Use these for all colors.

**Icons**: Font Awesome loaded via CDN. Use `<i className="fas fa-icon-name">` for solid icons, `<i className="fab fa-brand-name">` for brand icons. No npm package — just class strings.

**3D visuals**: Three.js components are used as hero backgrounds. They use `react-shaders` and the `three` library directly with WebGL.
