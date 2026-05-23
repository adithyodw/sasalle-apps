"use client";

import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Link } from "@/i18n/navigation";
import { roomCatalog } from "@/lib/rooms/catalog";
import { useBookingStore } from "@/stores/booking-store";
import { useTranslations } from "next-intl";
import { useRef } from "react";

export function RoomCarousel() {
  const t = useTranslations("rooms");
  const selectRoom = useBookingStore((s) => s.selectRoom);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="snap-x-mandatory hide-scrollbar flex gap-5 overflow-x-auto px-margin pb-4"
      >
        {roomCatalog.map((room) => (
          <article
            key={room.id}
            className="snap-center w-[88vw] shrink-0 md:w-[min(520px,42vw)]"
          >
            <Link
              href={`/rooms/${room.slug}`}
              className="group block"
              onClick={() => selectRoom(room.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                <LuxuryImage
                  src={room.image}
                  alt={t(room.titleKey)}
                  fill
                  className="luxury-transition group-active:scale-[1.02]"
                  sizes="90vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="font-label-caps text-gold">{t(room.collectionKey)}</span>
                  <h3 className="font-editorial mt-2 text-[32px] text-ivory">
                    {t(room.titleKey)}
                  </h3>
                  <p className="mt-3 font-editorial text-[20px] italic text-ivory/80">
                    {t("from")} ${room.price}
                  </p>
                </div>
              </div>
            </Link>
            <div className="mt-6 flex gap-3">
              <Link href={`/rooms/${room.slug}`} className="flex-1">
                <Button variant="secondary" className="w-full">
                  {t("viewSanctuary")}
                </Button>
              </Link>
              <Link href="/book" onClick={() => selectRoom(room.id)}>
                <Button variant="primary">{t("reserve")}</Button>
              </Link>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 px-margin text-center font-label-caps text-smoke">
        {t("swipeHint")}
      </p>
    </div>
  );
}
