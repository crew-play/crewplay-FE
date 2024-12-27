import { atomFixtureData } from "@/jotai/fixture";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";

interface IGameScheduleItemProps {
  readonly season: string;
  readonly fixtureId: number;
  readonly fixtureTime: string;
  readonly fixtureDate: string;
  readonly homeClubName: string;
  readonly awayClubName: string;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly stadium: string;
}

export default function GameScheduleItem({
  season,
  fixtureId,
  fixtureTime,
  fixtureDate,
  homeClubName,
  awayClubName,
  homeScore,
  awayScore,
  stadium,
}: IGameScheduleItemProps) {
  const router = useRouter();

  const setFixture = useSetAtom(atomFixtureData);

  const handleClickDetailButton = () => {
    setFixture({
      season,
      fixtureId,
      fixtureTime,
      fixtureDate,
      homeClubName,
      awayClubName,
      homeScore,
      awayScore,
      stadium,
    });

    router.push(`/game-schedule/${fixtureId}`);
  };

  return (
    <div className="flex flex-col items-center p-[16px] lg:h-[83px] lg:flex-row lg:py-0">
      <div className="flex w-full py-[16px] lg:block lg:basis-[300px] lg:py-0">
        <span className="mr-[24px] text-[20px] font-bold leading-[23.87px]">
          {fixtureTime}
        </span>
        <span className="text-[18px] leading-[21.48px]">{stadium}</span>
      </div>
      <div className="flex w-full pb-[16px] pt-[8px] lg:basis-[540px] lg:py-0">
        <div
          className="flex w-full grow flex-col-reverse items-center justify-center lg:grow-0 lg:basis-[180px] lg:flex-row"
          aria-description="away-team"
        >
          <span className="text-[18px] leading-[21.48px] lg:mr-[16px]">
            {awayClubName}
          </span>
          <div className="mb-[16px] flex size-[32px] items-center justify-center rounded-full bg-blue-001 lg:mb-0">
            <span className="text-[14px] leading-[16.71px] text-white-001">
              승
            </span>
          </div>
        </div>
        <div
          className="flex w-full grow items-center justify-center lg:grow-0 lg:basis-[180px]"
          aria-description="score"
        >
          <span className="mr-[16px] text-[18px] font-bold leading-[21.48px] text-blue-001">
            {awayScore}
          </span>
          <span className="text-[18px] leading-[25.2px] text-gray-003">:</span>
          <span className="ml-[16px] text-[18px] font-bold leading-[21.48px]">
            {homeScore}
          </span>
        </div>
        <div
          className="flex w-full grow flex-col-reverse items-center justify-center lg:grow-0 lg:basis-[180px] lg:flex-row"
          aria-description="home-team"
        >
          <span className="mr-[16px] text-[18px] leading-[21.48px]">
            {homeClubName}
          </span>
          <div className="mb-[16px] flex size-[32px] items-center justify-center rounded-full bg-white-005 lg:mb-0">
            <span className="text-[14px] leading-[16.71px] text-gray-016">
              패
            </span>
          </div>
        </div>
      </div>
      <div
        className="hidden w-full items-center justify-center lg:flex lg:basis-[180px]"
        aria-description="season-type"
      >
        <span className="text-[16px] leading-[19.09px]">{season}</span>
      </div>
      <div className="flex w-full items-center justify-center lg:basis-[180px]">
        <button
          type="button"
          className="w-full rounded-[8px] border border-black-001 px-[24px] py-[16px] text-[16px] leading-[19.09px] text-black-001 lg:w-auto lg:rounded-none"
          onClick={handleClickDetailButton}
        >
          상세보기
        </button>
      </div>
    </div>
  );
}
