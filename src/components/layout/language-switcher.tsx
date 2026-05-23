"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { useState } from "react";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = { en: "EN", id: "ID", zh: "中文" };

export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "font-label-caps luxury-transition",
          tone === "dark" ? "text-smoke hover:text-ivory" : "text-on-surface-variant hover:text-charcoal",
        )}
      >
        {labels[locale]}
      </button>
      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40"
            aria-label="Close"
            onClick={() => setOpen(false)}
          />
          <ul
            className={cn(
              "absolute right-0 top-full z-50 mt-3 min-w-[80px] border",
              tone === "dark"
                ? "border-clay/30 bg-charcoal"
                : "border-clay/20 bg-ivory shadow-sm",
            )}
          >
            {routing.locales.map((loc) => (
              <li key={loc}>
                <button
                  type="button"
                  className={cn(
                    "font-label-caps block w-full px-4 py-3 text-left luxury-transition",
                    loc === locale
                      ? "text-gold"
                      : tone === "dark"
                        ? "text-smoke hover:text-ivory"
                        : "text-on-surface-variant hover:text-charcoal",
                  )}
                  onClick={() => {
                    router.replace(pathname, { locale: loc });
                    setOpen(false);
                  }}
                >
                  {labels[loc]}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
