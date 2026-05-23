import { getTranslations } from "next-intl/server";

export default async function AdminAnalyticsPage() {
  const t = await getTranslations("admin");

  return (
    <div className="p-8">
      <h1 className="font-display mb-6 text-[28px]">{t("analytics")}</h1>
      <div className="grid h-64 place-items-center border border-smoke/20 text-smoke">
        Revenue chart — connect BI / Supabase analytics
      </div>
    </div>
  );
}
