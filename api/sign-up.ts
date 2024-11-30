/* eslint-disable @typescript-eslint/no-unused-vars */
import { IResponse } from "@/interface/response";
import { instance } from "./interceptor";

export const checkNickname = async (
  nickname: string,
): Promise<IResponse<boolean>> => {
  try {
    const { data } = await instance.get(
      `/api/v1/auth/check-nickname/${nickname}`,
    );
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
