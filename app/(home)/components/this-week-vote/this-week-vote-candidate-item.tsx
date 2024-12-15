import { atomSelectedCandidate } from "@/jotai/vote";
import { useAtom } from "jotai";
import { useEffect, useRef } from "react";

interface IThisWeekVoteCandidateItem {
  readonly candidateId: number;
  readonly candidateExample: string;
}

export default function ThisWeekVoteCandidateItem({
  candidateId,
  candidateExample,
}: IThisWeekVoteCandidateItem) {
  const [selectedCandidateId, setSelectedCandidateId] = useAtom(
    atomSelectedCandidate,
  );

  const isChecked = selectedCandidateId === candidateId;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      setSelectedCandidateId(-1);
    };
  }, []);

  const handleClickCandidateItem = (id: number) => {
    if (selectedCandidateId === id) {
      setSelectedCandidateId(-1);
    } else {
      setSelectedCandidateId(id);
    }
  };

  return (
    <div
      className={`flex h-[52px] w-full items-center rounded-[6px] px-[24px] lg:h-[60px] ${isChecked ? "bg-yellow-001" : "bg-gray-005 hover:bg-white-006"} cursor-pointer text-[16px] font-medium leading-[16px]`}
    >
      <input
        ref={inputRef}
        type="checkbox"
        name={String(candidateId)}
        id={String(candidateId)}
        className="size-[16px] cursor-pointer appearance-none rounded-[50%] border-2 border-black-001 outline-none checked:border-[3px] checked:border-white-001 checked:bg-black-001 checked:ring-2 checked:ring-black-001"
        onClick={() => {
          return handleClickCandidateItem(candidateId);
        }}
        checked={selectedCandidateId === candidateId}
        readOnly
      />

      <label
        htmlFor={String(candidateId)}
        className="ml-[12px] flex h-full grow cursor-pointer items-center"
      >
        {candidateExample}
      </label>
    </div>
  );
}
