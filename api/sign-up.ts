import { IResponse } from "@/interface/response";
import { ISignUpForm } from "@/jotai/sign-up";
import { AxiosError } from "axios";
import { instance } from "./interceptor";

export interface IClub {
  readonly clubName: string;
  readonly emblemImg: string;
}

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

export const getClubList = async (): Promise<IResponse<IClub[]>> => {
  try {
    const { data } = await instance.get("/api/v1/clubs/all");

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

export const signUp = async (signUpForm: ISignUpForm) => {
  const response = await instance.post("/api/v1/auth/signUp", signUpForm);
  return response;
};
