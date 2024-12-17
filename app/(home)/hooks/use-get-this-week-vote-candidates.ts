import { getThisWeekVoteCandidates } from "@/api/vote";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useGetThisWeekVoteCandidates(isLogin: boolean) {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["thisWeekVoteCandidate"] });
  }, [isLogin]);

  return useQuery({
    queryKey: ["thisWeekVoteCandidate"],
    queryFn: () => {
      return getThisWeekVoteCandidates();
    },
  });
}
