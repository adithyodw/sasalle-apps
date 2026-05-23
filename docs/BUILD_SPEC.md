# SASALLE HOTEL — Ultra-Luxury Build Specification

Production build prompt for Claude Opus 4.7 / engineering agents. This document is the source of truth for scope and quality bar.

## Project

**SASALLE HOTEL** — Batam, Indonesia

Not a standard website. A world-class luxury hospitality digital ecosystem inspired by Aman, Bulgari, Cheval Blanc, Ritz-Carlton Reserve, and French boutique palace architecture.

## Core objective

From Google Stitch design reference:

- Rebuild UI into production-ready components
- Preserve layout structure and spacing logic
- Upgrade to ultra-luxury French European standard
- Improve UX, transitions, hierarchy
- Scalable web + mobile-ready architecture
- **Full production deployment readiness (GitHub + Vercel)**

## Design rules

**MUST:** French editorial luxury, architectural minimalism, museum-grade hierarchy.

**NEVER:** Emojis, playful UI, cheap elements, cartoon/consumer styling.

### Material identity

| Token | Hex / role |
|-------|------------|
| Charcoal Black | `#0B0D10` |
| Deep Brick Red | `#7A3A2E` |
| Warm Terracotta | `#A0523D` |
| Soft Ivory | `#F5F1EA` |
| Muted Gold | `#B89B5E` |
| Smoke Grey | `#A7A7A7` |
| Hijau Nyonya | Heritage accent |
| Clay Roster | Structural UI, patterns, dividers |

## Mobile-first

- iOS + Android safe areas
- Gesture navigation
- Thumb-first UX
- Minimal bottom navigation
- Concierge-like experience

## System features (implemented in `sasalle-hotel/`)

- Booking: availability, seasonal pricing, packages, promo, cancellation UI
- Guest: pre-arrival prefs, concierge (AI + human), transfer/dining/housekeeping
- Mobile-ready: check-in, digital key, loyalty tiers, preference memory
- Loyalty: Silver / Gold / Black + VIP upgrade logic
- i18n: EN, ID, ZH — full UI, cultural tone, no layout shift

## Integrations

- **Social:** Instagram, TikTok, Facebook, WhatsApp — icon-only, discreet
- **OTA:** Booking.com, Agoda, Traveloka, Tiket.com, Trip.com — minimal partner buttons
- **WhatsApp Concierge:** “Book via Concierge” with pre-filled message

## Deployment

- GitHub: `https://github.com/adithyodw/sasalle-apps`
- Vercel: root directory `sasalle-hotel`, production build passing
- `.env.example` included

## Copy tone

Minimal, architectural, quiet luxury.

Examples:

- “A quiet sanctuary shaped by light and proportion.”
- “Where European restraint meets tropical material heritage.”
- “An experience defined by silence, texture, and time.”
