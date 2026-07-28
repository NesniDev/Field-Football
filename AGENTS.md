# AGENTS.md — canchas-futbol

## Project Structure

Two independent workspaces — **no monorepo tooling**. Each has its own `package.json` and `node_modules`:

| Workspace | Path | Stack |
|-----------|------|-------|
| Frontend | `/` (root) | React 19, TypeScript, Tailwind CSS 4, Vite 7 |
| Backend | `/backend` | Express 5.2, Node.js, ESM |

Backend is a separate Vercel deployment at `https://backend-eight-rose-88.vercel.app`. Frontend calls it via hardcoded Axios base URLs in `src/api/*.ts`.

## Commands

```bash
# Frontend (run from repo root)
npm run dev        # Vite dev server (port 5173)
npm run build      # tsc -b && vite build
npm run lint       # ESLint (flat config, ignores dist/)
npm run test       # Vitest (jsdom)
npm run preview    # Vite preview of dist/

# Backend (run from /backend)
node app.js        # Express server (port 3000, skips listen in production)
```

There is no single command that runs both. Start them separately.

## Path Aliases

Defined in `tsconfig.app.json` and must stay in sync with `vite.config.ts`:

| Alias | Maps to |
|-------|---------|
| `@/*` | `src/*` |
| `@lib/*` | `src/lib/*` |
| `@components/*` | `src/components/*` |
| `@assets/*` | `src/assets/*` |
| `@pages/*` | `src/pages/*` |
| `@hooks/*` | `src/hooks/*` |
| `@schemas/*` | `src/schemas/*` |

The Vite alias only defines `@` → `./src`. The others resolve via tsconfig `paths`. Use `@/` imports in frontend code — never relative `../../` chains.

**Note:** `@components/*` is unused — all imports use `@/components/*` instead. Keep the alias for consistency but don't expect existing code to use it.

## Architecture

### Frontend Flow

```
main.tsx → App.tsx (QueryClientProvider + RouterProvider)
  → app.router.tsx (createBrowserRouter)
    → LayoutIndex (wrapper)
      → pages/* (Home, Fields, DetailsField, Reservations, Payment, Receipt, Tournaments, Contact, FAQ, NotFound)
```

- **State**: Zustand (`src/store/`) — single store persisted to localStorage
- **Data fetching**: TanStack React Query + Axios (`src/api/` → `src/actions/` → custom hooks)
- **Validation**: Zod schemas in `src/schemas/`
- **UI**: shadcn/ui (New York style, Radix + Lucide) in `src/components/ui/`

### Backend Flow

```
app.js → Express (cors + json)
  /fields      → FieldController → FieldModel (reads fields.json)
  /reservations → ReservationsController → ReservationsModel (reads/writes reservations.json)
  /tournaments  → TournamentController → TournamentModel (reads tournaments.json)
```

Routes → Controllers → Models. Models read/write JSON files directly (no database).

### Data Fetching Pattern

```
src/api/*.ts      — Axios instances (base URL configured here)
src/actions/*.ts  — API functions (call Axios instances, parse params)
src/hooks/*.ts    — Custom hooks (React Query + actions, expose loading/data)
src/pages/*.tsx   — Consume hooks, render UI
```

## Testing

- **Runner**: Vitest with `jsdom` environment (configured in `vite.config.ts`)
- **Location**: Co-located `*.test.ts` files next to source (e.g., `useFields.test.ts` beside `useFields.ts`)
- **Libraries**: `@testing-library/react`, `@testing-library/dom`
- **Pattern**: Tests mock the module itself with `vi.mock()` and test hook return values
- **Scope**: Only `src/hooks/` has tests currently. No component or integration tests.

## Gotchas

1. **Backend has no test suite.** `npm test` in `/backend` just echoes an error. Don't run it.
2. **Backend data is file-based.** Reservations write to `reservations.json`. If the file doesn't exist, the backend crashes. Fields and tournaments are read-only from JSON.
3. **CORS is restrictive.** Backend only accepts `localhost:5173` and `field-football.vercel.app`. Adding a new frontend origin requires editing `backend/middleware/cors.js`.
4. **API base URL is hardcoded** in three files (`src/api/fields.api.ts`, `src/api/fieldSlug.api.ts`, `src/api/tournament.api.ts`). All point to the Vercel deployment. Changing the backend URL means updating all three.
5. **Tailwind CSS 4** — uses `@tailwindcss/vite` plugin, not PostCSS. No `tailwind.config.js` exists. CSS lives in `src/index.css` with `@import "tailwindcss"`.
6. **shadcn/ui config** is in `components.json`. New York style, CSS variables, Lucide icons. Adding components: `npx shadcn@latest add <component>`.
7. **TypeScript strict mode** is on. `noUnusedLocals`, `noUnusedParameters`, `noUncheckedSideEffectImports` are all enabled. Lint errors will fail the build.
8. **Backend is ESM** (`"type": "module"` in package.json). All imports use `import`/`export`, not `require`.
9. **`verbatimModuleSyntax`** is enabled — you must use `import type` for type-only imports. Plain `import` of a type will error.
10. **Available time slots** are hardcoded in `src/lib/horarios.tsx` (not fetched from backend).
11. **Reservation store** persists to localStorage under key `reservation-storage` with migration v1.
12. **Vercel SPA routing** — `vercel.json` rewrites all paths to `index.html`. Client-side routing handles everything.
13. **`NotFound` page exists** (`src/pages/NotFound.tsx`) but is **not registered** in the router (`src/router/app.router.tsx`). No 404 route is currently active.

## Conventions

- Frontend components use `.tsx` extension. Backend uses `.js`.
- Use `cn()` from `src/lib/utils.ts` for Tailwind class merging (clsx + tailwind-merge).
- Zustand stores follow `use<Name>Store` naming, live in `src/store/`.
- Custom hooks follow `use<Name>` naming, live in `src/hooks/`.
- API Axios instances are named `<Resource>Api` (e.g., `FieldsApi`, `tournamentApi`).
