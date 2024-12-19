import { updateUserNickname } from "@/api/user-profile";
import { INicknameForm } from "@/interface/form";
import { atomUserAuth } from "@/jotai/user-auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { Dispatch, SetStateAction } from "react";
import { UseFormGetValues } from "react-hook-form";

interface IUseUpdateUserNicknameProps {
  readonly setIsOpenUpdateNicknameConfirmModal: Dispatch<
    SetStateAction<boolean>
  >;
  readonly setIsEditMode: Dispatch<SetStateAction<boolean>>;
  readonly getValues: UseFormGetValues<INicknameForm>;
}

export default function useUpdateUserNickname({
  setIsOpenUpdateNicknameConfirmModal,
  setIsEditMode,
  getValues,
}: IUseUpdateUserNicknameProps) {
  const setUserAuth = useSetAtom(atomUserAuth);
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["updateUserNickname"],
    mutationFn: updateUserNickname,
    onSuccess: () => {
      const newNickname = getValues("nickname");

      alert("닉네임 변경에 성공하였습니다.");
      setUserAuth((prev) => {
        return {
          ...prev,
          nickname: newNickname,
        };
      });
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
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
