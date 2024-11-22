"use server";

import { instance } from "@/middleware/interceptor";
import { getToken } from "@/utils/token";

export const tokenRefresh = async () => {
  const refreshToken = await getToken("refreshToken");

  const response = await instance.get("/refresh", {
    headers: {
      "Content-Type": "application/json",
      RefreshToken: `Bearer ${refreshToken}`,
    },
  });

  const newAccessToken = response.data.accessToken;
  const newRefreshToken = response.data.refreshToken;

  return { newAccessToken, newRefreshToken };
};
