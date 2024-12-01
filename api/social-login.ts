import { IResponse } from "@/interface/response";
import { instance } from "./interceptor";
import { AxiosError } from "axios";

interface ISendCodeResponseData {
  readonly providerId: string;
  readonly nickname: string;
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
    if (error instanceof AxiosError) {
      return {
        status: "error",
        error: error.message,
      };
    }
    return {
      status: "error",
      error: "알 수 없는 오류가 발생했습니다.",
    };
  }
};
