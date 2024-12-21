import Spinner from "@/components/spinner";
import { atomSelectedDate } from "@/jotai/game-schedule";
import { atomSelectedClub } from "@/jotai/my-page";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
import useGetGameSchedules from "../../hooks/use-get-game-schedules";
import GameScheduleItem from "./game-schedule-item";

export default function GameScheduleList() {
  const selectedDate = useAtomValue(atomSelectedDate);
  const clubName = useAtomValue(atomSelectedClub);

  const fixtureDate = useMemo(() => {
    const date =
      selectedDate.selectedDate < 10
        ? `0${selectedDate.selectedDate}`
        : selectedDate.selectedDate;
    const month =
      selectedDate.month < 10 ? `0${selectedDate.month}` : selectedDate.month;

    return `${selectedDate.year}-${month}-${date}`;
  }, [selectedDate]);

  const { data, isLoading } = useGetGameSchedules({
    fixtureDate: fixtureDate,
    clubName: clubName === "" ? "none" : clubName,
  });

  if (isLoading) return <Spinner />;

  const isExist = data.length !== 0;

  return (
    <div
      className={`${!isExist && "flex items-center"} h-[375px] overflow-auto`}
    >
      {isExist ? (
        <>
          {data.map((schedule, index) => {
            return (
              <>
                <GameScheduleItem
                  key={schedule.fixtureId}
                  fixtureId={schedule.fixtureId}
                  fixtureTime={schedule.fixtureTime}
                  awayClubName={schedule.awayClubName}
                  awayScore={schedule.awayScore}
                  homeClubName={schedule.homeClubName}
                  homeScore={schedule.homeScore}
                  season={schedule.season}
                  stadium={schedule.stadium}
                />
                {data.length !== index + 1 && (
                  <div className="w-full border-t border-white-005" />
                )}
              </>
            );
          })}
        </>
      ) : (
        <p className="w-full text-center text-[16px] leading-[19.09px] text-gray-010">
          해당되는 경기 일정이 없습니다.
        </p>
      )}
    </div>
  );
}
