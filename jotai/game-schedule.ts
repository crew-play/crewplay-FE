import { atom } from "jotai";

interface IAtomSelectedDate {
  readonly year: number;
  readonly month: number;
  readonly endDate: number;
  readonly selectedDate: number;
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const initialDate = new Date(currentYear, currentMonth, 0);

export const atomSelectedDate = atom<IAtomSelectedDate>({
  year: initialDate.getFullYear(),
  month: initialDate.getMonth() + 1,
  endDate: initialDate.getDate(),
  selectedDate: currentDate.getDate() + 1,
});
