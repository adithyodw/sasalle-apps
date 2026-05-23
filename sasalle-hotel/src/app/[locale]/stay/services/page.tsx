"use client";

import { AppShell } from "@/components/layout/app-shell";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const services = [
  { key: "transfer" as const, href: "/stay/concierge" },
  { key: "dining" as const, href: "/stay/concierge" },
  { key: "housekeeping" as const, href: "/stay/concierge" },
  { key: "checkIn" as const, href: "/stay/check-in" },
  { key: "loyalty" as const, href: "/stay/loyalty" },
];

export default function GuestServicesPage() {
  const t = useTranslations("guest");

  return (
    <AppShell>
      <main className="px-margin pb-32 pt-24">
        <h1 className="font-display mb-8 text-[32px] text-primary">{t("servicesTitle")}</h1>
        <ul className="divide-y divide-outline-variant/30 border border-outline-variant/20">
          {services.map((s) => (
            <li key={s.key}>
              <Link
                href={s.href}
                className="flex items-center justify-between px-6 py-8 transition-colors hover:bg-surface-container-low"
              >
                <span className="font-display text-[20px] text-on-surface">{t(s.key)}</span>
                <span className="material-symbols-outlined text-outline">arrow_forward</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </AppShell>
  );
}
