import useClubList from "@/app/signUp/hooks/use-club-list";
import useDrag from "@/hooks/use-drag";
import { SetStateAction } from "jotai";
import { Dispatch } from "react";
import { CLUBS } from "../../constant/club-list";

interface IClubListProps {
  readonly isSelectedClub: string;
  readonly setIsSelectedClub: Dispatch<SetStateAction<string>>;
}

export default function ClubList({
  isSelectedClub,
  setIsSelectedClub,
}: IClubListProps) {
  const { data, isLoading } = useClubList();

  const {
    sliderRef,
    trackRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useDrag();

  const handleClickClub = (club: string) => {
    setIsSelectedClub(CLUBS[club]);
  };

  if (isLoading) return <div>로딩중</div>;

  if (!data || !data.data) return <div>asd</div>;

  return (
    <div
      ref={sliderRef}
      className="mb-[20px] overflow-auto lg:my-[24px]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div ref={trackRef} className="flex">
        {data.data.map((club) => {
          return (
            <div
              key={club.clubName}
              onClick={() => {
                return handleClickClub(club.clubName);
              }}
              className={`mr-[12px] flex h-[26px] w-[53px] shrink-0 items-center justify-center rounded-[36px] border border-gray-003 text-[14px] leading-[14px] lg:h-[46px] lg:w-[80px] lg:text-[16px] lg:leading-[19.09px] ${isSelectedClub === CLUBS[club.clubName] ? "border-yellow-001 text-yellow-001" : "border-gray-003 text-gray-003"} cursor-pointer`}
            >
              <span>{CLUBS[club.clubName]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
