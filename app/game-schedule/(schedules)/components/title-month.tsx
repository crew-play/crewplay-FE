import { atomSelectedDate } from "@/jotai/game-schedule";
import LeftArrow from "@/public/svg/schedule/left-arrow.svg";
import RightArrow from "@/public/svg/schedule/right-arrow.svg";
import { useAtom } from "jotai";
import { RefObject } from "react";

interface ITitleMonthProps {
  readonly sliderRef: RefObject<HTMLDivElement>;
}

export default function TitleMonth({ sliderRef }: ITitleMonthProps) {
  const [selectedDate, setSelectedDate] = useAtom(atomSelectedDate);

  const month =
    selectedDate.month < 10 ? `0${selectedDate.month}` : selectedDate.month;

  const handleClickNextMonth = () => {
    if (sliderRef.current) {
      const firstDayNode = sliderRef.current.children[0] as HTMLElement;
      firstDayNode.style.transform = "translateX(0px)";
    }

    setSelectedDate(({ year, month, ...prev }) => {
      return {
        ...prev,
        year: month === 12 ? year + 1 : year,
        month: month === 12 ? 1 : month + 1,
        selectedDate: 1,
      };
    });
  };

  const handleClickPrevMonth = () => {
    if (sliderRef.current && sliderRef.current.children) {
      const firstDayNode = sliderRef.current.children[0] as HTMLElement;
      firstDayNode.style.transform = "translateX(0px)";
    }

    setSelectedDate(({ year, month, ...prev }) => {
      return {
        ...prev,
        year: month === 1 ? year - 1 : year,
        month: month === 1 ? 12 : month - 1,
        selectedDate: 1,
      };
    });
  };

  return (
    <div className="mb-[16px] flex flex-col items-center text-[28px] font-bold leading-[33.41px] lg:flex-row lg:justify-between lg:text-[32px] lg:leading-[38.19px]">
      <h2 className="mb-[16px] lg:mb-0">KBO 경기 일정</h2>
      <div className="flex items-center justify-between">
        <button
          className="flex size-[24px] items-center justify-center"
          onClick={handleClickPrevMonth}
        >
          <LeftArrow width={7} height={11} fill="#C3CAD9" />
        </button>
        <span className="mx-[8px]">{`${selectedDate.year}.${month}`}</span>
        <button
          className="flex size-[24px] items-center justify-center"
          onClick={handleClickNextMonth}
        >
          <RightArrow width={7} height={11} fill="#C3CAD9" />
        </button>
      </div>
    </div>
  );
}
