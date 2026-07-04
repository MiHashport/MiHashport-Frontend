# AGENTS.md

Instructions for AI coding agents contributing to this repository.

## Repo context

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Node version
  pinned in `.nvmrc`.
- **Build:** `npm install` then `npm run build`.
- **Dev server:** `npm run dev` (http://localhost:3000).
- **Lint:** `npm run lint`.
- **Tests:** no test suite exists yet in this repo. If one is added later and
  a script exists, run it; if not, don't assume tests pass or fail — just
  write clean, minimal, correct code.
- **Key directories:**
  - `src/app/` — routes (App Router)
  - `src/components/ui/` — generic, reusable UI primitives
  - `src/components/features/` — feature-specific components
  - `src/lib/` — shared utilities, API client
  - `src/hooks/` — shared React hooks
  - `src/types/` — shared TypeScript types
  - `src/config/` — typed env/config access (`src/config/env.ts`)
  - `docs/PLAN.md` — the 6-phase implementation plan issues are drawn from

## Rules

- Address each issue in its own commit.
- The PR description must include the appropriate `Closes #<issue>` tag for
  every issue addressed.
- Commit messages must be single-line only.
- Do not add a `Co-authored-by` line to commits.
- Keep the implementation minimal and focused on the issue at hand — don't
  bundle unrelated changes into the same PR or commit.
- Integrate changes cleanly with the current codebase structure. Read the
  surrounding code (and `docs/PLAN.md` for the relevant phase) before
  writing anything.
- Avoid over-engineering, and avoid assuming unfinished parts of the app are
  stable — check what actually exists before building on top of it.
- The project is under active development: expect bugs, missing pieces, and
  incomplete implementations elsewhere in the codebase. Do not "fix" things
  outside your issue's scope, even if you notice something broken.
- The test suite (once one exists) may or may not be reliable at any given
  time. If tests exist and run, use them; if they don't, don't assume
  passing behavior either way — prioritize clean, correct, minimal code
  regardless of test status.
- Keep the scope of each change as small as possible while still fully
  addressing the issue it's for.
- **Do NOT commit or push implementation notes, plan files, or scratch
  markdown** (e.g. `IMPLEMENTATION.md`, `NOTES.md`, `TODO.md`, `*.plan.md`).
  Keep these local only — they're already excluded in `.gitignore`.
