import { PropsWithChildren } from "react";

export default function GameScheduleDetailLayout({
  children,
}: PropsWithChildren) {
  return (
    <main className="min-h-screen w-screen bg-white-004 py-0 lg:py-[34px]">
      {children}
    </main>
  );
}
