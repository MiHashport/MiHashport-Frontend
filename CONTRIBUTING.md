# Contributing to MiHashport Frontend

Thanks for your interest in contributing. This repo is the web companion to
the MiHashport WhatsApp wallet — see [README.md](README.md) for context and
[docs/PLAN.md](docs/PLAN.md) for the full implementation roadmap.

## Finding work

- Maintainers create GitHub issues from [docs/PLAN.md](docs/PLAN.md), one per
  checklist item.
- Comment on an issue to ask to be assigned before you start work on it —
  this avoids duplicate effort.
- Look for the `good first issue` label if you're new to the project.
- If you want to work on something not yet filed as an issue, open one first
  and describe the scope before submitting a PR.

## Workflow

1. Fork the repo.
2. Create a branch off `main`:
   - `feat/<issue-number>-short-name` for new functionality
   - `fix/<issue-number>-short-name` for bug fixes
3. Make your change, scoped to the linked issue(s).
4. Open a PR against `main` using the PR template. Reference every issue
   your PR addresses with `Closes #<issue-number>`.

## Commit messages

- Single-line only, imperative mood (e.g. `Add balances card to dashboard`,
  not `Added` or `Adding`).
- No `Co-authored-by` lines.
- One commit per issue where practical.

## Code style

- TypeScript, App Router conventions (`src/app`).
- Reuse primitives from `src/components/ui` before adding new ones.
- Keep components typed — avoid `any`.
- Tailwind for styling; follow the light/dark (`dark:`) pattern already used
  in the codebase.
- Run `npm run lint` and `npm run build` locally before opening a PR.

## CI

CI must be green before a PR will be reviewed. CI runs `npm run build` on
every push and pull request to `main`.

## Review

Be respectful and patient — maintainers review PRs as time allows.
Maintainers may close PRs that are stale, out of scope for their linked
issue, or that don't pass CI, with an explanation. If your PR is closed for
scope reasons, feel free to open a new issue to discuss the idea separately.
