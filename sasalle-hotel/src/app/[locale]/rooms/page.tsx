import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { RoomGallery } from "@/components/rooms/room-gallery";
import { getTranslations } from "next-intl/server";

export default async function RoomsPage() {
  const t = await getTranslations("rooms");

  return (
    <AppShell showReservations>
      <main className="overflow-x-hidden pb-32 pt-24 md:pb-0">
        <section className="relative px-margin py-12">
          <div className="pointer-events-none absolute inset-0 clay-pattern-subtle" />
          <div className="relative max-w-4xl">
            <p className="font-label-caps mb-6 tracking-widest text-secondary">{t("label")}</p>
            <h2 className="font-display mb-8 text-[48px] leading-tight text-primary">
              {t("title")}
            </h2>
            <div className="mb-12 h-px w-24 bg-outline-variant" />
          </div>
        </section>
        <RoomGallery />
        <SiteFooter />
      </main>
    </AppShell>
  );
}
