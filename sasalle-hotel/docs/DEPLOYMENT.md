# SASALLE HOTEL — Deployment Guide

## Prerequisites

- Node.js 20+
- GitHub account with access to `adithyodw/sasalle-apps`
- Vercel account

## Local production verification

```bash
cd sasalle-hotel
cp .env.example .env.local
npm install
npm run build
npm run start
```

Build must complete with zero errors before deploying.

## GitHub

```bash
# From repository root (sasalle-apps)
git init
git add .
git commit -m "feat: SASALLE luxury hospitality platform — production ready"
git branch -M main
git remote add origin https://github.com/adithyodw/sasalle-apps.git
git push -u origin main
```

## Vercel

### Option A — Dashboard (recommended)

1. **New Project** → Import `adithyodw/sasalle-apps`
2. **Root Directory:** `sasalle-hotel`
3. **Framework Preset:** Next.js (auto-detected)
4. **Environment variables:** copy from `.env.example`
5. Set `NEXT_PUBLIC_SITE_URL` to your production URL after first deploy
6. Deploy

### Option B — CLI

```bash
npm i -g vercel
cd sasalle-hotel
vercel
vercel --prod
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical site URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | E.164 digits only |
| `NEXT_PUBLIC_WHATSAPP_URL` | Optional | Override wa.me base |
| `NEXT_PUBLIC_*_URL` (social/OTA) | Optional | Partner deep links |

## Region

`vercel.json` defaults to `sin1` (Singapore) for Batam proximity. Change in Vercel project settings if needed.

## Post-deploy checklist

- [ ] Home, rooms, spa, dining render correctly
- [ ] `/book` calendar + WhatsApp CTA opens with prefilled message
- [ ] Footer OTA + social links resolve
- [ ] `/id` and `/zh` locales load without layout shift
- [ ] `/api/bookings` POST creates reservation
