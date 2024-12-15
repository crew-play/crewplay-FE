import { getThisWeekVoteResult } from "@/api/vote";
import { useQuery } from "@tanstack/react-query";

export default function useGetThisWeekVoteResult() {
  return useQuery({
    queryKey: ["thisWeekVoteResult"],
    queryFn: getThisWeekVoteResult,
  });
}
