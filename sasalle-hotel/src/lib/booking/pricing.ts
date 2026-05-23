import { differenceInCalendarDays, parseISO, isWithinInterval } from "date-fns";
import { PACKAGES, PROMO_CODES, ROOMS, type BookingDraft } from "./types";

const PEAK_SEASONS = [
  { start: "2026-06-01", end: "2026-08-31", multiplier: 1.2 },
  { start: "2026-12-15", end: "2027-01-05", multiplier: 1.35 },
];

export function getSeasonMultiplier(checkIn: string): number {
  const date = parseISO(checkIn);
  for (const season of PEAK_SEASONS) {
    if (
      isWithinInterval(date, {
        start: parseISO(season.start),
        end: parseISO(season.end),
      })
    ) {
      return season.multiplier;
    }
  }
  return 1;
}

export function calculateNights(checkIn: string, checkOut: string): number {
  return Math.max(1, differenceInCalendarDays(parseISO(checkOut), parseISO(checkIn)));
}

export function isRoomAvailable(
  roomId: BookingDraft["roomId"],
  checkIn: string,
  checkOut: string,
  existingBookings: { roomId: string; checkIn: string; checkOut: string }[] = [],
): boolean {
  const room = ROOMS.find((r) => r.id === roomId);
  if (!room) return false;

  const overlapping = existingBookings.filter(
    (b) =>
      b.roomId === roomId &&
      parseISO(checkIn) < parseISO(b.checkOut) &&
      parseISO(checkOut) > parseISO(b.checkIn),
  );

  return overlapping.length < room.totalUnits;
}

export function calculateTotal(draft: BookingDraft): {
  subtotal: number;
  discount: number;
  total: number;
  nights: number;
  nightlyRate: number;
} {
  const room = ROOMS.find((r) => r.id === draft.roomId)!;
  const nights = calculateNights(draft.checkIn, draft.checkOut);
  const season = getSeasonMultiplier(draft.checkIn);
  const pkg = PACKAGES.find((p) => p.id === draft.packageId);
  const nightlyRate = Math.round(room.baseRate * season * (pkg?.multiplier ?? 1));
  const subtotal = nightlyRate * nights;

  let discount = 0;
  if (draft.promoCode) {
    const promo = PROMO_CODES.find(
      (p) => p.code.toUpperCase() === draft.promoCode?.toUpperCase(),
    );
    if (promo) discount = Math.round(subtotal * (promo.discountPercent / 100));
  }

  return { subtotal, discount, total: subtotal - discount, nights, nightlyRate };
}
