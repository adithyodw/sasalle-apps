"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", icon: "home", key: "home" as const },
  { href: "/rooms", icon: "bed", key: "rooms" as const },
  { href: "/stay/key", icon: "key", key: "key" as const },
  { href: "/stay/concierge", icon: "chat_bubble", key: "concierge" as const },
];

export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 z-50 flex h-20 w-full items-center justify-around border-t border-outline-variant/20 bg-surface pb-safe shadow-sm md:hidden">
      {items.map(({ href, icon, key }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={key}
            href={href}
            className={cn(
              "flex scale-95 flex-col items-center justify-center transition-transform duration-200 active:scale-90",
              active ? "text-secondary" : "text-on-surface-variant",
            )}
          >
            <span
              className={cn(
                "material-symbols-outlined",
                active && "material-symbols-filled",
              )}
            >
              {icon}
            </span>
            <span className="font-label-caps mt-1">{t(key)}</span>
          </Link>
        );
      })}
    </nav>
  );
}
