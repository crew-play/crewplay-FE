import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function LoginLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo />
      <main className="bg-white-004">{children}</main>
      <Footer />
    </>
  );
}
