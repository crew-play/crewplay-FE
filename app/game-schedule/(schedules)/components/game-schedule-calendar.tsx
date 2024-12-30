import { atomSelectedDate } from "@/jotai/game-schedule";
import { getDayInMonth } from "@/utils/calendar";
import { useAtom } from "jotai";
import LeftArrow from "@/public/svg/schedule/left-arrow.svg";
import RightArrow from "@/public/svg/schedule/right-arrow.svg";
import useDrag from "@/hooks/use-drag";

export default function GameScheduleCalendar() {
  const [selectedDate, setSelectedDate] = useAtom(atomSelectedDate);

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

  const handleClickDate = (date: number) => {
    setSelectedDate((prev) => {
      return { ...prev, selectedDate: date };
    });
  };

  const handleClickPrevNextButton = (type: "PREV" | "NEXT") => {
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
    <div className="flex items-center px-0 py-[16px] lg:px-[32px]">
      <button
        type="button"
        className="mr-[3.2px] flex size-[28px] items-center justify-center lg:mr-[44.92px]"
        onClick={() => {
          return handleClickPrevNextButton("PREV");
        }}
      >
        <LeftArrow width={7} height={11} fill="#C3CAD9" />
      </button>
      <div
        className="overflow-x-auto scroll-smooth"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex" ref={trackRef}>
          {Array.from({ length: selectedDate.endDate }).map((_, index) => {
            const dayOfWeek = getDayInMonth({
              ...selectedDate,
              date: index + 1,
            });
            const isSunday = dayOfWeek === "Sun";

            return (
              <div
                key={index + 1}
                className={`${selectedDate.endDate === index + 1 ? "mr-0" : "mr-0 lg:mr-[44.92px]"} ${selectedDate.selectedDate === index + 1 && "rounded-[40px] border border-black"} flex h-[70px] flex-col items-center justify-center px-[10px]`}
                onClick={() => {
                  return handleClickDate(index + 1);
                }}
              >
                <span
                  className={`mb-[8px] align-middle text-[14px] leading-[16.71px] text-gray-015 ${isSunday ? "text-red-003" : "text-gray-015"}`}
                >
                  {dayOfWeek}
                </span>
                <span className="align-middle text-[18px] font-bold leading-[21.48px] text-black-005">
                  {index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="ml-[3.2px] flex size-[28px] items-center justify-center lg:ml-[44.92px]"
        onClick={() => {
          return handleClickPrevNextButton("NEXT");
        }}
      >
        <RightArrow width={7} height={11} fill="#C3CAD9" />
      </button>
    </div>
  );
}
