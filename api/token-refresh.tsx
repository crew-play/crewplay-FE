"use server";

import { instance, setAccessToken } from "@/api/interceptor";
import { getToken } from "@/utils/token";

export const tokenRefresh = async () => {
  const refreshToken = await getToken("refreshToken");

  const response = await instance.get("/refresh", {
    headers: {
      "Content-Type": "application/json",
      RefreshToken: `Bearer ${refreshToken}`,
    },
  });

  if (response.status === 200) {
    setAccessToken(response.data.accessToken);
  }
};
