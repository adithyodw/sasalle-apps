import { AppShell } from "@/components/layout/app-shell";
import { BookingFlow } from "@/components/booking/booking-flow";
import { getTranslations } from "next-intl/server";

export default async function BookPage() {
  const t = await getTranslations("book");

  return (
    <AppShell showReservations>
      <main className="min-h-screen bg-surface pb-32 pt-28">
        <div className="mx-auto max-w-xl px-margin">
          <p className="font-label-caps text-smoke">{t("privateBooking")}</p>
          <h1 className="font-editorial mt-4 text-[36px] text-charcoal">{t("title")}</h1>
          <BookingFlow />
        </div>
      </main>
    </AppShell>
  );
}
