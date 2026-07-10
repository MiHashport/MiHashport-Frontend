# MiHashport Frontend

Chat. Build. Pay. On Stellar — the web companion for the WhatsApp-native MiHashport wallet.

## Part of MiHashport

MiHashport lets people send, receive, swap, and deploy contracts on Stellar,
entirely inside WhatsApp. The project is split across three repositories:

- **Frontend (this repo)** — the web dashboard companion to the WhatsApp bot
- [MiHashport-Backend](https://github.com/MiHashport/MiHashport-Backend) — the API and WhatsApp integration
- [MiHashport-Contract](https://github.com/MiHashport/MiHashport-Contract) — the Soroban smart contracts

## What MiHashport is

Most people who want to use Stellar have to leave the conversation they're
already in — install a wallet app, manage a seed phrase, learn a new UI —
before they can send a payment or interact with a contract. MiHashport
removes that step: the entire experience (sending funds, swapping assets,
deploying and calling Soroban contracts) happens inside WhatsApp, the app
billions of people already have open.

## What this repo is

WhatsApp is great for conversation, but not for everything — reviewing a
long transaction history, inspecting a deployed contract's methods, or
linking a wallet for the first time all work better on a screen with more
room. This repo is that surface: a Next.js web app that talks to the
MiHashport backend to let a linked user view balances and transaction
history, review and interact with contracts deployed on their behalf, and
give the project a public-facing landing page. See [docs/PLAN.md](docs/PLAN.md)
for how these features are being built out phase by phase.

### Why open source

MiHashport is trying to make Stellar usable for people who will never touch
a block explorer or manage their own keys. That's a UX problem as much as a
technical one, and it benefits from more eyes: more device/browser
combinations tested, more accessibility feedback, more scrutiny on how a
non-custodial-feeling flow is built on top of a backend-managed wallet. Open
development also means the sibling backend and contract repos can be
verified against a real, inspectable client instead of a black box.

### Why it benefits the Soroban/Stellar ecosystem

This repo is a concrete, public example of a **non-crypto-native product**
built on Soroban — one where users never see "Soroban" or "Stellar" in the
main flow, and the contract layer is exercised through a normal web UI (form
generation from a contract's spec, simulate-vs-invoke distinctions, error
enums mapped to human-readable messages). That's a pattern other builders
targeting mainstream, non-crypto-native users can copy directly. Every
merged phase in `docs/PLAN.md` also doubles as documentation of what it
actually takes to wire a web frontend to Soroban contracts end-to-end,
which lowers the bar for new Soroban developers coming from a typical web
background.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org) (`eslint-config-next`)
- Node.js (version pinned in [`.nvmrc`](.nvmrc))

## Getting started

### Prerequisites

- Node.js version matching [`.nvmrc`](.nvmrc) (use `nvm use`)
- npm

### Install

```bash
npm install
```

### Environment setup

```bash
cp .env.example .env.local
```

See [`.env.example`](.env.example) for the variables this app reads
(backend API base URL, target Stellar network, contract ID).

### Run (development)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project structure

```
src/
  app/                    # Next.js App Router routes
  components/
    ui/                   # Reusable, generic UI primitives
    features/             # Feature-specific components
  lib/                    # Shared utilities, API client
  hooks/                  # Shared React hooks
  types/                  # Shared TypeScript types
  config/                 # Typed env/config access
docs/
  PLAN.md                 # 6-phase implementation plan
```

## More docs

- [docs/PLAN.md](docs/PLAN.md) — implementation plan and phase breakdown
- [CONTRIBUTING.md](CONTRIBUTING.md) — how to find work and submit changes
- [AGENTS.md](AGENTS.md) — rules for AI coding agents contributing here

## Getting help

If you have questions, run into issues, or want to suggest improvements, please open an issue or start a discussion on our [GitHub Issues](https://github.com/Muhammadcodes112/MiHashport-Frontend/issues).

## License

MIT — see [LICENSE](LICENSE).


