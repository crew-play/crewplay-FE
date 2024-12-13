import { isAxiosError } from "axios";
import { instance } from "./interceptor";
import { IResponse } from "@/interface/response";

interface IHasUserVoted {
  readonly voted: boolean;
}

export const hasUserVoted = async (): Promise<IResponse<IHasUserVoted>> => {
  try {
    const { data } = await instance.get("/api/v1/vote/user");

    return {
      status: "success",
      data: data.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        status: "error",
        error: error.message,
      };
    }

    return {
      status: "error",
      error: "알 수 없는 오류가 발생하였습니다.",
    };
  }
};
