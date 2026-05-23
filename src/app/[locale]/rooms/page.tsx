import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { RoomCarousel } from "@/components/rooms/room-carousel";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { images } from "@/lib/design-tokens";
import { getTranslations } from "next-intl/server";

export default async function RoomsPage() {
  const t = await getTranslations("rooms");

  return (
    <AppShell showReservations>
      <main className="overflow-x-hidden bg-surface pb-32">
        <section className="relative h-[55vh] min-h-[400px] bg-charcoal">
          <LuxuryImage
            src={images.staircase}
            alt=""
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute bottom-0 left-0 right-0 px-margin pb-12 pt-24">
            <p className="font-label-caps text-gold">{t("label")}</p>
            <h2 className="font-editorial mt-4 max-w-xl text-[40px] text-ivory md:text-[56px]">
              {t("title")}
            </h2>
          </div>
        </section>

        <section className="section-pad">
          <RoomCarousel />
        </section>

        <SiteFooter />
      </main>
    </AppShell>
  );
}
