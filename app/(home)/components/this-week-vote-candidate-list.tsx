import { useState } from "react";
import ThisWeekVoteCandidateItem from "./this-week-vote-candidate-item";

const Arr = ["1", "2", "3", "4", "5"];

export default function ThisWeekVoteCandidateList() {
  const [isSelected, setIsSelected] = useState<number>(-1);

  const handleClickCandidateItem = (index: number) => {
    if (isSelected === index) {
      setIsSelected(-1);
    } else {
      setIsSelected(index);
    }
  };

  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-y-[10px] lg:w-[720px]">
      {Arr.map((data, index) => {
        return (
          <ThisWeekVoteCandidateItem
            key={index}
            index={index}
            isSelected={isSelected}
            onClick={handleClickCandidateItem}
          />
        );
      })}
    </div>
  );
}
