import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { EditorialCard } from "@/components/ui/editorial-card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { images } from "@/lib/design-tokens";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("home");

  const principles = [
    { num: "01", label: t("principle1") },
    { num: "02", label: t("principle2") },
    { num: "03", label: t("principle3") },
  ];

  return (
    <AppShell>
      <main className="overflow-x-hidden pt-0">
        <HeroSection established={t("established")} title={t("heroTitle")} />

        <section className="px-margin py-32">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-gutter md:flex-row">
            <div className="mb-16 md:mb-0 md:w-1/3">
              <p className="font-label-caps mb-6 text-outline">{t("section01")}</p>
              <h3 className="font-display mb-8 text-[32px] leading-snug text-primary">
                {t("ritualTitle")}
              </h3>
              <div className="mb-8 h-px w-12 bg-primary" />
              <p className="max-w-xs text-body-md text-on-surface-variant">{t("ritualBody")}</p>
            </div>
            <div className="grid grid-cols-1 items-start gap-8 md:w-2/3 md:grid-cols-2">
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

        <section className="relative bg-primary-container py-32 clay-breeze-pattern">
          <div className="mx-auto max-w-[1440px] px-margin text-center">
            <h3 className="font-display mb-8 text-[48px] tracking-tighter text-on-primary md:text-[64px]">
              {t("stillnessTitle")}
            </h3>
            <Link href="/rooms">
              <Button variant="brick">{t("discoverRooms")}</Button>
            </Link>
          </div>
        </section>

        <section className="bg-surface-container-low px-margin py-32">
          <div className="mx-auto max-w-[1440px]">
            <p className="font-label-caps mb-16 text-center text-outline">{t("curated")}</p>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
              <Link
                href="/spa"
                className="group relative h-[500px] overflow-hidden bg-surface-container-highest md:col-span-8"
              >
                <Image
                  src={images.sanctuary}
                  alt="Spa sanctuary"
                  fill
                  className="object-cover opacity-80 mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <h4 className="font-display mb-4 text-[48px] text-primary-fixed">
                    {t("sanctuary")}
                  </h4>
                  <p className="max-w-sm text-body-lg text-on-primary-fixed">
                    {t("sanctuaryBody")}
                  </p>
                </div>
              </Link>
              <Link
                href="/dining"
                className="group relative flex h-[500px] flex-col items-center justify-center overflow-hidden bg-secondary-container p-10 text-center md:col-span-4"
              >
                <span className="material-symbols-outlined mb-6 text-5xl text-secondary">
                  restaurant
                </span>
                <h4 className="font-display mb-4 text-[24px] text-secondary">{t("dining")}</h4>
                <p className="text-body-md text-on-secondary-container">{t("diningBody")}</p>
                <span className="font-label-caps mt-8 cursor-pointer border-b border-secondary pb-1 text-secondary">
                  {t("viewMenu")}
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="px-margin py-32">
          <div className="mx-auto max-w-2xl">
            <h3 className="font-display mb-16 text-center text-[32px] italic text-primary">
              {t("principles")}
            </h3>
            <ul className="divide-y divide-outline-variant/30">
              {principles.map((p) => (
                <li key={p.num} className="group cursor-pointer py-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span className="font-label-caps text-outline">{p.num}</span>
                      <h5 className="font-display text-[24px] text-on-surface transition-colors group-hover:text-primary">
                        {p.label}
                      </h5>
                    </div>
                    <span className="material-symbols-outlined text-outline transition-transform group-hover:translate-x-2">
                      arrow_forward
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
