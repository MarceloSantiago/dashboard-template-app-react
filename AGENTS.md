# Project Instructions

## Project Overview
Dashboard template application built with React and Tailwind CSS v4. Provides a comprehensive admin dashboard foundation with charts, tables, forms, and internationalization support.

## Tech Stack
- **Framework:** React 19 + TypeScript + Vite 6
- **Styling:** Tailwind CSS v4
- **State:** Zustand (global) + React Query (server state)
- **Forms:** React Hook Form + Zod
- **Routing:** React Router v7
- **Charts:** ApexCharts + React-ApexCharts
- **Calendar:** FullCalendar
- **Maps:** React-Jvectormap
- **i18n:** i18next + react-i18next
- **Validation:** Zod schemas

## Development Commands
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build
- `npm run validate-translations` — Validate i18n translation files
- `npm run validate-darkmode` — Validate dark mode implementation

## Architecture
See `ARCHITECTURE.md` for details.

## Code Conventions
- TypeScript in all new files
- Functional components with hooks (no classes)
- Tailwind CSS for styling (dark mode via `dark:` variants)
- Zod for runtime validation
- React Query for server state
- Feature-based folder structure

## Agents, Skills e Commands Disponíveis
- Agentes: `.opencode/agents/`
- Skills: `.opencode/skills/`
- Commands: `.opencode/commands/`
