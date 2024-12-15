import { getLatestVoteResults, getThisWeekVoteResult } from "@/api/vote";
import { useQueries, useQuery } from "@tanstack/react-query";

export default function useGetVoteResults() {
  return useQuery({
    queryKey: ["latestVoteResult"],
    queryFn: getLatestVoteResults,
  });
}
