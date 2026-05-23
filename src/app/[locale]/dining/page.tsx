import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { images } from "@/lib/design-tokens";
import { getTranslations } from "next-intl/server";

export default async function DiningPage() {
  const t = await getTranslations("dining");

  return (
    <AppShell showReservations>
      <main className="overflow-x-hidden bg-surface pb-32">
        <section className="relative h-[70vh] min-h-[480px] bg-charcoal">
          <LuxuryImage
            src={images.diningRoom}
            alt="The Brick & Iron"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-margin pb-14">
            <p className="font-label-caps text-gold">{t("nowServing")}</p>
            <h2 className="font-editorial mt-3 text-[48px] text-ivory md:text-[60px]">
              {t("title")}
            </h2>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-margin section-pad">
          <p className="text-[17px] leading-[1.85] text-on-surface-variant">{t("intro")}</p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Button variant="primary">{t("reservation")}</Button>
            <Button variant="secondary">{t("menu")}</Button>
          </div>
        </section>
        <SiteFooter />
      </main>
    </AppShell>
  );
}
