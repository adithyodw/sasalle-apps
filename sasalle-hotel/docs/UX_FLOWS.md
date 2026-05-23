# SASALLE — UX Flows

## Booking (max 3 steps)

```mermaid
flowchart LR
  A[Select dates + room] --> B{Available?}
  B -->|No| A
  B -->|Yes| C[Guest details]
  C --> D[Confirm + policy]
  D --> E[Confirmation + Key prep]
```

1. **Dates & Room** — calendar inputs, room selector, optional package & promo, live price with seasonal note
2. **Guest Details** — name, email, phone (minimal fields)
3. **Confirmation** — total, cancellation policy accordion, confirm CTA

**Rules:** No step 4. Promo validation inline. Unavailable dates block continue.

## Check-in

```mermaid
flowchart TD
  P[Pre-arrival preferences] --> A[Arrival day notification]
  A --> M[Mobile check-in form]
  M --> K[Digital key activated]
```

- Pillow, arrival time, dietary notes
- Sync to housekeeping & F&B before arrival

## Concierge (AI + human)

```mermaid
flowchart TD
  G[Guest message] --> AI[AI acknowledgment]
  AI --> Q{Complex request?}
  Q -->|Yes| H[Human handoff]
  Q -->|No| R[Resolved in-thread]
```

Quick actions: Airport transfer, In-room dining, Housekeeping

## Admin operations

Dashboard → Bookings / Rooms / CRM / Revenue / OTA channels

OTA row items marked **Ready** for Booking.com, Agoda, Traveloka webhook integration.

## Loyalty tiers

| Tier | Signal |
|------|--------|
| Silver | 1–3 stays |
| Gold | 4–9 stays |
| Black | 10+ stays |

Benefits surface on Key screen and check-in (future).
