import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main
        className={`flex h-[calc(100vh-164px)] min-h-[400px] flex-col justify-center overflow-auto`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
