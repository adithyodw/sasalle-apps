/** Public site configuration — override via environment variables */

export const siteConfig = {
  name: "SASALLE HOTEL",
  location: "Batam, Indonesia",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890",
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com/sasallehotel",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL ?? "https://tiktok.com/@sasallehotel",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com/sasallehotel",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/6281234567890",
  },
  ota: {
    booking: process.env.NEXT_PUBLIC_OTA_BOOKING_URL ?? "https://www.booking.com",
    agoda: process.env.NEXT_PUBLIC_OTA_AGODA_URL ?? "https://www.agoda.com",
    traveloka: process.env.NEXT_PUBLIC_OTA_TRAVELOKA_URL ?? "https://www.traveloka.com",
    tiket: process.env.NEXT_PUBLIC_OTA_TIKET_URL ?? "https://www.tiket.com",
    trip: process.env.NEXT_PUBLIC_OTA_TRIP_URL ?? "https://www.trip.com",
  },
} as const;

export function buildWhatsAppBookingUrl(params: {
  checkIn?: string;
  checkOut?: string;
  roomId?: string;
  guests?: number;
  locale?: string;
}): string {
  const { checkIn, checkOut, roomId, guests, locale = "en" } = params;
  const roomLabel = roomId
    ? roomId.charAt(0).toUpperCase() + roomId.slice(1)
    : "Preferred suite";
  const lines =
    locale === "id"
      ? [
          "Permisi, saya ingin memesan menginap di SASALLE HOTEL.",
          checkIn ? `Kedatangan: ${checkIn}` : null,
          checkOut ? `Keberangkatan: ${checkOut}` : null,
          `Kamar: ${roomLabel}`,
          guests ? `Tamu: ${guests}` : null,
        ]
      : locale === "zh"
        ? [
            "您好，我希望预订 SASALLE HOTEL。",
            checkIn ? `抵达：${checkIn}` : null,
            checkOut ? `离店：${checkOut}` : null,
            `房型：${roomLabel}`,
            guests ? `宾客：${guests}` : null,
          ]
        : [
            "Good day. I would like to reserve a stay at SASALLE HOTEL.",
            checkIn ? `Arrival: ${checkIn}` : null,
            checkOut ? `Departure: ${checkOut}` : null,
            `Room: ${roomLabel}`,
            guests ? `Guests: ${guests}` : null,
          ];

  const text = lines.filter(Boolean).join("\n");
  const number = siteConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
