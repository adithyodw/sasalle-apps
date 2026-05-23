import { getTranslations } from "next-intl/server";

const mockGuests = [
  { name: "Elena Marchand", tier: "Black", stays: 14 },
  { name: "Wei Chen", tier: "Gold", stays: 6 },
  { name: "Andreas Hartmann", tier: "Silver", stays: 2 },
];

export default async function AdminGuestsPage() {
  const t = await getTranslations("admin");
  const tg = await getTranslations("guest");

  return (
    <div className="p-8">
      <h1 className="font-display mb-6 text-[28px]">{t("guests")}</h1>
      <ul className="divide-y divide-smoke/20 border border-smoke/20">
        {mockGuests.map((g) => (
          <li key={g.name} className="flex items-center justify-between p-4">
            <div>
              <p className="text-ivory">{g.name}</p>
              <p className="text-sm text-smoke">{g.stays} stays</p>
            </div>
            <span className="font-label-caps text-gold">
              {tg(
                { Silver: "tierSilver", Gold: "tierGold", Black: "tierBlack" }[
                  g.tier as "Silver" | "Gold" | "Black"
                ] as "tierSilver",
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
