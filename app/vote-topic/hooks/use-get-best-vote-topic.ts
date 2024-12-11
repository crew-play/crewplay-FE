import { getBestVoteTopic } from "@/api/vote-topic";
import { useQuery } from "@tanstack/react-query";

export default function useGetBestVoteTopic() {
  return useQuery({
    queryKey: ["bestVoteTopic"],
    queryFn: getBestVoteTopic,
  });
}
