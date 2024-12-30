import Arrow from "@/public/svg/long-arrow.svg";
import StadiumSeatList from "./stadium-seat-list";
import { ITips } from "@/interface/game-schedule";
import useDrag from "@/hooks/use-drag";

interface IStadiumSeatProps {
  readonly stadiumSeats: ITips[];
}

export default function StadiumSeat({ stadiumSeats }: IStadiumSeatProps) {
  const {
    sliderRef,
    trackRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useDrag();

  const handleCLickMoveScroll = (type: "NEXT" | "PREV") => {
    if (sliderRef.current) {
      const currentScroll = sliderRef.current.scrollLeft;

      if (type === "NEXT") {
        sliderRef.current.scrollLeft = currentScroll + 300;
      }

      if (type === "PREV") {
        sliderRef.current.scrollLeft = currentScroll - 300;
      }
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="px-[16px] lg:px-0">
          <h2 className="mb-px text-[20px] font-bold leading-[28px] text-black-001 lg:mb-[5px] lg:text-[32px] lg:leading-[42px]">
            좌석 꿀팁으로 원하는 자리를 찾아보세요
          </h2>
          <p className="text-[16px] leading-[22.4px] text-gray-010 lg:text-[20px] lg:leading-[28px]">
            버튼을 누르면 좌석 상세보기로 이동해요
          </p>
        </div>
        <div className="hidden lg:flex">
          <button
            type="button"
            className="mr-[8px] flex h-[54px] w-[74px] items-center justify-center rounded-[27px] border border-gray-004 bg-white-001"
            onClick={() => {
              return handleCLickMoveScroll("PREV");
            }}
          >
            <Arrow />
          </button>
          <button
            type="button"
            className="flex h-[54px] w-[74px] items-center justify-center rounded-[27px] border border-gray-004 bg-white-001"
            onClick={() => {
              return handleCLickMoveScroll("NEXT");
            }}
          >
            <Arrow className="rotate-180" />
          </button>
        </div>
      </div>
      <StadiumSeatList
        stadiumSeats={stadiumSeats}
        sliderRef={sliderRef}
        trackRef={trackRef}
        handleMouseDown={handleMouseDown}
        handleMouseMove={handleMouseMove}
        handleMouseUp={handleMouseUp}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
      />
    </>
  );
}
