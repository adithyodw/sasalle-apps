"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { images } from "@/lib/design-tokens";
import { useBookingStore } from "@/stores/booking-store";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

const rooms = [
  {
    id: "heritage" as const,
    collectionKey: "collection1" as const,
    titleKey: "heritage" as const,
    bodyKey: "heritageBody" as const,
    price: 850,
    image: images.heritageSuite,
    reverse: false,
    primary: true,
  },
  {
    id: "obsidian" as const,
    collectionKey: "collection2" as const,
    titleKey: "obsidian" as const,
    bodyKey: "obsidianBody" as const,
    price: 620,
    image: images.obsidianStudio,
    reverse: true,
    primary: false,
  },
  {
    id: "ivory" as const,
    collectionKey: "collection3" as const,
    titleKey: "ivory" as const,
    bodyKey: "ivoryBody" as const,
    price: 1150,
    image: images.ivoryPavilion,
    reverse: false,
    primary: true,
  },
];

export function RoomGallery() {
  const t = useTranslations("rooms");
  const selectRoom = useBookingStore((s) => s.selectRoom);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".room-card");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );
    cards.forEach((card) => {
      card.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-1000");
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={cardsRef} className="space-y-24 px-margin md:space-y-48">
      {rooms.map((room) => (
        <article
          key={room.id}
          className={`room-card group flex flex-col items-center gap-12 ${
            room.reverse ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-outline-variant/20 md:w-3/5">
            <Image
              src={room.image}
              alt={t(room.titleKey)}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <div
            className={`flex w-full flex-col md:w-2/5 ${
              room.reverse ? "items-start text-left md:items-end md:text-right" : "items-start text-left"
            }`}
          >
            <span className="font-label-caps mb-2 text-secondary">{t(room.collectionKey)}</span>
            <h3 className="font-display mb-4 text-[32px] text-primary">{t(room.titleKey)}</h3>
            <p className="mb-8 max-w-sm text-body-md leading-relaxed text-on-surface-variant">
              {t(room.bodyKey)}
            </p>
            <div
              className={`flex flex-col gap-6 ${
                room.reverse ? "items-start md:items-end" : "items-start"
              }`}
            >
              <span className="font-display text-[24px] italic text-primary">
                {t("from")} ${room.price}
              </span>
              <Link
                href="/book"
                onClick={() => selectRoom(room.id)}
              >
                <Button variant={room.primary ? "primary" : "secondary"}>
                  {t("viewSanctuary")}
                  {room.primary && (
                    <span className="material-symbols-outlined ml-2 text-[18px]">
                      arrow_right_alt
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
