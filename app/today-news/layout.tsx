import { PropsWithChildren } from "react";

export default function TodayNewsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="min-h-[calc(100vh-164px)] w-full max-w-screen-xl px-[16px] lg:mx-auto">
        {children}
      </main>
    </>
  );
}
