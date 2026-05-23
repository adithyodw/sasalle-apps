# SASALLE HOTEL — Luxury Digital Hospitality System

Production-grade platform for **SASALLE HOTEL**, Batam, Indonesia — rebuilt from Google Stitch with L'Architecte design tokens and French editorial luxury standards.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** + **Tailwind CSS v4**
- **next-intl** — English, Bahasa Indonesia, 简体中文
- **Zustand** — booking + guest preference persistence

## Quick start

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/rooms` | Rooms & Suites |
| `/spa` | Spa Sanctuary |
| `/dining` | The Brick & Iron |
| `/book` | 3-step booking + calendar + WhatsApp concierge |
| `/stay/key` | Digital room key |
| `/stay/concierge` | AI + human concierge |
| `/stay/check-in` | Pre-arrival preferences (persisted) |
| `/stay/services` | Guest services hub |
| `/stay/loyalty` | Silver / Gold / Black + VIP logic |
| `/admin` | Operations dashboard |

## Integrations

- **Social** — Instagram, TikTok, Facebook, WhatsApp (icon-only footer)
- **OTA** — Booking.com, Agoda, Traveloka, Tiket.com, Trip.com
- **WhatsApp Concierge** — `BOOK VIA CONCIERGE` with pre-filled dates, room, guests

Configure URLs in `.env.example`.

## Deploy to Vercel

1. Push monorepo to `github.com/adithyodw/sasalle-apps`
2. Vercel → Import → **Root Directory:** `sasalle-hotel`
3. Add env vars from `.env.example`
4. Deploy

Full guide: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)

## API

- `GET/POST /api/bookings`
- `GET /api/availability?roomId=&checkIn=&checkOut=`

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)
- [`docs/MOBILE_APP.md`](docs/MOBILE_APP.md)
- [`docs/UX_FLOWS.md`](docs/UX_FLOWS.md)
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)
- Monorepo build spec: [`../docs/BUILD_SPEC.md`](../docs/BUILD_SPEC.md)

## Production build

```bash
npm run build
```

Must pass without errors before deploy.
