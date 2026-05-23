import { siteConfig } from "@/lib/config/site";

const channels = [
  { id: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
  { id: "tiktok", href: siteConfig.social.tiktok, label: "TikTok" },
  { id: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
  { id: "whatsapp", href: siteConfig.social.whatsapp, label: "WhatsApp" },
] as const;

function SocialIcon({ id }: { id: (typeof channels)[number]["id"] }) {
  const stroke = "currentColor";
  const props = { width: 18, height: 18, fill: "none", stroke, strokeWidth: 1.2 };

  switch (id) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" {...props} aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill={stroke} stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" {...props} aria-hidden>
          <path d="M9 6v12a4 4 0 104-4H9V6h4V4H9z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" {...props} aria-hidden>
          <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h4l1-4h-5V9c0-1 1-1 2-1z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" {...props} aria-hidden>
          <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.7-1.2A9 9 0 1012 3z" />
          <path d="M9 10h6M9 14h4" strokeWidth={1} />
        </svg>
      );
  }
}

export function SocialLinks({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color =
    variant === "dark"
      ? "text-on-primary-container hover:text-secondary-container"
      : "text-on-surface-variant hover:text-primary";

  return (
    <div className="flex items-center gap-6">
      {channels.map((ch) => (
        <a
          key={ch.id}
          href={ch.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ch.label}
          className={`${color} transition-colors duration-300`}
        >
          <SocialIcon id={ch.id} />
        </a>
      ))}
    </div>
  );
}
