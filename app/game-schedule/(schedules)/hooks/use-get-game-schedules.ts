import { getGameSchedules } from "@/api/game-schedule";
import { IGameSchedule } from "@/interface/game-schedule";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";

interface IUseGameSchedulesProps {
  readonly fixtureDate: string;
  readonly clubName: string;
}

export default function useGetGameSchedules({
  fixtureDate,
  clubName,
}: IUseGameSchedulesProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<IGameSchedule[]>([]);

  const getSchedules = async () => {
    try {
      const { data } = await getGameSchedules({ fixtureDate, clubName });

      if (data) {
        setData(data);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        setData([]);
        return error;
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSchedules();
  }, [fixtureDate, clubName]);

  return { data, isLoading };
}
