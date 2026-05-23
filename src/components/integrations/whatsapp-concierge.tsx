"use client";

import { buildWhatsAppBookingUrl } from "@/lib/config/site";
import { useBookingStore } from "@/stores/booking-store";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

export function WhatsAppConcierge({
  variant = "primary",
  tone = "light",
  className,
}: {
  variant?: "primary" | "ghost";
  tone?: "light" | "dark";
  className?: string;
}) {
  const t = useTranslations("integrations");
  const locale = useLocale();
  const draft = useBookingStore((s) => s.draft);

  const href = buildWhatsAppBookingUrl({
    checkIn: draft.checkIn,
    checkOut: draft.checkOut,
    roomId: draft.roomId,
    guests: draft.guests,
    locale,
  });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex w-full items-center justify-center font-label-caps tracking-[0.1em] px-8 py-4 transition-all duration-500",
        variant === "ghost" && tone === "light" &&
          "border border-outline text-on-surface hover:bg-surface-container-high",
        variant === "ghost" && tone === "dark" &&
          "border border-on-primary-container/40 text-on-primary hover:border-on-primary",
        variant !== "ghost" &&
          "border border-clay/40 bg-surface-muted text-charcoal hover:border-brick",
        className,
      )}
    >
      {t("whatsappCta")}
    </a>
  );
}
