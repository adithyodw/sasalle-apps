import { getTranslations } from "next-intl/server";

export default async function AdminDashboard() {
  const t = await getTranslations("admin");

  const stats = [
    { label: t("occupancy"), value: "78%" },
    { label: t("revenue"), value: "$284,500" },
    { label: t("arrivals"), value: "12" },
  ];

  return (
    <div className="p-8">
      <h1 className="font-display mb-8 text-[32px] text-ivory">{t("dashboard")}</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="border border-smoke/20 p-6">
            <p className="font-label-caps text-smoke">{s.label}</p>
            <p className="font-display mt-2 text-[40px] text-gold">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
