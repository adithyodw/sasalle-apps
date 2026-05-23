import { getTranslations } from "next-intl/server";

const channels = ["Booking.com", "Agoda", "Traveloka"];

export default async function AdminOtaPage() {
  const t = await getTranslations("admin");

  return (
    <div className="p-8">
      <h1 className="font-display mb-6 text-[28px]">{t("ota")}</h1>
      <p className="mb-8 max-w-lg text-smoke">
        OTA integration readiness — channel manager webhooks and rate parity sync.
      </p>
      <ul className="space-y-3">
        {channels.map((ch) => (
          <li
            key={ch}
            className="flex items-center justify-between border border-smoke/20 p-4"
          >
            <span>{ch}</span>
            <span className="font-label-caps text-secondary">Ready</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
