import { ICandidate } from "@/interface/vote";
import { useRef } from "react";
import ThisWeekVoteCandidateItem from "./this-week-vote-candidate-item";

interface IThisWeekVoteCandidateListProps {
  readonly candidates: ICandidate[];
}

export default function ThisWeekVoteCandidateList({
  candidates,
}: IThisWeekVoteCandidateListProps) {
  const checkBoxRef = useRef<HTMLInputElement>(null);

  return (
    <div
      ref={checkBoxRef}
      className="mx-auto grid w-full grid-cols-1 gap-y-[10px] lg:w-[720px]"
    >
      {candidates.map((candidate) => {
        return (
          <ThisWeekVoteCandidateItem
            key={candidate.candidateId}
            candidateExample={candidate.example}
            candidateId={candidate.candidateId}
          />
        );
      })}
    </div>
  );
}
