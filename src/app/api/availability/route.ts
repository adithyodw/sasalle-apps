import { isRoomAvailable } from "@/lib/booking/pricing";
import type { RoomType } from "@/lib/booking/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const roomId = searchParams.get("roomId") as RoomType | null;
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  if (!roomId || !checkIn || !checkOut) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  const available = isRoomAvailable(roomId, checkIn, checkOut);
  return NextResponse.json({ available, roomId, checkIn, checkOut });
}
