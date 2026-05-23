"use client";

import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { useGuestPreferencesStore } from "@/stores/guest-preferences-store";
import { useTranslations } from "next-intl";

export default function CheckInPage() {
  const t = useTranslations("guest");
  const { preferences, updatePreferences } = useGuestPreferencesStore();

  return (
    <AppShell>
      <main className="px-margin pb-32 pt-24">
        <h1 className="font-display mb-8 text-[32px] text-primary">{t("checkIn")}</h1>
        <form
          className="mx-auto max-w-md space-y-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="block">
            <span className="font-label-caps mb-2 block text-outline">{t("pillow")}</span>
            <select
              className="w-full border-b border-outline bg-transparent py-3"
              value={preferences.pillow ?? ""}
              onChange={(e) => updatePreferences({ pillow: e.target.value })}
            >
              <option value="">—</option>
              <option value="firm">Firm</option>
              <option value="soft">Soft</option>
              <option value="hypoallergenic">Hypoallergenic</option>
            </select>
          </label>
          <label className="block">
            <span className="font-label-caps mb-2 block text-outline">{t("arrival")}</span>
            <input
              type="time"
              className="w-full border-b border-outline bg-transparent py-3"
              value={preferences.arrivalTime ?? ""}
              onChange={(e) => updatePreferences({ arrivalTime: e.target.value })}
            />
          </label>
          <label className="block">
            <span className="font-label-caps mb-2 block text-outline">{t("dietary")}</span>
            <textarea
              className="w-full border-b border-outline bg-transparent py-3"
              rows={3}
              value={preferences.dietary ?? ""}
              onChange={(e) => updatePreferences({ dietary: e.target.value })}
            />
          </label>
          <Button type="submit">{t("preferences")}</Button>
        </form>
      </main>
    </AppShell>
  );
}
