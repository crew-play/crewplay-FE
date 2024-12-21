import { PropsWithChildren } from "react";

export default function GameScheduleLayout({ children }: PropsWithChildren) {
  return (
    <main className="h-screen w-screen bg-gray-014 px-0 lg:px-[16px] lg:py-[84px]">
      {children}
    </main>
  );
}
