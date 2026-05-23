"use client";

import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function TopNav({
  showReservations = false,
  variant = "light",
}: {
  showReservations?: boolean;
  variant?: "light" | "dark" | "transparent";
}) {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = variant === "dark" || (variant === "transparent" && scrolled);
  const isTransparent = variant === "transparent" && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex w-full items-center justify-between px-margin pt-safe luxury-transition",
        isTransparent ? "border-transparent bg-transparent py-8" : "border-b py-5",
        isDark
          ? "border-clay/20 bg-charcoal/95 text-ivory backdrop-blur-md"
          : "border-clay/15 bg-ivory/90 text-charcoal backdrop-blur-md",
      )}
    >
      <Link
        href="/book"
        className={cn(
          "font-label-caps luxury-transition",
          isDark ? "text-gold" : "text-brick",
        )}
      >
        {t("book")}
      </Link>

      <Link
        href="/"
        className={cn(
          "font-editorial text-[22px] tracking-[0.12em] luxury-transition md:text-[26px]",
          isDark ? "text-ivory" : "text-charcoal",
        )}
      >
        SASALLE
      </Link>

      <div className="flex items-center gap-5">
        {showReservations && (
          <Link
            href="/book"
            className={cn(
              "font-label-caps hidden md:block luxury-transition",
              isDark ? "text-smoke hover:text-ivory" : "text-on-surface-variant hover:text-charcoal",
            )}
          >
            {t("reservations")}
          </Link>
        )}
        <LanguageSwitcher tone={isDark ? "dark" : "light"} />
      </div>
    </header>
  );
}
