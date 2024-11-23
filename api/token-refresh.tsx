"use server";

import { instance } from "@/api/interceptor";
import { setRefreshToken } from "@/utils/token";

export const tokenRefresh = async () => {
  const response = await instance.get("/refresh", {
    withCredentials: true,
  });

  if (response.status === 200) {
    const { accessToken, refreshToken } = response.data.data;

    instance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    setRefreshToken(refreshToken);

    return response.data.accessToken;
  }
};
