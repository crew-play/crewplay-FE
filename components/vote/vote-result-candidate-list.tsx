"use client";

import { ICandidate } from "@/interface/vote";
import VoteResultCandidateItem from "./vote-result-candidate-item";

interface ICandidateListProps {
  readonly candidates: ICandidate[];
  readonly myVote: number;
  readonly isBestCandidateId: number;
}

export default function VoteResultCandidateList({
  candidates,
  myVote,
  isBestCandidateId,
}: ICandidateListProps) {
  return (
    <div>
      {candidates.map((candidate) => {
        return (
          <VoteResultCandidateItem
            key={candidate.candidateId}
            candidate={candidate.example}
            percentage={50}
            voteCount={candidate.voteCount}
            myVote={myVote}
            candidateId={candidate.candidateId}
            isBestCandidateId={isBestCandidateId}
          />
        );
      })}
    </div>
  );
}
