# SASALLE — Frontend Architecture

## Philosophy

A **luxury hotel operating system**, not a marketing site. Layout fidelity follows Google Stitch screens; visual elevation follows L'Architecte + SASALLE material identity.

## Directory structure

Application root = repository root (Vercel standard deploy).

```
src/
├── app/
│   ├── [locale]/           # i18n segment
│   │   ├── page.tsx        # Home
│   │   ├── rooms/
│   │   ├── spa/
│   │   ├── dining/
│   │   ├── book/
│   │   ├── stay/           # Guest mobile features
│   │   └── admin/          # Operations (no bottom nav)
│   └── api/                # Route handlers
├── components/
│   ├── layout/             # TopNav, BottomNav, Footer, AppShell
│   ├── ui/                 # Button, EditorialCard
│   ├── home/
│   ├── rooms/
│   └── booking/
├── i18n/                   # next-intl routing & navigation
├── lib/
│   ├── booking/            # types, pricing, availability
│   └── design-tokens.ts
├── stores/                 # Zustand (booking)
└── messages/               # en.json, id.json, zh.json
```

## Component system

| Component | Role |
|-----------|------|
| `AppShell` | Top nav + bottom nav wrapper |
| `TopNav` | Glass header, logo, language, reservations |
| `BottomNav` | Thumb-first: Home, Rooms, Key, Concierge |
| `Button` | primary / secondary / ghost / brick variants |
| `EditorialCard` | Stitch stair-offset cards |
| `HeroSection` | Full-viewport parallax hero |
| `BookingFlow` | 3-step wizard |

## Responsive rules

- **Mobile-first:** `px-margin` (20px → 80px desktop), `pb-safe` for iOS
- **Bottom nav:** visible `< md`; desktop uses header reservations CTA
- **Typography:** Display scales 28px → 64px at `md`
- **Bento grid:** 12-column from `md`

## State

- **Booking:** `useBookingStore` (persisted) — step, dates, room, promo, guest
- **Server:** in-memory bookings array (replace with Supabase/Postgres for production)

## Extension points

1. **Database:** Supabase schema for rooms, bookings, guests, loyalty
2. **Payments:** Stripe / Midtrans at step 3
3. **Concierge:** Wire OpenAI + human handoff queue
4. **OTA:** Webhooks in `/admin/ota` → channel manager
5. **Push:** Firebase/APNs with minimal luxury copy templates
