"use client";

import { tokenRefresh } from "@/api/token-refresh";
import { getRefreshToken } from "@/utils/token";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PropsWithChildren, useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

export default function AppProvider({ children }: PropsWithChildren) {
  const init = async () => {
    const refreshToken = await getRefreshToken();

    if (refreshToken) {
      tokenRefresh();
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
