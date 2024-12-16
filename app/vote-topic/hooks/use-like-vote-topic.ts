import { likeTopic } from "@/api/vote-topic";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLikeVoteTopic() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["likeVoteTopic"],
    mutationFn: likeTopic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
    onError: () => {
      alert("주제 추천을 실패하였습니다.");
    },
  });
}
