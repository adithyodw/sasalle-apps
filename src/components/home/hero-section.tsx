"use client";

import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Link } from "@/i18n/navigation";
import { images } from "@/lib/design-tokens";
import { useTranslations } from "next-intl";

export function HeroSection({
  established,
  title,
}: {
  established: string;
  title: string;
}) {
  const t = useTranslations("nav");

  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-charcoal">
      <LuxuryImage
        src={images.heroLobby}
        alt="SASALLE Hotel"
        fill
        priority
        className="scale-105 object-cover opacity-90"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-margin pb-36 pt-24 md:pb-28">
        <p className="font-label-caps text-gold/90">{established}</p>
        <h2 className="font-editorial mt-6 max-w-lg text-[44px] leading-[1.05] text-ivory md:text-[72px]">
          {title}
        </h2>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="/book">
            <Button variant="ivory">{t("book")}</Button>
          </Link>
          <Link
            href="/rooms"
            className="font-label-caps text-ivory/70 luxury-transition hover:text-ivory"
          >
            {t("rooms")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
