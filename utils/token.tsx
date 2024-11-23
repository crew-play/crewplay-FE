"use server";

import { cookies } from "next/headers";

type TToken = "accessToken" | "refreshToken";

export const setRefreshToken = async (token: string) => {
  const cookieStores = await cookies();

  cookieStores.set("refreshToken", token, {
    maxAge: 60 * 60 * 24, // 유효 시간
    httpOnly: true, // JavaScript에서 접근 불가
    sameSite: "strict", // CSRF 방지
    secure: process.env.NODE_ENV === "production", // 운영 서버일 때 Https에서만 전송
  });
};

export const getRefreshToken = async () => {
  const cookieStores = await cookies();
  const token = cookieStores.get("refreshToken");
  return token;
};

export const removeToken = async (type: TToken) => {
  const cookieStores = await cookies();
  cookieStores.delete(type);
};
