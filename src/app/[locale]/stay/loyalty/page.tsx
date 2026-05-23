import { AppShell } from "@/components/layout/app-shell";
import { LoyaltyCard } from "@/components/loyalty/loyalty-card";
import { getTranslations } from "next-intl/server";

export default async function LoyaltyPage() {
  const t = await getTranslations("loyalty");

  return (
    <AppShell>
      <main className="px-margin pb-32 pt-24">
        <h1 className="font-display mb-4 text-[32px] text-primary">{t("program")}</h1>
        <p className="mb-10 max-w-md text-on-surface-variant">{t("intro")}</p>
        <LoyaltyCard stays={6} nights={18} />
      </main>
    </AppShell>
  );
}
