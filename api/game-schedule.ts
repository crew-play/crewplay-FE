import { IGameSchedule, IGameScheduleDetail } from "@/interface/game-schedule";
import { IResponse } from "@/interface/response";
import { instance } from "./interceptor";
import axios, { isAxiosError } from "axios";

interface IGetGameSchedulesParam {
  readonly fixtureDate: string;
  readonly clubName: string;
}

export const getGameSchedules = async ({
  fixtureDate,
  clubName,
}: IGetGameSchedulesParam): Promise<IResponse<IGameSchedule[]>> => {
  try {
    if (clubName === "none") {
      const { data } = await instance.get(
        `/api/v1/fixture/club?date=${fixtureDate}`,
      );
      return {
        status: "success",
        data: data.data,
      };
    } else {
      const { data } = await instance.get(
        `/api/v1/fixture/club?date=${fixtureDate}&clubName=${clubName}`,
      );
      return {
        status: "success",
        data: data.data,
      };
    }
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

export const getGameScheduleDetail = async (
  fixtureId: number,
): Promise<IResponse<IGameScheduleDetail>> => {
  try {
    const { data } = await axios.get(`/api/v1/fixture/${fixtureId}`);
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
