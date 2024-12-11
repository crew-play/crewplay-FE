import { getTopics } from "@/api/vote-topic";
import { useQuery } from "@tanstack/react-query";

export default function useGetVoteTopic() {
  return useQuery({ queryKey: ["topics"], queryFn: getTopics });
}
