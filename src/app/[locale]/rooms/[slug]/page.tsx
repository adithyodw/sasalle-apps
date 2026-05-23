import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { LuxuryImage } from "@/components/ui/luxury-image";
import { Link } from "@/i18n/navigation";
import { getRoomBySlug, roomCatalog } from "@/lib/rooms/catalog";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return roomCatalog.map((r) => ({ slug: r.slug }));
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  const t = await getTranslations("rooms");

  return (
    <AppShell showReservations>
      <main className="bg-surface pb-32 pt-0">
        <section className="relative h-[70vh] min-h-[480px] bg-charcoal">
          <LuxuryImage
            src={room.image}
            alt={t(room.titleKey)}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-margin pb-16">
            <span className="font-label-caps text-gold">{t(room.collectionKey)}</span>
            <h1 className="font-editorial mt-3 text-[48px] text-ivory md:text-[64px]">
              {t(room.titleKey)}
            </h1>
          </div>
        </section>

        <section className="px-margin section-pad">
          <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-[17px] leading-[1.85] text-on-surface-variant">
                {t(room.bodyKey)}
              </p>
              <dl className="mt-12 space-y-6">
                <div>
                  <dt className="font-label-caps text-smoke">{t("size")}</dt>
                  <dd className="mt-1 font-editorial text-[22px]">{room.size}</dd>
                </div>
                <div>
                  <dt className="font-label-caps text-smoke">{t("view")}</dt>
                  <dd className="mt-1 font-editorial text-[22px]">{room.view}</dd>
                </div>
                <div>
                  <dt className="font-label-caps text-smoke">{t("from")}</dt>
                  <dd className="mt-1 font-editorial text-[28px] italic text-brick">
                    ${room.price}
                  </dd>
                </div>
              </dl>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link href="/book">
                  <Button variant="primary">{t("reserve")}</Button>
                </Link>
                <Link href="/rooms">
                  <Button variant="secondary">{t("allRooms")}</Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6 md:col-span-7">
              {room.gallery.map((img, i) => (
                <div
                  key={img}
                  className={`relative overflow-hidden bg-charcoal ${
                    i === 0 ? "aspect-[16/10]" : "aspect-[4/5] max-w-md"
                  } ${i === 1 ? "md:ml-auto" : ""}`}
                >
                  <LuxuryImage
                    src={img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
