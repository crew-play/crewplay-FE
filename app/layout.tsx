"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import AppProvider from "@/provider/app-provider";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const sfPro = localFont({
  src: "../public/fonts/SF-Pro.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-sf-pro",
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isOnlyUseLogo =
    pathname === "/login" ||
    pathname === "/signUp" ||
    pathname === "/signUp/success";

  return (
    <html lang="en" className={`${pretendard.variable} ${sfPro.variable}`}>
      <body className="font-pretendard text-black-002 antialiased">
        <AppProvider>
          <Header isOnlyUseLogo={isOnlyUseLogo} />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
