import { ICandidate, IVote } from "@/interface/vote-result";
import CandidateItem from "./candidate-item";

interface ICandidateListProps {
  readonly candidateList?: ICandidate[];
  readonly isLoading?: boolean;
  readonly isError?: boolean;
}

export default function CandidateList({
  candidateList,
  isLoading,
  isError,
}: ICandidateListProps) {
  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러 발생</div>;

  if (!candidateList) return <div>데이터 없음</div>;

  return (
    <div>
      {candidateList.map((candidate, index) => {
        return (
          <CandidateItem
            isFirst={index === 0}
            key={candidate.example + String(index)}
            candidate={candidate.example}
            percentage={50}
            count={candidate.voteCount}
          />
        );
      })}
    </div>
  );
}
