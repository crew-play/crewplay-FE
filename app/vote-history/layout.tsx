import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function VoteHistoryLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo />
      <main className="mx-auto lg:w-[880px]">{children}</main>
      <Footer />
    </>
  );
}
