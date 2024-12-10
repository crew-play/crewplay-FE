import { SetStateAction } from "jotai";
import { Dispatch, RefObject } from "react";

interface IThisWeekVoteCandidateItem {
  readonly index: number;
  readonly isSelected: number;
  readonly checkBoxRef: RefObject<HTMLInputElement>;
  readonly setIsSelected: Dispatch<SetStateAction<number>>;
}

export default function ThisWeekVoteCandidateItem({
  index,
  isSelected,
  checkBoxRef,
  setIsSelected,
}: IThisWeekVoteCandidateItem) {
  const isChecked = isSelected === index;

  const handleClickCandidateItem = (id: number) => {
    if (checkBoxRef.current) {
      const inputElements = checkBoxRef.current.querySelectorAll("input");

      inputElements.forEach((element) => {
        if (element.checked) {
          element.checked = false;
        }
      });

      if (isSelected === id) {
        setIsSelected(-1);
      } else {
        setIsSelected(id);
      }
    }
  };

  return (
    <div
      className={`flex h-[52px] w-full items-center rounded-[6px] px-[24px] lg:h-[60px] ${isChecked ? "bg-yellow-001" : "bg-gray-005 hover:bg-white-006"} cursor-pointer text-[16px] font-medium leading-[16px]`}
    >
      <input
        type="checkbox"
        name={String(index)}
        id={String(index)}
        className="size-[16px] cursor-pointer appearance-none rounded-[50%] border-2 border-black-001 outline-none checked:border-[3px] checked:border-white-001 checked:bg-black-001 checked:ring-2 checked:ring-black-001"
        onClick={() => {
          return handleClickCandidateItem(index);
        }}
      />

      <label
        htmlFor={String(index)}
        className="ml-[12px] flex h-full grow cursor-pointer items-center"
      >
        최형우 (KIA)
      </label>
    </div>
  );
}
