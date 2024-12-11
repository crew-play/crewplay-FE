import { getLatestBestVoteResults } from "@/api/vote-result";
import { useQuery } from "@tanstack/react-query";

export default function useGetLatestBestVoteResult() {
  return useQuery({
    queryKey: ["latestBestVoteResult"],
    queryFn: getLatestBestVoteResults,
  });
}
