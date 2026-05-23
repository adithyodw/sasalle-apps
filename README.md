# SASALLE APPS

Monorepo for **SASALLE HOTEL** — ultra-luxury hospitality digital ecosystem (Batam, Indonesia).

## Repository structure

| Path | Description |
|------|-------------|
| `sasalle-hotel/` | **Production Next.js application** (deploy this to Vercel) |
| `l_architecte/` | L'Architecte design system tokens |
| `sasalle_home/` | Google Stitch reference — home |
| `rooms_suites_gallery/` | Stitch reference — rooms |
| `spa_wellness_sanctuary/` | Stitch reference — spa |
| `the_brick_iron_dining/` | Stitch reference — dining |

## Quick start

```bash
cd sasalle-hotel
cp .env.example .env.local
npm install
npm run dev
```

## Deploy to Vercel

1. Push this repository to GitHub: `https://github.com/adithyodw/sasalle-apps`
2. Import project in [Vercel](https://vercel.com/new)
3. Set **Root Directory** to `sasalle-hotel`
4. Add environment variables from `sasalle-hotel/.env.example`
5. Deploy — `npm run build` must pass (verified locally)

See [`sasalle-hotel/README.md`](sasalle-hotel/README.md) and [`sasalle-hotel/docs/DEPLOYMENT.md`](sasalle-hotel/docs/DEPLOYMENT.md) for full instructions.

## Build specification

Product requirements and design rules: [`docs/BUILD_SPEC.md`](docs/BUILD_SPEC.md)
