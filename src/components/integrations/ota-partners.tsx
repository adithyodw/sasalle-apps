import { siteConfig } from "@/lib/config/site";
import { getTranslations } from "next-intl/server";

const partners = [
  { id: "booking", href: siteConfig.ota.booking, labelKey: "booking" as const },
  { id: "agoda", href: siteConfig.ota.agoda, labelKey: "agoda" as const },
  { id: "traveloka", href: siteConfig.ota.traveloka, labelKey: "traveloka" as const },
  { id: "tiket", href: siteConfig.ota.tiket, labelKey: "tiket" as const },
  { id: "trip", href: siteConfig.ota.trip, labelKey: "trip" as const },
];

export async function OtaPartners({
  compact = false,
  variant = "light",
}: {
  compact?: boolean;
  variant?: "light" | "dark";
}) {
  const t = await getTranslations("integrations");
  const isDark = variant === "dark";
  const labelClass = isDark ? "text-on-primary-container/70" : "text-outline";
  const titleClass = isDark ? "text-on-primary" : "text-primary";
  const btnClass = isDark
    ? "border-on-primary-container/30 text-on-primary-container hover:border-on-primary hover:text-on-primary"
    : "border-outline-variant/40 text-on-surface-variant hover:border-primary hover:text-primary";

  return (
    <section className={compact ? "" : "border-t border-outline-variant/20 pt-12"}>
      {!compact && (
        <>
          <p className={`font-label-caps mb-2 ${labelClass}`}>{t("otaSection")}</p>
          <h3 className={`font-display mb-6 text-[24px] ${titleClass}`}>{t("otaTitle")}</h3>
        </>
      )}
      <div className="flex flex-wrap gap-3">
        {partners.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-5 py-3 font-label-caps transition-colors ${btnClass}`}
          >
            {t(p.labelKey)}
          </a>
        ))}
      </div>
    </section>
  );
}
