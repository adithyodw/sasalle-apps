import { AppShell } from "@/components/layout/app-shell";
import { BookingFlow } from "@/components/booking/booking-flow";

export default function BookPage() {
  return (
    <AppShell showReservations>
      <main className="min-h-screen pb-32 pt-24">
        <div className="mx-auto max-w-2xl">
          <BookingFlow />
        </div>
      </main>
    </AppShell>
  );
}
