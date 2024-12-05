import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function TodayNewsLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo />
      <main className="mx-auto w-full lg:w-[1280px]">{children}</main>
      <Footer />
    </>
  );
}
