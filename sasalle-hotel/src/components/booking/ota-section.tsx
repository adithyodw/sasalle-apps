"use client";

import { siteConfig } from "@/lib/config/site";
import { useTranslations } from "next-intl";

const partners = [
  { id: "booking", href: siteConfig.ota.booking, labelKey: "booking" as const },
  { id: "agoda", href: siteConfig.ota.agoda, labelKey: "agoda" as const },
  { id: "traveloka", href: siteConfig.ota.traveloka, labelKey: "traveloka" as const },
  { id: "tiket", href: siteConfig.ota.tiket, labelKey: "tiket" as const },
  { id: "trip", href: siteConfig.ota.trip, labelKey: "trip" as const },
];

export function OtaPartnersSection() {
  const t = useTranslations("integrations");

  return (
    <section className="border-t border-outline-variant/20 pt-8">
      <p className="font-label-caps mb-2 text-outline">{t("otaSection")}</p>
      <h3 className="font-display mb-4 text-[20px] text-primary">{t("otaTitle")}</h3>
      <div className="flex flex-wrap gap-2">
        {partners.map((p) => (
          <a
            key={p.id}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-outline-variant/40 px-4 py-2 font-label-caps text-[10px] text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
          >
            {t(p.labelKey)}
          </a>
        ))}
      </div>
    </section>
  );
}
