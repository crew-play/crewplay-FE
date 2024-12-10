import { useRef, useState } from "react";
import ThisWeekVoteCandidateItem from "./this-week-vote-candidate-item";

const Arr = ["1", "2", "3", "4", "5"];

export default function ThisWeekVoteCandidateList() {
  const checkBoxRef = useRef<HTMLInputElement>(null);
  const [isSelected, setIsSelected] = useState<number>(-1);

  return (
    <div
      ref={checkBoxRef}
      className="mx-auto grid w-full grid-cols-1 gap-y-[10px] lg:w-[720px]"
    >
      {Arr.map((data, index) => {
        return (
          <ThisWeekVoteCandidateItem
            key={index}
            index={index + 1}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
            checkBoxRef={checkBoxRef}
          />
        );
      })}
    </div>
  );
}
