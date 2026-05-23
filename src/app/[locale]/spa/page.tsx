import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Link } from "@/i18n/navigation";
import { images } from "@/lib/design-tokens";
import { getTranslations } from "next-intl/server";

export default async function SpaPage() {
  const t = await getTranslations("spa");

  const rituals = [
    { title: t("thermal"), body: t("thermalBody") },
    { title: t("clay"), body: t("clayBody") },
  ];

  return (
    <AppShell showReservations>
      <main className="overflow-x-hidden bg-surface pb-32">
        <section className="relative h-[65vh] min-h-[440px] bg-charcoal">
          <LuxuryImage src={images.spaPool} alt="Spa" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-charcoal/20" />
          <div className="absolute bottom-0 left-0 right-0 px-margin pb-12 pt-24">
            <span className="font-label-caps text-gold">{t("sanctuary")}</span>
            <h2 className="font-editorial mt-4 text-[44px] text-ivory md:text-[56px]">
              {t("heroTitle")}
            </h2>
          </div>
        </section>

        <section className="mx-auto max-w-2xl px-margin py-20 text-center">
          <div className="hairline mx-auto w-12" />
          <p className="mt-10 text-[17px] leading-[1.85] text-on-surface-variant">{t("intro")}</p>
        </section>

        <section className="px-margin pb-20">
          <p className="font-label-caps mb-12 text-center text-smoke">{t("rituals")}</p>
          <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-2">
            {rituals.map((ritual, i) => (
              <article
                key={ritual.title}
                className={`border border-clay/15 bg-ivory p-10 ${i === 1 ? "md:mt-12" : ""}`}
              >
                <h4 className="font-editorial text-[28px] text-charcoal">{ritual.title}</h4>
                <p className="mt-4 text-[15px] leading-relaxed text-on-surface-variant">
                  {ritual.body}
                </p>
                <Link href="/book" className="mt-8 inline-block">
                  <Button variant="primary">{t("reserve")}</Button>
                </Link>
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </main>
    </AppShell>
  );
}
