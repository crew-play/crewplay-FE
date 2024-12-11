import { TSelectedMenu } from "@/app/today-news/page";
import { IPagination } from "@/interface/pagination";
import { IResponse } from "@/interface/response";
import axios, { isAxiosError } from "axios";

export interface INews {
  readonly newsDateTime: string;
  readonly headline: string;
  readonly newsLink: string;
  readonly thumbnail: string;
}

export const getTodayIssue = async (
  selectedMenu: TSelectedMenu,
): Promise<IResponse<{ dataList: INews[] } & IPagination>> => {
  const url = selectedMenu === "news" ? "/api/v1/news/" : "/api/v1/news/video";

  try {
    const { data } = await axios.get(url);

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
