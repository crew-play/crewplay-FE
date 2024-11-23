"use server";

import { cookies } from "next/headers";

type TToken = "accessToken" | "refreshToken";

interface ISetToken {
  readonly type: TToken;
  readonly token: string;
}

export const setToken = async ({ type, token }: ISetToken) => {
  const cookieStores = await cookies();

  const TOKEN_MAX_AGE = {
    accessToken: 60 * 60 * 10,
    refreshToken: 60 * 60 * 24,
  };

  cookieStores.set(type, token, {
    maxAge: TOKEN_MAX_AGE[type], // 유효 시간
    httpOnly: true, // JavaScript에서 접근 불가
    sameSite: "strict", // CSRF 방지
    secure: process.env.NODE_ENV === "production",
  });
};

export const getToken = async (type: TToken) => {
  const cookieStores = await cookies();
  const token = cookieStores.get(type);
  return token;
};

export const removeToken = async (type: TToken) => {
  const cookieStores = await cookies();
  cookieStores.delete(type);
};
