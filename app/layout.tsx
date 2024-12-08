import AppProvider from "@/provider/app-provider";
import "./globals.css";
import localFont from "next/font/local";

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
  return (
    <html lang="en" className={`${pretendard.variable} ${sfPro.variable}`}>
      <body className="text-black-002 font-pretendard antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
