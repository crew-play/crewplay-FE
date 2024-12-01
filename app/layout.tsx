import AppProvider from "@/provider/app-provider";
import "./globals.css";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../static/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const sfPro = localFont({
  src: "../static/fonts/SF-Pro.ttf",
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
      <body className="font-pretendard bg-default-secondary text-default-default antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
