"use server";

import { cookies } from "next/headers";

type TToken = "accessToken" | "refreshToken";

interface ISetToken {
  readonly type: TToken;
  readonly token: string;
}

export const setToken = async ({ type, token }: ISetToken) => {
  const cookieStores = await cookies();
  cookieStores.set(type, token);
};

export const getToken = async (type: TToken) => {
  const cookieStores = await cookies();
  const accessToken = cookieStores.get(type);
  return accessToken;
};

export const removeToken = async (type: TToken) => {
  const cookieStores = await cookies();
  cookieStores.delete(type);
};
