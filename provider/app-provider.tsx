"use client";

import Footer from "@/components/footer";
import Header from "@/components/header/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "jotai";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

export default function AppProvider({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const isOnlyUseLogo =
    pathname === "/login" ||
    pathname === "/signUp" ||
    pathname === "/signUp/success";

  const isUseHeaderAndFooter = pathname !== "/oauth/kakao";

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider>
        {isUseHeaderAndFooter && <Header isOnlyUseLogo={isOnlyUseLogo} />}
        {children}
        {isUseHeaderAndFooter && <Footer />}
      </Provider>
    </QueryClientProvider>
  );
}
