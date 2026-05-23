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
    <footer className="border-t border-clay/15 bg-charcoal px-margin py-24 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div>
            <h2 className="font-editorial text-[48px] text-ivory md:text-[56px]">SASALLE</h2>
            <p className="font-label-caps mt-4 text-smoke">{t("footerTag")}</p>
            <div className="mt-10">
              <SocialLinks variant="dark" />
            </div>
          </div>

          <div className="flex max-w-md flex-col gap-10">
            <FooterWhatsAppBlock title={ti("whatsappTitle")} />
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[15px] text-smoke luxury-transition hover:text-ivory"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-clay/20 pt-12">
          <OtaPartners variant="dark" />
        </div>
      </div>
    </footer>
  );
}
