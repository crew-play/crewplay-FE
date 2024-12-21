import useClubList from "@/app/signUp/hooks/use-club-list";
import NotExist from "@/components/not-exist";
import Spinner from "@/components/spinner";
import useDrag from "@/hooks/use-drag";
import { atomSelectedClub } from "@/jotai/my-page";
import { useAtom } from "jotai";
import GameScheduleClubItem from "./game-schedule-club-item";

export default function GameScheduleClubList() {
  const { data, isLoading, isError } = useClubList();
  const {
    sliderRef,
    trackRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = useDrag();
  const [selectedClub, setSelectedClub] = useAtom(atomSelectedClub);

  if (isLoading) return <Spinner />;

  if (isError) return <NotExist text="구단 목록 조회에 실패하였습니다." />;

  if (!data || !data.data)
    return <NotExist text="구단 목록이 존재하지 않습니다." />;

  const handleClickClub = (clubName: string) => {
    setSelectedClub(clubName);
  };

  return (
    <div
      className="my-[16px] overflow-hidden"
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex w-max" ref={trackRef}>
        <div
          className={`flex h-[72.18px] w-[112px] items-center justify-center text-[16px] leading-[19.09px] ${selectedClub === "none" && "rounded-[8px] bg-white-003"}`}
          onClick={() => {
            return handleClickClub("none");
          }}
        >
          <span>전체 일정</span>
        </div>
        {data.data.map((club) => {
          return (
            <GameScheduleClubItem
              key={club.clubName}
              clubName={club.clubName}
              emblemImg={club.emblemImg}
              onClick={handleClickClub}
            />
          );
        })}
      </div>
    </div>
  );
}
