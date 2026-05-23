"use client";

import { images } from "@/lib/design-tokens";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function HeroSection({
  established,
  title,
}: {
  established: string;
  title: string;
}) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      const el = imgRef.current?.querySelector("img");
      if (el) el.style.transform = `translateY(${scrollPos * 0.4}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      <div ref={imgRef} className="absolute inset-0">
        <Image
          src={images.heroLobby}
          alt="SASALLE Hotel Lobby"
          fill
          priority
          className="object-cover grayscale-[0.2]"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/20" />
      <div className="absolute bottom-24 left-0 px-margin max-w-xl">
        <p className="font-label-caps mb-4 text-on-surface-variant">{established}</p>
        <h2 className="font-display text-[48px] leading-tight text-primary">{title}</h2>
      </div>
    </section>
  );
}
