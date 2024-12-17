"use client";

import { ICandidate } from "@/interface/vote";
import VoteResultCandidateItem from "./vote-result-candidate-item";

interface ICandidateListProps {
  readonly candidates: ICandidate[];
  readonly myVote: number;
  readonly isBestCandidateId: number;
  readonly totalVote: number;
}

export default function VoteResultCandidateList({
  candidates,
  myVote,
  isBestCandidateId,
  totalVote,
}: ICandidateListProps) {
  return (
    <div>
      {candidates.map((candidate) => {
        return (
          <VoteResultCandidateItem
            key={
              candidate.candidateId + candidate.example + candidate.voteCount
            }
            candidate={candidate.example}
            voteCount={candidate.voteCount}
            myVote={myVote}
            candidateId={candidate.candidateId}
            isBestCandidateId={isBestCandidateId}
            totalVote={totalVote}
          />
        );
      })}
    </div>
  );
}
