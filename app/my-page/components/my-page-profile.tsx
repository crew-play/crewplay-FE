import ConfirmModal from "@/components/confirm-modal";
import NotExist from "@/components/not-exist";
import Spinner from "@/components/spinner";
import { atomSelectedClub } from "@/jotai/my-page";
import Edit from "@/public/svg/edit.svg";
import Delete from "@/public/svg/exit.svg";
import RightArrow from "@/public/svg/right-arrow.svg";
import { nicknameSchema } from "@/schema/sign-up-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useDeleteFavoriteClub from "../hooks/use-delete-favorite-club";
import useGetUserProfile from "../hooks/use-get-user-profile";
import useUpdateUserNickname from "../hooks/use-update-user-nickname";
import ClubListModal from "./club-list-modal/club-list-modal";
import { atomUserAuth } from "@/jotai/user-auth";
import { INicknameForm } from "@/interface/form";

export default function MyPageProfile() {
  const {
    register,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<INicknameForm>({
    mode: "onChange",
    resolver: yupResolver(nicknameSchema),
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const selectedClub = useAtomValue(atomSelectedClub);

  const [
    isOpenUpdateNicknameConfirmModal,
    setIsOpenUpdateNicknameConfirmModal,
  ] = useState<boolean>(false);
  const [
    isOpenDeleteFavoriteClubConfirmModal,
    setIsOpenDeleteFavoriteClubConfirmModal,
  ] = useState<boolean>(false);
  const [isOpenSelectClubModal, setIsOpenSelectClubModal] =
    useState<boolean>(false);

  const { data, isLoading, isError } = useGetUserProfile();

  const { mutate: nickNameMutate } = useUpdateUserNickname({
    setIsOpenUpdateNicknameConfirmModal,
    setIsEditMode,
    getValues,
  });
  const { mutate: deleteFavoriteMutate } = useDeleteFavoriteClub({
    setIsOpenDeleteFavoriteClubConfirmModal,
  });

  if (isLoading)
    return (
      <div className="mt-[51px] lg:ml-[217px] lg:w-[725px]">
        <Spinner />
      </div>
    );

  if (isError)
    return (
      <div className="mt-[51px] lg:ml-[217px] lg:w-[725px]">
        <NotExist text="내 정보 조회에 실패하였습니다. 다시 조회 해주세요." />
      </div>
    );

  if (!data || !data.data)
    return (
      <div className="mt-[51px] lg:ml-[217px] lg:w-[725px]">
        <NotExist text="내 정보 조회에 실패하였습니다. 다시 조회 해주세요." />
      </div>
    );

  const { clubName, email, emblemImg, nickname } = data.data;

  const checkNickname = (value: string) => {
    return value.length === 0;
  };

  const handleClickEditButton = () => {
    const nicknameValue = getValues("nickname");

    if (isEditMode) {
      if (!checkNickname(nicknameValue)) {
        setIsOpenUpdateNicknameConfirmModal(true);
        return;
      }

      setIsEditMode(false);
      clearErrors();
      return;
    }

    setIsEditMode(true);
  };

  const handleClickConfirmUpdateNickname = () => {
    const nicknameValue = getValues("nickname");
    nickNameMutate(nicknameValue);
  };

  const handleClickCancelUpdateNickname = () => {
    setIsOpenUpdateNicknameConfirmModal(false);
  };

  const handleClickConfirmDeleteFavoriteClub = () => {
    deleteFavoriteMutate(selectedClub);
  };

  const handleClickCancelDeleteFavoriteClub = () => {
    setIsOpenDeleteFavoriteClubConfirmModal(false);
  };

  const handleClickOpenSelectClubModal = () => {
    setIsOpenSelectClubModal(true);
  };

  const handleClickOpenDeleteFavoriteClubModal = () => {
    setIsOpenDeleteFavoriteClubConfirmModal(true);
  };

  return (
    <>
      <div className="mt-[51px] lg:ml-[217px] lg:w-[725px]">
        <div className="mb-[40px]">
          <h2 className="mb-[24px] text-[24px] font-bold leading-[33.6px] text-black">
            내 정보
          </h2>
          <form>
            <div className="mb-[14px]">
              <div
                className={`flex items-center rounded-[12px] border text-[20px] leading-[28px] text-black lg:p-[16px] ${isEditMode ? "border-yellow-003" : "border-gray-012"}`}
              >
                <label htmlFor="nickname" className="font-bold">
                  닉네임
                </label>
                <input
                  type="text"
                  id="nickname"
                  className={`mx-[16px] grow font-medium outline-none ${isEditMode ? "placeholder:text-gray-009" : "placeholder:text-black"}`}
                  placeholder={nickname}
                  readOnly={!isEditMode}
                  {...register("nickname")}
                />
                <button
                  type="button"
                  className={`flex ${isEditMode ? "size-auto" : "size-[24px]"} items-center justify-center text-[20px] font-medium leading-[28px]`}
                  onClick={handleClickEditButton}
                >
                  {isEditMode ? (
                    "완료"
                  ) : (
                    <Edit className="size-[15px]" stroke="#8B8B8B" />
                  )}
                </button>
              </div>
              {errors.nickname && (
                <p className="ml-[16px] mt-[6px] text-[16px] leading-[19.6px] text-red-001">
                  {errors.nickname.message}
                </p>
              )}
            </div>
            <div className="flex items-center rounded-[12px] border border-gray-012 text-[20px] leading-[28px] text-black lg:p-[16px]">
              <label htmlFor="email" className="font-bold">
                계정
              </label>
              <input
                id="email"
                type="text"
                className="mx-[16px] grow font-medium outline-none"
                readOnly
                defaultValue={email}
              />
            </div>
          </form>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[24px] font-bold leading-[33.6px] text-black lg:mb-[24px]">
              선호 구단
            </h2>
            <button
              className="mr-[20px] flex size-[24px] items-center justify-center"
              onClick={handleClickOpenSelectClubModal}
            >
              <RightArrow className="h-[16px] w-[9px]" stroke="#8B8B8B" />
            </button>
          </div>
          <div className="flex items-center rounded-[12px] border border-gray-012 bg-white-001 px-[20px] py-[16px]">
            <div className="flex h-[68px] items-center">
              <Image src={emblemImg} alt="club-emblem" width={55} height={35} />
            </div>
            <span className="mx-[16px] grow text-[20px] font-bold leading-[28px] text-black">
              {clubName}
            </span>
            <button
              type="button"
              className="flex size-[24px] items-center justify-center"
              onClick={handleClickOpenDeleteFavoriteClubModal}
            >
              <Delete width={12} height={12} stroke="#E2E5E5" />
            </button>
          </div>
        </div>
        <button
          type="button"
          className="mt-[40px] rounded-[8px] border border-black-001 px-[16px] py-[16.5px] font-medium hover:bg-white-003"
        >
          회원탈퇴
        </button>
      </div>
      {isOpenUpdateNicknameConfirmModal && (
        <ConfirmModal
          confirmText="닉네임 변경을 하시겠습니까?"
          setIsOpenConfirmModal={setIsOpenUpdateNicknameConfirmModal}
          onClickConfirm={handleClickConfirmUpdateNickname}
          onClickCancel={handleClickCancelUpdateNickname}
        />
      )}
      {isOpenDeleteFavoriteClubConfirmModal && (
        <ConfirmModal
          confirmText="선호 구단을 삭제 하시겠습니까?"
          setIsOpenConfirmModal={setIsOpenDeleteFavoriteClubConfirmModal}
          onClickConfirm={handleClickConfirmDeleteFavoriteClub}
          onClickCancel={handleClickCancelDeleteFavoriteClub}
        />
      )}
      {isOpenSelectClubModal && (
        <ClubListModal
          myClubName={clubName}
          setIsOpenSelectClubModal={setIsOpenSelectClubModal}
        />
      )}
    </>
  );
}
