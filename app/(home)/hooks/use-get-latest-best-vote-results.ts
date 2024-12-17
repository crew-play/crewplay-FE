import { getLatestBestVoteResult } from "@/api/vote";
import { useQuery } from "@tanstack/react-query";

export default function useGetLatestBestVoteResult() {
  return useQuery({
    queryKey: ["latestVoteResult"],
    queryFn: getLatestBestVoteResult,
  });
}
