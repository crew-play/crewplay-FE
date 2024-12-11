import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function TodayNewsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo />
      <main className="w-full max-w-screen-xl px-[16px] lg:mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}
