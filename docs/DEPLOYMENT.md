# SASALLE HOTEL — Deployment Guide

## Vercel (standard GitHub deploy)

The Next.js app lives at the **repository root**. Vercel auto-detects Next.js — no monorepo subdirectory setting required.

1. Import **adithyodw/sasalle-apps** at [vercel.com/new](https://vercel.com/new)
2. **Root Directory:** `.` (default)
3. **Framework Preset:** Next.js
4. **Build Command:** `npm run build` (default)
5. **Output:** managed by Vercel (default)
6. Add environment variables from `.env.example`
7. Deploy

If you previously set Root Directory to `sasalle-hotel`, **clear it** (set back to `.`) and redeploy.

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production | e.g. `https://sasalle-apps.vercel.app` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | E.164 digits only |
| Social / OTA URLs | Optional | See `.env.example` |

## Local verification

```bash
cp .env.example .env.local
npm install
npm run build
npm run start
```

## Region

`vercel.json` uses `sin1` (Singapore) for Batam proximity.

## Post-deploy checklist

- [ ] `/` loads home page (not 404)
- [ ] `/book` booking flow works
- [ ] `/id` and `/zh` locales work
- [ ] WhatsApp concierge link opens with prefilled message
