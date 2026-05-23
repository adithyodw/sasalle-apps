import { BottomNav } from "./bottom-nav";
import { TopNav } from "./top-nav";

export function AppShell({
  children,
  showReservations = false,
}: {
  children: React.ReactNode;
  showReservations?: boolean;
}) {
  return (
    <>
      <TopNav showReservations={showReservations} />
      {children}
      <BottomNav />
      <div className="h-24 md:hidden" aria-hidden />
    </>
  );
}
