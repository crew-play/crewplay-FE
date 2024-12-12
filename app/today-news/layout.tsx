import { PropsWithChildren } from "react";

export default function TodayNewsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="w-full max-w-screen-xl px-[16px] lg:mx-auto">
        {children}
      </main>
    </>
  );
}
