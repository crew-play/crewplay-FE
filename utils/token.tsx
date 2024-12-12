"use server";

import { cookies } from "next/headers";

type TToken = "access" | "refresh";

interface ICookieOption {
  readonly maxAge: number;
  readonly httpOnly: boolean;
  sameSite?: "strict" | "lax" | "none";
  readonly secure: boolean;
}

export const setToken = async (token: string, type: TToken) => {
  const cookieStores = await cookies();

  const isProduction = process.env.NODE_ENV === "production";

  const cookieOption: ICookieOption = {
    maxAge: type === "refresh" ? 60 * 60 * 24 : 60 * 10,
    httpOnly: true,
    secure: isProduction,
  };

  if (isProduction) {
    cookieOption.sameSite = "none";
  }

  cookieStores.set(type, token, cookieOption);
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
