import { registerTopic } from "@/api/vote-topic";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useRegisterVoteTopic() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["registerVoteTopic"],
    mutationFn: registerTopic,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
      alert("주제 등록이 완료되었습니다.");
    },
    onError: () => {
      alert("주제 등록에 실패하였습니다.");
    },
  });
}
