"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", key: "home" as const },
  { href: "/rooms", key: "rooms" as const },
  { href: "/stay/key", key: "key" as const },
  { href: "/stay/concierge", key: "concierge" as const },
];

function NavIcon({ name, active }: { name: string; active: boolean }) {
  const stroke = active ? "#B89B5E" : "#A7A7A7";
  const sw = 1.2;

  if (name === "home") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (name === "rooms") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 10h18v11H3V10zM7 10V6a2 2 0 012-2h6a2 2 0 012 2v4" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  if (name === "key") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="8" cy="12" r="4" stroke={stroke} strokeWidth={sw} />
        <path d="M12 12h9m-3-3l3 3-3 3" stroke={stroke} strokeWidth={sw} />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16M4 12h10M4 18h7" stroke={stroke} strokeWidth={sw} />
    </svg>
  );
}

export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 z-50 flex w-full items-stretch border-t border-clay/15 bg-ivory/95 pb-safe backdrop-blur-lg md:hidden">
      {items.map(({ href, key }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={key}
            href={href}
            className={cn(
              "flex flex-1 flex-col items-center justify-center gap-1 py-3 luxury-transition active:opacity-60",
            )}
          >
            <NavIcon name={key} active={active} />
            <span
              className={cn(
                "font-label-caps text-[9px]",
                active ? "text-gold" : "text-smoke",
              )}
            >
              {t(key)}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
