import { OtaPartners } from "@/components/integrations/ota-partners";
import { SocialLinks } from "@/components/integrations/social-links";
import { FooterWhatsAppBlock } from "@/components/integrations/footer-whatsapp-block";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function SiteFooter() {
  const t = await getTranslations("home");
  const ti = await getTranslations("integrations");

  const links = [
    { href: "#", label: t("privacy") },
    { href: "#", label: t("sustainability") },
    { href: "#", label: t("careers") },
    { href: "#", label: t("press") },
  ];

  return (
    <footer className="w-full border-t border-outline/10 bg-primary-container px-margin py-24 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div>
            <h2 className="font-display text-[48px] leading-none text-on-primary md:text-[64px]">
              SASALLE
            </h2>
            <p className="font-label-caps mt-4 text-on-primary-container">{t("footerTag")}</p>
            <div className="mt-8">
              <SocialLinks variant="dark" />
            </div>
          </div>

          <div className="flex max-w-md flex-col gap-8">
            <FooterWhatsAppBlock title={ti("whatsappTitle")} />
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base text-on-primary-container transition-all hover:text-secondary-container hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-on-primary-container/20 pt-12 text-on-primary-container">
          <OtaPartners variant="dark" />
        </div>
      </div>
    </footer>
  );
}
