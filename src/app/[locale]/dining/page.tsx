import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/design-tokens";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function DiningPage() {
  const t = await getTranslations("dining");

  return (
    <AppShell>
      <main className="overflow-x-hidden pb-32 pt-24">
        <section className="relative h-[618px] w-full overflow-hidden">
          <Image
            src={images.diningRoom}
            alt="The Brick & Iron"
            fill
            className="object-cover contrast-110 grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
          <div className="absolute bottom-12 left-0 px-margin">
            <p className="font-label-caps mb-2 text-primary">{t("nowServing")}</p>
            <h2 className="font-display text-[48px] leading-none tracking-tighter text-primary">
              {t("title")}
            </h2>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-2xl px-margin">
          <p className="text-body-lg leading-relaxed text-on-surface-variant">{t("intro")}</p>
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
