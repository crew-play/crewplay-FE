import { registerFavoriteClub } from "@/api/user-profile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SetStateAction } from "jotai";
import { Dispatch } from "react";

export default function useRegisterFavoriteClub(
  setIsOpenSelectClubModal: Dispatch<SetStateAction<boolean>>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["registerFavoriteClub"],
    mutationFn: registerFavoriteClub,
    onSuccess: () => {
      alert("선호 구단 등록에 성공하였습니다.");
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      setIsOpenSelectClubModal(false);
    },
    onError: () => {
      alert("선호 구단 등록에 실패하였습니다.");
      setIsOpenSelectClubModal(false);
    },
  });
}
