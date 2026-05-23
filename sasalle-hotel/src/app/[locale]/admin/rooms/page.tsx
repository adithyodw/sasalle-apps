import { ROOMS } from "@/lib/booking/types";
import { getTranslations } from "next-intl/server";

export default async function AdminRoomsPage() {
  const t = await getTranslations("admin");

  return (
    <div className="p-8">
      <h1 className="font-display mb-6 text-[28px]">{t("rooms")}</h1>
      <ul className="space-y-4">
        {ROOMS.map((room) => (
          <li
            key={room.id}
            className="flex items-center justify-between border border-smoke/20 p-4"
          >
            <span className="font-display capitalize text-ivory">{room.id}</span>
            <span className="text-smoke">
              {room.totalUnits} units · ${room.baseRate}/night
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
