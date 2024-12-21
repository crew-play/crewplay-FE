import { DAY, TDay } from "@/constants/calendar-constants";

interface IGenerateCalendar {
  readonly year: number;
  readonly month: number;
}

interface IGetDayInMonth extends IGenerateCalendar {
  readonly date: number;
}

export const generateCalendar = ({
  year,
  month,
}: IGenerateCalendar): { lastDate: number; lastDay: number; day: TDay } => {
  // 이번 달의 마지막날 날짜와 요일 구하기
  const date = new Date(year, month + 1, 0);
  const lastDate = date.getDate();
  const lastDay = date.getDay();

  return {
    lastDate,
    lastDay,
    day: DAY[lastDay],
  };
};

export const getDayInMonth = ({ year, month, date }: IGetDayInMonth) => {
  const day = new Date(year, month, date);
  const dayOfWeek = DAY[day.getDay()];
  return dayOfWeek;
};
