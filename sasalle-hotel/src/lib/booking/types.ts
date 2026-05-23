export type RoomType = "heritage" | "obsidian" | "ivory";

export interface RoomInventory {
  id: RoomType;
  baseRate: number;
  totalUnits: number;
}

export interface BookingDraft {
  roomId: RoomType;
  checkIn: string;
  checkOut: string;
  guests: number;
  promoCode?: string;
  packageId?: string;
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
}

export interface PromoCode {
  code: string;
  discountPercent: number;
  validUntil: string;
}

export const ROOMS: RoomInventory[] = [
  { id: "heritage", baseRate: 850, totalUnits: 8 },
  { id: "obsidian", baseRate: 620, totalUnits: 12 },
  { id: "ivory", baseRate: 1150, totalUnits: 4 },
];

export const PROMO_CODES: PromoCode[] = [
  { code: "STILLNESS15", discountPercent: 15, validUntil: "2026-12-31" },
  { code: "BATAM10", discountPercent: 10, validUntil: "2026-09-30" },
];

export const PACKAGES = [
  { id: "spa-stay", multiplier: 1.25, labelKey: "packageSpa" as const },
  { id: "dining-terrace", multiplier: 1.15, labelKey: "packageDining" as const },
];
