# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio SPA built with Vite + React 18 + TypeScript + shadcn-ui + Tailwind CSS. Originally scaffolded/edited via Lovable (changes from Lovable are auto-committed to this repo, and edits here can be reflected back in Lovable). Deployed on Vercel.

## Commands

- `npm run dev` — start the Vite dev server (port 8080, host `::`)
- `npm run build` — production build
- `npm run build:dev` — development-mode build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the whole project
- `npm run capture` — runs `scripts/capture-screenshots.mjs` (Puppeteer-based screenshot capture)

There is no test runner configured in this project.

## Architecture

- **Routing**: `src/App.tsx` defines all routes using `react-router-dom`. Pages are lazy-loaded (`lazy`/`Suspense`) and wrapped in a shared `Layout` (`src/components/ui/Layout`). Routes: `/` (Index), `/sobre-mi` (About), `/proyecto/:slug` (ProjectDetail), `*` (NotFound).
- **Providers**: App is wrapped in `QueryClientProvider` (TanStack Query), `ThemeProvider` (dark theme by default, `next-themes`-based, stored under `vite-ui-theme`), and `TooltipProvider`. Two toast systems are mounted (`Toaster` and `Sonner`).
- **Project data**: `src/data/projects.ts` is the single source of truth for portfolio projects — each entry has `slug`, `title`, `category`, `tech`, `problem`/`solution`/`results`, `gallery`, etc. `ProjectDetail.tsx` looks up a project by `slug` from this array. Adding a new project means adding an entry here plus corresponding images under `public/projects/`.
- **UI components**: `src/components/ui/` contains shadcn-ui primitives (generated, follow existing patterns when adding new ones via the shadcn CLI conventions defined in `components.json`).
- **Path alias**: `@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig`).
- **SPA routing on Vercel**: `vercel.json` rewrites all paths to `/index.html` so React Router handles client-side routes on direct access/refresh.
- **Styling**: Tailwind CSS with `tailwindcss-animate` and `@tailwindcss/typography`; theme config in `tailwind.config.ts`.

## Linting notes

`@typescript-eslint/no-unused-vars` is disabled in `eslint.config.js`. `dist/` is ignored.
