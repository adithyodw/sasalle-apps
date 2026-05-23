import { BottomNav } from "./bottom-nav";
import { TopNav } from "./top-nav";

export function AppShell({
  children,
  showReservations = false,
  navVariant = "light",
  hideNav = false,
}: {
  children: React.ReactNode;
  showReservations?: boolean;
  navVariant?: "light" | "dark" | "transparent";
  hideNav?: boolean;
}) {
  if (hideNav) {
    return <>{children}</>;
  }

  return (
    <>
      <TopNav showReservations={showReservations} variant={navVariant} />
      {children}
      <BottomNav />
      <div className="h-[72px] md:hidden" aria-hidden />
    </>
  );
}
