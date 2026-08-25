<div align="center">
  <h1>GitHub Organization Page</h1>
</div>

This Vite and React app displays organization details, pinned repositories, and
filterable recent repositories from the GitHub GraphQL API.

## Setup

Use Bun 1.3.14 or newer:

```sh
bun install
cp .env.local.example .env.local
```

Fill `VITE_GITHUB_TOKEN` in `.env.local` with a GitHub access token that has the
`read:org` scope. Search for an organization by its login in the app.

## Commands

```sh
bun run dev          # Start Vite at http://localhost:5173
bun run build        # Type-check and create a production build
bun run test         # Run Vitest unit tests
bun run test:e2e     # Run Playwright browser tests
bun run format       # Format the project with Prettier
bun run format:check # Check formatting
```

Playwright tests intercept GitHub GraphQL requests, so they do not require a
token or network access.

## Tech Stack

- Vite
- React
- TypeScript
- Apollo Client
- Stitches
- Vitest and Testing Library
- Playwright
