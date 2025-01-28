# UseFolio

[![CI](https://github.com/xyzhou-projects/usefolio/actions/workflows/ci.yml/badge.svg)](https://github.com/xyzhou-projects/usefolio/actions/workflows/ci.yml)

A frictionless portfolio builder with instant preview and pay-to-export model.

## Tech Stack

- **Frontend:** Next.js, TypeScript, Zustand, Tailwind CSS, shadcn/ui
- **Backend:** Supabase (Database, Storage, Auth)
- **Deployment:** Vercel
- **Payment:** Stripe (one-time payment)

## Development

### Prerequisites

- Node.js 18+
- pnpm
- Docker (for local Supabase)

### Setup

1. Install dependencies

```bash
pnpm install
```

2. Start local Supabase

```bash
supabase start
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

4. Run the development server

```bash
pnpm dev
```

### Git Workflow

- `main` - Production branch, auto-deploys to Vercel
- `dev` - Development branch, create PRs from here
- Feature branches: `feature/your-feature-name`
- Fix branches: `fix/your-fix-name`

### Branch Protection

Both `main` and `dev` branches are protected:

- Require pull request reviews
- Must pass CI checks
- No direct pushes

## Features

- Portfolio builder interface
- Live preview
- Local progress saving
- Template customization
- Responsive design
- One-time payment checkout
- Instant deployment
- Subdomain support
- Code export
