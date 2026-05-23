async function getBookings() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  try {
    const res = await fetch(`${base}/api/bookings`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return data.bookings ?? [];
  } catch {
    return [];
  }
}

export default async function AdminBookingsPage() {
  const bookings = await getBookings();

  return (
    <div className="p-8">
      <h1 className="font-display mb-6 text-[28px]">Bookings</h1>
      <div className="overflow-x-auto border border-smoke/20">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-smoke/20 font-label-caps text-smoke">
              <th className="p-4">Room</th>
              <th className="p-4">Guest</th>
              <th className="p-4">Dates</th>
              <th className="p-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-smoke">
                  No bookings yet.
                </td>
              </tr>
            ) : (
              bookings.map((b: { roomId: string; guestName?: string; checkIn: string; checkOut: string; guestEmail?: string }, i: number) => (
                <tr key={i} className="border-b border-smoke/10">
                  <td className="p-4 capitalize">{b.roomId}</td>
                  <td className="p-4">{b.guestName ?? "—"}</td>
                  <td className="p-4">
                    {b.checkIn} → {b.checkOut}
                  </td>
                  <td className="p-4">{b.guestEmail}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
