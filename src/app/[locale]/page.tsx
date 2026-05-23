import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Link } from "@/i18n/navigation";
import { images } from "@/lib/design-tokens";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("home");

  const principles = [
    { num: "01", label: t("principle1") },
    { num: "02", label: t("principle2") },
    { num: "03", label: t("principle3") },
  ];

  return (
    <AppShell navVariant="transparent">
      <main className="overflow-x-hidden">
        <HeroSection established={t("established")} title={t("heroTitle")} />

        <section className="section-pad px-margin bg-surface">
          <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-4">
              <p className="font-label-caps text-smoke">{t("section01")}</p>
              <h3 className="font-editorial mt-6 text-[36px] text-charcoal md:text-[44px]">
                {t("ritualTitle")}
              </h3>
              <div className="hairline mt-8 w-16" />
              <p className="mt-8 max-w-sm text-[16px] leading-[1.8] text-on-surface-variant">
                {t("ritualBody")}
              </p>
            </div>
            <div className="grid gap-12 lg:col-span-8 lg:grid-cols-2">
              <EditorialCard
                image={images.materialHonesty}
                imageAlt="Material textures"
                tag={t("craft")}
                title={t("materialHonesty")}
                body={t("materialHonestyBody")}
              />
              <EditorialCard
                image={images.quietude}
                imageAlt="Suite interior"
                tag={t("space")}
                title={t("quietude")}
                body={t("quietudeBody")}
                offset
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-charcoal section-pad">
          <div className="absolute inset-0 clay-breeze-pattern" />
          <div className="relative mx-auto max-w-[720px] px-margin text-center">
            <h3 className="font-editorial text-[40px] text-ivory md:text-[56px]">
              {t("stillnessTitle")}
            </h3>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-smoke">
              {t("stillnessSub")}
            </p>
            <Link href="/rooms" className="mt-12 inline-block">
              <Button variant="ivory">{t("discoverRooms")}</Button>
            </Link>
          </div>
        </section>

        <section className="section-pad px-margin bg-surface-elevated">
          <div className="mx-auto max-w-[1280px]">
            <p className="font-label-caps text-center text-smoke">{t("curated")}</p>
            <div className="mt-16 grid gap-8 lg:grid-cols-12">
              <Link
                href="/spa"
                className="group relative min-h-[480px] overflow-hidden bg-charcoal lg:col-span-8"
              >
                <LuxuryImage
                  src={images.sanctuary}
                  alt="Spa sanctuary"
                  fill
                  className="luxury-transition group-hover:scale-[1.02] opacity-85"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
                  <h4 className="font-editorial text-[40px] text-ivory">{t("sanctuary")}</h4>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-smoke">
                    {t("sanctuaryBody")}
                  </p>
                </div>
              </Link>
              <Link
                href="/dining"
                className="group flex min-h-[480px] flex-col justify-end border border-clay/20 bg-ivory p-10 lg:col-span-4"
              >
                <span className="font-label-caps text-hijau">{t("dining")}</span>
                <h4 className="font-editorial mt-4 text-[32px] text-charcoal">
                  The Brick & Iron
                </h4>
                <p className="mt-4 text-[15px] leading-relaxed text-on-surface-variant">
                  {t("diningBody")}
                </p>
                <span className="font-label-caps mt-10 text-brick luxury-transition group-hover:text-gold">
                  {t("viewMenu")} →
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-pad px-margin">
          <div className="mx-auto max-w-2xl">
            <h3 className="font-editorial text-center text-[32px] italic text-charcoal">
              {t("principles")}
            </h3>
            <ul className="mt-16">
              {principles.map((p) => (
                <li key={p.num} className="group border-t border-clay/20 py-10">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-8">
                      <span className="font-label-caps text-smoke">{p.num}</span>
                      <h5 className="font-editorial text-[26px] text-charcoal luxury-transition group-hover:text-brick">
                        {p.label}
                      </h5>
                    </div>
                    <span className="text-gold opacity-0 luxury-transition group-hover:opacity-100">
                      →
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <SiteFooter />
      </main>
    </AppShell>
  );
}
