import AppProvider from "@/provider/app-provider";
import "./globals.css";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="bg-default-secondary text-default-default antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
