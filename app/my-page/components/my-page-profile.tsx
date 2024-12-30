import ConfirmModal from "@/components/confirm-modal";
import NotExist from "@/components/not-exist";
import Spinner from "@/components/spinner";
import { INicknameForm } from "@/interface/form";
import Edit from "@/public/svg/edit.svg";
import Delete from "@/public/svg/exit.svg";
import RightArrow from "@/public/svg/right-arrow.svg";
import { nicknameSchema } from "@/schema/sign-up-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useDeleteFavoriteClub from "../hooks/use-delete-favorite-club";
import useGetUserProfile from "../hooks/use-get-user-profile";
import useUpdateUserNickname from "../hooks/use-update-user-nickname";
import ClubListModal from "./club-list-modal/club-list-modal";
import useSecession from "../hooks/use-secession";
import { useRouter } from "next/navigation";

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

  const { isLoading, isError } = useGetUserProfile();

  const router = useRouter();

  const { mutate: nickNameMutate } = useUpdateUserNickname({
    setIsOpenUpdateNicknameConfirmModal,
    setIsEditMode,
    getValues,
  });

  const { mutate: deleteFavoriteMutate } = useDeleteFavoriteClub({
    setIsOpenDeleteFavoriteClubConfirmModal,
  });

  const handleMoveHome = () => {
    router.push("/");
  };

  const { mutate: secessionMutate } = useSecession({ handleMoveHome });

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

  const data = {
    data: {
      clubName: "SSG 랜더스",
      email: "tjdwn9753@naver.com",
      emblemImg: "",
      nickname: "덩두",
    },
  };

  if (!data || !data.data)
    return (
      <div className="mt-[51px] lg:ml-[217px] lg:w-[725px]">
        <NotExist text="내 정보 조회에 실패하였습니다. 다시 조회 해주세요." />
      </div>
    );

  const { clubName, email, emblemImg, nickname } = data.data;

  const hasFavoriteClub = clubName;

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
    deleteFavoriteMutate(clubName);
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

  const handleSecession = () => {
    const result = confirm("회원 탈퇴를 진행하시겠습니까?");

    if (result) {
      secessionMutate();
    }
  };

  return (
    <>
      <div className="flex min-h-[calc(100vh-192px)] w-full flex-col lg:ml-[217px] lg:block lg:min-h-[calc(100vh-164px)] lg:max-w-[725px] lg:pt-[51px]">
        <div className="mb-[32px] lg:mb-[40px]">
          <h2 className="mb-[24px] mt-[32px] text-[20px] font-bold leading-[28px] text-black lg:mt-0 lg:text-[24px] lg:leading-[33.6px]">
            내 정보
          </h2>
          <form>
            <div className="mb-[14px]">
              <div
                className={`flex items-center rounded-[12px] border px-[20px] py-[16px] text-[20px] leading-[28px] text-black lg:p-[16px] ${isEditMode ? (errors.nickname ? "border-red-001" : "border-yellow-003") : "border-gray-012"}`}
              >
                <label htmlFor="nickname" className="min-w-[53px] font-bold">
                  닉네임
                </label>
                <input
                  type="text"
                  id="nickname"
                  className={`w-full px-[16px] font-medium outline-none ${isEditMode ? "placeholder:text-gray-009" : "placeholder:text-black"}`}
                  placeholder={nickname}
                  readOnly={!isEditMode}
                  {...register("nickname")}
                />
                <button
                  type="button"
                  className={`flex ${isEditMode ? "min-w-[35px]" : "size-[24px]"} items-center justify-center text-[20px] font-medium leading-[28px]`}
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
            <div className="flex items-center rounded-[12px] border border-gray-012 px-[20px] py-[16px] text-[20px] leading-[28px] text-black lg:p-[16px]">
              <label htmlFor="email" className="min-w-[35px] font-bold">
                계정
              </label>
              <input
                id="email"
                type="text"
                className="w-full px-[16px] font-medium outline-none"
                readOnly
                defaultValue={email}
              />
            </div>
          </form>
        </div>
        <div>
          <div className="mb-[24px] flex items-center justify-between">
            <h2 className="text-[20px] font-bold leading-[28px] text-black lg:text-[24px] lg:leading-[33.6px]">
              선호 구단
            </h2>
            <button
              className="mr-[20px] flex size-[24px] items-center justify-center"
              onClick={handleClickOpenSelectClubModal}
            >
              <RightArrow className="h-[16px] w-[9px]" stroke="#8B8B8B" />
            </button>
          </div>
          <div
            className={`mb-[40px] flex items-center rounded-[12px] border border-gray-012 bg-white-001 lg:mb-0 ${hasFavoriteClub ? "px-[20px] py-[16px]" : "py-[36px]"}`}
          >
            {hasFavoriteClub ? (
              <>
                <div className="flex h-[68px] items-center">
                  <Image
                    src={emblemImg}
                    alt="club-emblem"
                    width={55}
                    height={35}
                  />
                </div>
                <span className="mx-[16px] w-full text-[20px] font-bold leading-[28px] text-black">
                  {clubName}
                </span>
                <button
                  type="button"
                  className="flex size-[24px] items-center justify-center"
                  onClick={handleClickOpenDeleteFavoriteClubModal}
                >
                  <Delete width={12} height={12} stroke="#E2E5E5" />
                </button>
              </>
            ) : (
              <p className="w-full text-center text-[20px] font-medium leading-[28px] text-gray-009">
                아직 등록한 구단이 없어요.
              </p>
            )}
          </div>
        </div>
        <button
          type="button"
          className="mt-auto w-full rounded-[8px] border border-black-001 px-[16px] py-[16.5px] font-medium hover:bg-white-003 lg:mt-[40px] lg:w-auto"
          onClick={handleSecession}
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
