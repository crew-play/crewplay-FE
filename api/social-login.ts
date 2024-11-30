/* eslint-disable @typescript-eslint/no-unused-vars */
import { IResponse } from "@/interface/response";
import { instance } from "./interceptor";

interface ISendCodeResponseData {
  providerId: string;
  nickname: string;
}

export const sendCode = async (
  code: string,
): Promise<IResponse<ISendCodeResponseData>> => {
  try {
    const { data } = await instance.post("/api/v1/auth/kakao", { code: code });

    return {
      data: data.data,
      status: "success",
    };
  } catch (error) {
    return {
      data: null,
      status: "error",
    };
  }
};
