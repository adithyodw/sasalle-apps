import { AppShell } from "@/components/layout/app-shell";
import { getTranslations } from "next-intl/server";

export default async function DigitalKeyPage() {
  const t = await getTranslations("guest");

  return (
    <AppShell>
      <main className="flex min-h-[80dvh] flex-col items-center justify-center px-margin pb-32 pt-24">
        <div className="w-full max-w-sm border border-outline bg-charcoal p-8 text-ivory">
          <p className="font-label-caps mb-4 text-gold">SASALLE · BATAM</p>
          <h1 className="font-display mb-4 text-[32px]">{t("keyTitle")}</h1>
          <p className="mb-8 text-body-md text-smoke">{t("keyBody")}</p>
          <div className="flex aspect-square items-center justify-center border border-gold/40 bg-ivory/5">
            <span className="material-symbols-outlined text-6xl text-gold">qr_code_2</span>
          </div>
          <p className="font-label-caps mt-6 text-center text-gold">SUITE 412 · HERITAGE</p>
        </div>
      </main>
    </AppShell>
  );
}
