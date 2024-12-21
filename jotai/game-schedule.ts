import { atom } from "jotai";

interface IAtomSelectedDate {
  readonly year: number;
  readonly month: number;
  readonly endDate: number;
  readonly selectedDate: number;
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const initialDate = new Date(currentYear, currentMonth, 0);

export const atomSelectedDate = atom<IAtomSelectedDate>({
  year: initialDate.getFullYear(),
  month: initialDate.getMonth() + 1,
  endDate: initialDate.getDate() + 1,
  selectedDate: currentDate.getDate() + 1,
});
