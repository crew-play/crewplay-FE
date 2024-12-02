import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo={false} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
