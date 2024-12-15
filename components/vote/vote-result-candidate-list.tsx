"use client";

import { ICandidate } from "@/interface/vote";
import VoteResultCandidateItem from "./vote-result-candidate-item";

interface ICandidateListProps {
  readonly candidates: ICandidate[];
}

export default function VoteResultCandidateList({
  candidates,
}: ICandidateListProps) {
  return (
    <div>
      {candidates.map((candidate, index) => {
        return (
          <VoteResultCandidateItem
            isFirst={index === 0}
            key={candidate.candidateId}
            candidate={candidate.example}
            percentage={50}
            voteCount={candidate.voteCount}
          />
        );
      })}
    </div>
  );
}
