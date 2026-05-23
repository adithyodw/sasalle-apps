import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations("admin");
  const links = [
    { href: "/admin", label: t("dashboard") },
    { href: "/admin/bookings", label: t("bookings") },
    { href: "/admin/rooms", label: t("rooms") },
    { href: "/admin/guests", label: t("guests") },
    { href: "/admin/analytics", label: t("analytics") },
    { href: "/admin/ota", label: t("ota") },
  ];

  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <aside className="fixed left-0 top-0 hidden h-full w-56 border-r border-smoke/20 p-6 md:block">
        <p className="font-display mb-8 text-[24px]">SASALLE</p>
        <nav className="flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-label-caps text-smoke transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="md:ml-56">{children}</main>
    </div>
  );
}
