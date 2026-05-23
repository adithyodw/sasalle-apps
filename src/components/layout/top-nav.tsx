"use client";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";

export function TopNav({ showReservations = false }: { showReservations?: boolean }) {
  const t = useTranslations("nav");

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-outline-variant/30 bg-surface/90 px-margin py-6 backdrop-blur-md pt-safe">
      <button
        type="button"
        aria-label="Menu"
        className="cursor-pointer transition-opacity active:opacity-70"
      >
        <span className="material-symbols-outlined text-primary">menu</span>
      </button>
      <Link
        href="/"
        className="font-display text-[28px] tracking-tight text-primary md:text-[64px] md:leading-[1.1]"
      >
        SASALLE
      </Link>
      <div className="flex items-center gap-4">
        {showReservations && (
          <Link
            href="/book"
            className="font-label-caps hidden text-on-surface-variant transition-colors hover:text-secondary md:block"
          >
            {t("reservations")}
          </Link>
        )}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
