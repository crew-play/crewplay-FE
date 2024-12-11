import { getLatestVoteResults, getThisWeekVoteResult } from "@/api/vote-result";
import { useQueries } from "@tanstack/react-query";

export default function useGetVoteResults() {
  return useQueries({
    queries: [
      { queryKey: ["thisWeekVoteResult"], queryFn: getThisWeekVoteResult },
      { queryKey: ["latestVoteResult"], queryFn: getLatestVoteResults },
    ],
  });
}
