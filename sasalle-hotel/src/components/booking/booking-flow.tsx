"use client";

import { LuxuryCalendar } from "@/components/booking/luxury-calendar";
import { OtaPartnersSection } from "@/components/booking/ota-section";
import { WhatsAppConcierge } from "@/components/integrations/whatsapp-concierge";
import { Button } from "@/components/ui/button";
import { calculateTotal, isRoomAvailable } from "@/lib/booking/pricing";
import { PACKAGES, ROOMS } from "@/lib/booking/types";
import { useBookingStore } from "@/stores/booking-store";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

export function BookingFlow() {
  const t = useTranslations("book");
  const ti = useTranslations("integrations");
  const { step, draft, setStep, updateDraft, reset } = useBookingStore();
  const [promoInput, setPromoInput] = useState(draft.promoCode ?? "");
  const [promoMsg, setPromoMsg] = useState("");

  const pricing = useMemo(() => {
    if (!draft.checkIn || !draft.checkOut || !draft.roomId) return null;
    return calculateTotal({
      roomId: draft.roomId,
      checkIn: draft.checkIn,
      checkOut: draft.checkOut,
      guests: draft.guests ?? 2,
      promoCode: draft.promoCode,
      packageId: draft.packageId,
    });
  }, [draft]);

  const available =
    draft.checkIn &&
    draft.checkOut &&
    draft.roomId &&
    isRoomAvailable(draft.roomId, draft.checkIn, draft.checkOut);

  const steps = [t("step1"), t("step2"), t("step3")];

  return (
    <div className="mx-auto max-w-lg px-margin py-8">
      <h1 className="font-display mb-8 text-[32px] text-primary">{t("title")}</h1>

      <ol className="mb-10 flex gap-2">
        {steps.map((label, i) => (
          <li
            key={label}
            className={`flex-1 border-b-2 py-2 font-label-caps text-center ${
              step === i + 1 ? "border-primary text-primary" : "border-outline-variant/30 text-outline"
            }`}
          >
            {label}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <div className="space-y-6">
          <div>
            <p className="font-label-caps mb-3 text-outline">{t("selectDates")}</p>
            <LuxuryCalendar
              checkIn={draft.checkIn}
              checkOut={draft.checkOut}
              onSelectRange={(checkIn, checkOut) =>
                updateDraft({ checkIn, checkOut: checkOut || undefined })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="font-label-caps mb-2 block text-outline">{t("checkIn")}</span>
              <input
                type="date"
                className="w-full border-b border-outline bg-transparent py-3 outline-none"
                value={draft.checkIn ?? ""}
                onChange={(e) => updateDraft({ checkIn: e.target.value })}
              />
            </label>
            <label className="block">
              <span className="font-label-caps mb-2 block text-outline">{t("checkOut")}</span>
              <input
                type="date"
                className="w-full border-b border-outline bg-transparent py-3 outline-none"
                value={draft.checkOut ?? ""}
                onChange={(e) => updateDraft({ checkOut: e.target.value })}
              />
            </label>
          </div>
          <div className="border-t border-outline-variant/20 pt-6">
            <p className="font-label-caps mb-3 text-outline">{ti("whatsappTitle")}</p>
            <WhatsAppConcierge />
          </div>
          <label className="block">
            <span className="font-label-caps mb-2 block text-outline">{t("guests")}</span>
            <input
              type="number"
              min={1}
              max={4}
              className="w-full border-b border-outline bg-transparent py-3 outline-none"
              value={draft.guests ?? 2}
              onChange={(e) => updateDraft({ guests: Number(e.target.value) })}
            />
          </label>
          <fieldset>
            <legend className="font-label-caps mb-3 text-outline">Room</legend>
            <div className="space-y-2">
              {ROOMS.map((room) => (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => updateDraft({ roomId: room.id })}
                  className={`w-full border px-4 py-3 text-left transition-colors ${
                    draft.roomId === room.id
                      ? "border-primary bg-surface-container-low"
                      : "border-outline-variant/30"
                  }`}
                >
                  <span className="font-display capitalize text-primary">{room.id}</span>
                  <span className="float-right text-on-surface-variant">
                    ${room.baseRate}/night
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="font-label-caps mb-3 text-outline">{t("packages")}</legend>
            {PACKAGES.map((pkg) => (
              <button
                key={pkg.id}
                type="button"
                onClick={() =>
                  updateDraft({
                    packageId: draft.packageId === pkg.id ? undefined : pkg.id,
                  })
                }
                className={`mb-2 w-full border px-4 py-3 text-left ${
                  draft.packageId === pkg.id ? "border-secondary" : "border-outline-variant/30"
                }`}
              >
                {t(pkg.labelKey)}
              </button>
            ))}
          </fieldset>
          <div className="flex gap-2">
            <input
              placeholder={t("promo")}
              className="flex-1 border-b border-outline bg-transparent py-2"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
            />
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                updateDraft({ promoCode: promoInput });
                setPromoMsg(promoInput ? "Applied" : "");
              }}
            >
              {t("apply")}
            </Button>
          </div>
          {promoMsg && <p className="text-sm text-secondary">{promoMsg}</p>}
          <p className="text-sm text-on-surface-variant">{t("seasonalNote")}</p>
          {draft.checkIn && draft.checkOut && (
            <p
              className={`font-label-caps ${available ? "text-secondary" : "text-error"}`}
            >
              {available ? t("available") : t("unavailable")}
            </p>
          )}
          {pricing && (
            <p className="font-display text-[24px] text-primary">
              ${pricing.total}{" "}
              <span className="text-sm text-on-surface-variant">
                ({pricing.nights} nights)
              </span>
            </p>
          )}
          <Button
            type="button"
            disabled={!available || !draft.checkIn || !draft.checkOut}
            onClick={() => setStep(2)}
          >
            {t("continue")}
          </Button>
          <OtaPartnersSection />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <label className="block">
            <span className="font-label-caps mb-2 block text-outline">Name</span>
            <input
              className="w-full border-b border-outline bg-transparent py-3"
              value={draft.guestName ?? ""}
              onChange={(e) => updateDraft({ guestName: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="font-label-caps mb-2 block text-outline">Email</span>
            <input
              type="email"
              className="w-full border-b border-outline bg-transparent py-3"
              value={draft.guestEmail ?? ""}
              onChange={(e) => updateDraft({ guestEmail: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="font-label-caps mb-2 block text-outline">Phone</span>
            <input
              type="tel"
              className="w-full border-b border-outline bg-transparent py-3"
              value={draft.guestPhone ?? ""}
              onChange={(e) => updateDraft({ guestPhone: e.target.value })}
            />
          </label>
          <div className="flex gap-4">
            <Button type="button" variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button
              type="button"
              disabled={!draft.guestName || !draft.guestEmail}
              onClick={() => setStep(3)}
            >
              {t("continue")}
            </Button>
          </div>
        </div>
      )}

      {step === 3 && pricing && (
        <div className="space-y-6">
          <div className="border border-outline-variant/30 p-6">
            <p className="font-display text-[24px] capitalize text-primary">{draft.roomId}</p>
            <p className="text-on-surface-variant">
              {draft.checkIn} → {draft.checkOut}
            </p>
            <p className="mt-4 font-display text-[32px] text-primary">${pricing.total}</p>
          </div>
          <details className="border border-outline-variant/20 p-4">
            <summary className="font-label-caps cursor-pointer">{t("cancellation")}</summary>
            <p className="mt-3 text-sm text-on-surface-variant">{t("cancellationBody")}</p>
          </details>
          <Button
            type="button"
            onClick={async () => {
              await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(draft),
              });
              reset();
              setStep(1);
            }}
          >
            {t("confirm")}
          </Button>
        </div>
      )}
    </div>
  );
}
