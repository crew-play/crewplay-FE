import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function VoteHistoryLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo />
      <main className="w-full px-[16px] lg:mx-auto lg:w-[880px] lg:px-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
