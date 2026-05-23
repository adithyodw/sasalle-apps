import { buildLoyaltyProfile } from "@/lib/loyalty/tiers";
import { getTranslations } from "next-intl/server";

export async function LoyaltyCard({
  stays = 6,
  nights = 18,
}: {
  stays?: number;
  nights?: number;
}) {
  const t = await getTranslations("loyalty");
  const profile = buildLoyaltyProfile(stays, nights);
  const tierKeys = {
    silver: "tierSilver",
    gold: "tierGold",
    black: "tierBlack",
  } as const;
  const tierLabel = t(tierKeys[profile.tier]);

  return (
    <div className="border border-outline-variant/30 bg-surface-container-lowest p-8">
      <p className="font-label-caps mb-2 text-outline">{t("program")}</p>
      <p className="font-display text-[32px] text-primary">{tierLabel}</p>
      {profile.vipEligible && (
        <p className="font-label-caps mt-4 text-gold">{t("vipEligible")}</p>
      )}
      {profile.nextTier && profile.staysToNext !== undefined && profile.staysToNext > 0 && (
        <p className="mt-4 text-sm text-on-surface-variant">
          {t("staysToNext", {
            count: profile.staysToNext,
            tier: t(tierKeys[profile.nextTier]),
          })}
        </p>
      )}
      <p className="mt-6 text-sm text-on-surface-variant">{t("vipLogic")}</p>
    </div>
  );
}
