"use server";

import { cookies } from "next/headers";

type TToken = "accessToken" | "refreshToken";

interface ICookieOption {
  readonly maxAge: number;
  readonly httpOnly: boolean;
  sameSite?: "strict" | "lax" | "none";
  readonly secure: boolean;
}

export const setRefreshToken = async (token: string) => {
  const cookieStores = await cookies();

  const isProduction = process.env.NODE_ENV === "production";

  const cookieOption: ICookieOption = {
    maxAge: 60 * 60 * 24,
    httpOnly: true,
    secure: isProduction,
  };

  if (isProduction) {
    cookieOption.sameSite = "none";
  }

  cookieStores.set("refreshToken", token, cookieOption);
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
