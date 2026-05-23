# SASALLE Mobile App — React Native Blueprint

## Recommendation

**React Native (Expo)** sharing TypeScript types and business logic with the web app via a future `packages/core` workspace.

## Screen map

```
App
├── TabNavigator (bottom, 4 tabs — matches Stitch)
│   ├── HomeStack
│   ├── RoomsStack
│   ├── KeyStack          # Digital room key
│   └── ConciergeStack
├── BookingModal (3 steps, full-screen)
│   ├── Step1: Dates + Room + Package
│   ├── Step2: Guest details
│   └── Step3: Confirm + Apple/Google Pay
└── ProfileStack
    ├── Loyalty (Silver / Gold / Black)
    ├── Saved preferences
    └── Notification settings
```

## Guest flows (native-only enhancements)

| Feature | Implementation |
|---------|----------------|
| Mobile check-in | NFC/QR verification + preference sync |
| Digital key | Wallet pass + BLE room unlock (partner SDK) |
| Push notifications | OneSignal — sparse, editorial tone |
| Biometric auth | Face ID for key & concierge |

## State management

- **Zustand** — mirror `booking-store.ts`
- **TanStack Query** — API availability, bookings, concierge thread
- **MMKV** — persisted guest preferences & locale

## Navigation

- `@react-navigation/native` bottom tabs
- Native stack modals for booking (gesture dismiss)
- Safe area: `react-native-safe-area-context`

## Design parity

- Import SASALLE tokens as `theme.ts` (charcoal, brick, ivory, hijau)
- Bodoni Moda via `expo-google-fonts` or embedded OTF
- **No border radius** on primary surfaces (sharp architectural language)
- Haptic feedback on booking confirm (`expo-haptics` — light impact)

## Shared code (monorepo path)

```
packages/
  core/
    booking/pricing.ts
    booking/types.ts
  i18n/
    messages/*.json
```

## Build targets

- iOS 17+ (safe areas, Dynamic Island padding)
- Android 14+ (Material motion — fade, not bounce)
