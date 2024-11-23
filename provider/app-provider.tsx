"use client";

import { tokenRefresh } from "@/api/token-refresh";
import { accessToken } from "@/api/interceptor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000, // 캐시 유지 시간 1분
    },
  },
});

export default function AppProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    if (accessToken) {
      tokenRefresh();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
