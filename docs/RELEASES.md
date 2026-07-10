# Releases and Versioning

This document outlines the current state of releases and versioning for the MiHashport Frontend repository, setting clear expectations for users, contributors, and maintainers.

## Current State

The MiHashport Frontend is currently under active development. **There are no formal releases, version tags, or stable packages published yet.**

All active development is merged into the `main` branch. While we strive to keep `main` buildable and deployable, the codebase should be considered pre-release and subject to breaking changes.

## Criteria for v0.1.0 (First Tagged Release)

We will tag our first formal release (`v0.1.0`) once the core wallet and authentication features are implemented and stable. Specifically, the criteria for the `v0.1.0` tag are:

1. **Phase 3 (Wallet Linking & Auth):** Completed. Users must be able to securely link their WhatsApp-registered number to the web companion app and authenticate.
2. **Phase 4 (Wallet Dashboard):** Completed. Users must be able to view their Stellar wallet balances, transaction history, and perform basic send/swap actions.
3. **Security & Stability:** Basic security audits/checks on session handling and authentication cookies are completed, and the app runs without critical runtime exceptions.

## Future Versioning Policy

Post-`v0.1.0`, this repository will adopt [Semantic Versioning (SemVer)](https://semver.org/):
- **Major (`1.0.0`):** Significant milestones, stable production-ready releases, or breaking changes.
- **Minor (`0.x.0`):** New features matching subsequent phases of the implementation plan (e.g., Phase 5's Contract Deployer/Explorer).
- **Patch (`0.x.y`):** Bug fixes, dependencies updates, and minor improvements.
