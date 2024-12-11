import { IPagination } from "@/interface/pagination";
import { IResponse } from "@/interface/response";
import {
  ILatestVoteResult,
  IThisWeekVoteResult,
} from "@/interface/vote-result";
import axios, { isAxiosError } from "axios";

export const getThisWeekVoteResult = async (): Promise<
  IResponse<IThisWeekVoteResult>
> => {
  try {
    const { data } = await axios.get("/api/v1/vote/result");

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

export const getLatestVoteResults = async (): Promise<
  IResponse<IPagination & { dataList: ILatestVoteResult[] }>
> => {
  try {
    const { data } = await axios.get("/api/v1/vote/result/prev");

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
