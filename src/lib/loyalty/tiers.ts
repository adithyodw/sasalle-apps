export type LoyaltyTier = "silver" | "gold" | "black";

export interface LoyaltyProfile {
  stays: number;
  nights: number;
  tier: LoyaltyTier;
  vipEligible: boolean;
  nextTier?: LoyaltyTier;
  staysToNext?: number;
}

const THRESHOLDS = {
  silver: { minStays: 0, minNights: 0 },
  gold: { minStays: 4, minNights: 12 },
  black: { minStays: 10, minNights: 30 },
} as const;

export function resolveLoyaltyTier(stays: number, nights: number): LoyaltyTier {
  if (stays >= THRESHOLDS.black.minStays || nights >= THRESHOLDS.black.minNights) {
    return "black";
  }
  if (stays >= THRESHOLDS.gold.minStays || nights >= THRESHOLDS.gold.minNights) {
    return "gold";
  }
  return "silver";
}

/** VIP upgrade: Gold guests with 8+ nights in rolling year, or Black invite-only flag */
export function evaluateVipUpgrade(
  tier: LoyaltyTier,
  nights: number,
  inviteOnly = false,
): boolean {
  if (inviteOnly && tier === "black") return true;
  if (tier === "gold" && nights >= 20) return true;
  if (tier === "black") return true;
  return false;
}

export function buildLoyaltyProfile(
  stays: number,
  nights: number,
  inviteOnly = false,
): LoyaltyProfile {
  const tier = resolveLoyaltyTier(stays, nights);
  const vipEligible = evaluateVipUpgrade(tier, nights, inviteOnly);

  let nextTier: LoyaltyTier | undefined;
  let staysToNext: number | undefined;

  if (tier === "silver") {
    nextTier = "gold";
    staysToNext = Math.max(0, THRESHOLDS.gold.minStays - stays);
  } else if (tier === "gold") {
    nextTier = "black";
    staysToNext = Math.max(0, THRESHOLDS.black.minStays - stays);
  }

  return { stays, nights, tier, vipEligible, nextTier, staysToNext };
}
