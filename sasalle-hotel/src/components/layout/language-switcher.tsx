"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { useState } from "react";

const labels: Record<Locale, string> = { en: "EN", id: "ID", zh: "中文" };

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="font-label-caps cursor-pointer text-on-surface-variant transition-opacity active:opacity-70"
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
          <ul className="absolute right-0 top-full z-50 mt-2 min-w-[72px] border border-outline-variant/30 bg-surface-container-lowest shadow-sm">
            {routing.locales.map((loc) => (
              <li key={loc}>
                <button
                  type="button"
                  className={`font-label-caps block w-full px-4 py-3 text-left hover:bg-surface-container-low ${
                    loc === locale ? "text-secondary" : "text-on-surface-variant"
                  }`}
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
