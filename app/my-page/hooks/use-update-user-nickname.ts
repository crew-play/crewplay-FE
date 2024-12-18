import { updateUserNickname } from "@/api/user-profile";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

interface IUseUpdateUserNicknameProps {
  readonly setIsOpenUpdateNicknameConfirmModal: Dispatch<
    SetStateAction<boolean>
  >;
  readonly setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

export default function useUpdateUserNickname({
  setIsOpenUpdateNicknameConfirmModal,
  setIsEditMode,
}: IUseUpdateUserNicknameProps) {
  return useMutation({
    mutationKey: ["updateUserNickname"],
    mutationFn: updateUserNickname,
    onSuccess: () => {
      alert("닉네임 변경에 성공하였습니다.");
      setIsOpenUpdateNicknameConfirmModal(false);
      setIsEditMode(false);
    },
    onError: () => {
      alert("닉네임 변경에 실패하였습니다.");
      setIsOpenUpdateNicknameConfirmModal(false);
      setIsEditMode(false);
    },
  });
}
