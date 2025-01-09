import { secession } from "@/api/user-profile";
import { useMutation } from "@tanstack/react-query";

interface IUseSecessionProps {
  readonly handleMoveHome: () => void;
}

export default function useSecession({ handleMoveHome }: IUseSecessionProps) {
  return useMutation({
    mutationKey: ["secession"],
    mutationFn: secession,
    onSuccess: () => {
      alert("회원 탈퇴가 되었습니다.");
      handleMoveHome();
    },
    onError: () => {
      alert("회원 탈퇴에 실패 하였습니다.");
    },
  });
}
