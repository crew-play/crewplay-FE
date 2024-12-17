import { thisWeekVote } from "@/api/vote";
import { IVoteRequestData } from "@/interface/vote";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useThisWeekVote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["thisWeekVote"],
    mutationFn: ({ voteId, candidateId }: IVoteRequestData) => {
      return thisWeekVote({ voteId, candidateId });
    },
    onSuccess: () => {
      alert("이번주 투표에 성공하였습니다.");
      queryClient.invalidateQueries({ queryKey: ["thisWeekVoteCandidate"] });
    },
    onError: () => {
      alert("이번주 투표에 실패하였습니다.");
    },
  });
}
