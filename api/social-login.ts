import { IResponse } from "@/interface/response";
import { setRefreshToken } from "@/utils/token";
import axios, { AxiosError } from "axios";
import { instance } from "./interceptor";

interface ISendCodeResponseData {
  readonly providerId: string;
  readonly nickname: string;
}

export const sendCode = async (
  code: string,
): Promise<IResponse<ISendCodeResponseData>> => {
  try {
    const response = await axios.post("/api/v1/auth/kakao", { code: code });
    const { data } = response;

    const accessToken = response.headers["access"];
    const refreshToken = response.headers["refresh"];

    if (accessToken) {
      instance.defaults.headers.common["Authorization"] =
        `Bearer ${accessToken}`;
    }

    if (refreshToken) {
      setRefreshToken(refreshToken);
    }

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
