import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { images } from "@/lib/design-tokens";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function SpaPage() {
  const t = await getTranslations("spa");

  const rituals = [
    { title: t("thermal"), body: t("thermalBody") },
    { title: t("clay"), body: t("clayBody") },
  ];

  return (
    <AppShell>
      <main className="overflow-x-hidden pb-32 pt-24">
        <section className="relative mb-12 aspect-[4/5] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={images.spaPool}
            alt="Spa pool sanctuary"
            fill
            className="object-cover grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-0 px-margin text-surface-container-lowest">
            <span className="font-label-caps mb-2 block tracking-widest">{t("sanctuary")}</span>
            <h2 className="font-display text-[48px] leading-none">{t("heroTitle")}</h2>
          </div>
        </section>

        <section className="mx-auto mb-20 max-w-2xl px-margin text-center">
          <div className="mx-auto mb-8 h-12 w-px bg-outline-variant" />
          <p className="text-body-lg leading-relaxed text-on-surface-variant">{t("intro")}</p>
        </section>

        <section className="px-margin pb-24">
          <p className="font-label-caps mb-12 text-center text-outline">{t("rituals")}</p>
          <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-2">
            {rituals.map((ritual, i) => (
              <article
                key={ritual.title}
                className={`border border-outline-variant/20 bg-surface-container-lowest p-10 ${
                  i === 1 ? "md:mt-10" : ""
                }`}
              >
                <h4 className="font-display mb-4 text-[24px] text-primary">{ritual.title}</h4>
                <p className="mb-8 text-body-md text-on-surface-variant">{ritual.body}</p>
                <Link href="/book">
                  <Button variant="secondary">{t("reserve")}</Button>
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
