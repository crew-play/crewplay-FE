import { PropsWithChildren } from "react";

export default function VoteHistoryLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="min-h-[calc(100vh-164px)] w-full px-[16px] lg:mx-auto lg:w-[880px] lg:px-0">
        {children}
      </main>
    </>
  );
}
