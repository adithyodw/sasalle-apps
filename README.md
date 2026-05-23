# SASALLE HOTEL — Luxury Digital Hospitality System

Production Next.js platform for **SASALLE HOTEL**, Batam, Indonesia — ultra-luxury hospitality OS rebuilt from Google Stitch designs.

**Live deploy:** Connect this repo root to Vercel (standard Next.js — no subdirectory required).

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (standard GitHub integration)

1. Import `adithyodw/sasalle-apps` on [vercel.com/new](https://vercel.com/new)
2. **Root Directory:** leave as `.` (repository root)
3. Framework: **Next.js** (auto-detected)
4. Add environment variables from `.env.example`
5. Deploy

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for details.

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/rooms` | Rooms & Suites |
| `/spa` | Spa Sanctuary |
| `/dining` | The Brick & Iron |
| `/book` | Booking + WhatsApp concierge |
| `/stay/*` | Guest app (key, concierge, loyalty) |
| `/admin` | Operations dashboard |

Locales: `/id/...`, `/zh/...`

## Repository layout

| Path | Description |
|------|-------------|
| `src/` | Next.js application |
| `messages/` | i18n (EN, ID, ZH) |
| `docs/` | Architecture, deployment, UX flows |
| `l_architecte/` | Design system tokens |
| `sasalle_home/`, `rooms_suites_gallery/`, etc. | Google Stitch reference HTML |

## Build

```bash
npm run build
```

Must pass before production deploy.

## Build specification

[`docs/BUILD_SPEC.md`](docs/BUILD_SPEC.md)
