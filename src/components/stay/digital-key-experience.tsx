"use client";

import { LuxuryImage } from "@/components/ui/luxury-image";
import { images } from "@/lib/design-tokens";
import { useTranslations } from "next-intl";
import { useState } from "react";

type KeyState = "idle" | "unlocking" | "active";

export function DigitalKeyExperience() {
  const t = useTranslations("guest");
  const [state, setState] = useState<KeyState>("idle");

  const handleUnlock = () => {
    if (state !== "idle") return;
    setState("unlocking");
    window.setTimeout(() => setState("active"), 1400);
  };

  return (
    <div className="relative min-h-[100dvh] bg-charcoal">
      <div className="absolute inset-0 opacity-30">
        <LuxuryImage
          src={images.keyAmbience}
          alt=""
          fill
          priority
          className="object-cover"
          fallbackKey="heroLobby"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/90 to-charcoal" />
      </div>

      <main className="relative z-10 flex min-h-[100dvh] flex-col px-margin pb-32 pt-28">
        <header className="mb-auto">
          <p className="font-label-caps text-gold/80">SASALLE · BATAM</p>
          <h1 className="font-editorial mt-4 text-[36px] text-ivory md:text-[44px]">
            {t("keyTitle")}
          </h1>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-smoke">
            {t("keyBody")}
          </p>
        </header>

        <div className="mx-auto w-full max-w-[340px]">
          <button
            type="button"
            onClick={handleUnlock}
            disabled={state === "unlocking"}
            className="group relative w-full text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/50"
            aria-label={t("keyUnlock")}
          >
            <div
              className={`luxury-transition relative overflow-hidden border ${
                state === "active"
                  ? "border-gold/60"
                  : "border-clay/40 group-hover:border-gold/40"
              }`}
              style={{
                background:
                  "linear-gradient(145deg, #14181c 0%, #0b0d10 48%, #1a1210 100%)",
              }}
            >
              {state === "unlocking" && (
                <div
                  className="absolute inset-x-0 top-0 h-px animate-pulse bg-gradient-to-r from-transparent via-gold to-transparent"
                  aria-hidden
                />
              )}

              <div className="p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-label-caps text-gold/70">SUITE</p>
                    <p className="font-editorial mt-1 text-[42px] leading-none text-ivory">
                      412
                    </p>
                  </div>
                  <div
                    className={`luxury-transition flex h-10 w-10 items-center justify-center border ${
                      state === "active"
                        ? "border-gold/50 bg-gold/10"
                        : "border-clay/30"
                    }`}
                  >
                    <span
                      className={`block h-2 w-2 rounded-full luxury-transition ${
                        state === "active"
                          ? "bg-gold shadow-[0_0_12px_rgba(184,155,94,0.6)]"
                          : "bg-smoke/50"
                      }`}
                    />
                  </div>
                </div>

                <div className="hairline my-8" />

                <p className="font-label-caps text-smoke">HERITAGE COLLECTION</p>
                <p className="mt-2 text-[13px] tracking-wide text-ivory/70">
                  {state === "active" ? t("keyActive") : t("keyTap")}
                </p>

                <div className="mt-10 flex items-end justify-between">
                  <p className="font-label-caps text-[9px] text-clay">VALID · TODAY</p>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    className="opacity-40"
                    aria-hidden
                  >
                    <rect x="4" y="4" width="16" height="16" fill="#B89B5E" />
                    <rect x="28" y="4" width="16" height="16" fill="#F5F1EA" />
                    <rect x="4" y="28" width="16" height="16" fill="#F5F1EA" />
                    <rect x="28" y="28" width="16" height="16" fill="#7A3A2E" />
                  </svg>
                </div>
              </div>

              <div
                className={`luxury-transition overflow-hidden border-t border-clay/20 ${
                  state === "active" ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-8 py-4 text-center font-label-caps text-gold">
                  {t("keyGranted")}
                </p>
              </div>
            </div>
          </button>

          <p className="mt-8 text-center text-[12px] tracking-wide text-smoke/80">
            {t("keySecure")}
          </p>
        </div>
      </main>
    </div>
  );
}
