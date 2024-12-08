import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function VoteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo />
      <main>{children}</main>
      <Footer />
    </>
  );
}
