import { deleteFavoriteClub } from "@/api/user-profile";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

interface IUseDeleteFavoriteClubProps {
  readonly setIsOpenDeleteFavoriteClubConfirmModal: Dispatch<
    SetStateAction<boolean>
  >;
}

export default function useDeleteFavoriteClub({
  setIsOpenDeleteFavoriteClubConfirmModal,
}: IUseDeleteFavoriteClubProps) {
  return useMutation({
    mutationKey: ["deleteFavorite"],
    mutationFn: deleteFavoriteClub,
    onSuccess: () => {
      alert("선호 구단을 삭제하였습니다.");
      setIsOpenDeleteFavoriteClubConfirmModal(false);
    },
    onError: () => {
      alert("선호 구단 삭제에 실패하였습니다.");
      setIsOpenDeleteFavoriteClubConfirmModal(false);
    },
  });
}
