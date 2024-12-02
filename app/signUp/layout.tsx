import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header isOnlyUseLogo />
      <main className="mx-auto flex h-[calc(100vh-164px)] min-h-[683px] w-full max-w-[358px] flex-col justify-center overflow-auto px-4 md:w-[341px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
