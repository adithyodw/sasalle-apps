import { calculateTotal, isRoomAvailable } from "@/lib/booking/pricing";
import type { BookingDraft } from "@/lib/booking/types";
import { NextResponse } from "next/server";

const bookings: BookingDraft[] = [];

export async function GET() {
  return NextResponse.json({ bookings });
}

export async function POST(request: Request) {
  const body = (await request.json()) as BookingDraft;
  if (!body.roomId || !body.checkIn || !body.checkOut || !body.guestEmail) {
    return NextResponse.json({ error: "Invalid booking" }, { status: 400 });
  }
  if (!isRoomAvailable(body.roomId, body.checkIn, body.checkOut, bookings)) {
    return NextResponse.json({ error: "Room unavailable" }, { status: 409 });
  }
  const pricing = calculateTotal(body);
  const record = { ...body, id: `SH-${Date.now()}`, pricing };
  bookings.push(record);
  return NextResponse.json({ booking: record }, { status: 201 });
}
