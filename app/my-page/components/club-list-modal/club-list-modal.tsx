"use client";

import { atomSelectedClub } from "@/jotai/my-page";
import Exit from "@/public/svg/exit.svg";
import { useAtom } from "jotai";
import { Dispatch, SetStateAction, useEffect } from "react";
import ClubList from "./club-list";
import useRegisterFavoriteClub from "../../hooks/use-register-favorite-club";

interface IClubListModalProps {
  readonly myClubName: string;
  readonly setIsOpenSelectClubModal: Dispatch<SetStateAction<boolean>>;
}

export default function ClubListModal({
  myClubName,
  setIsOpenSelectClubModal,
}: IClubListModalProps) {
  const [selectedClub, setSelectedClub] = useAtom(atomSelectedClub);

  const { mutate } = useRegisterFavoriteClub(setIsOpenSelectClubModal);

  const isDisabled = selectedClub === "";

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    setSelectedClub(myClubName);
  }, [myClubName]);

  const handleClickCloseModal = () => {
    setIsOpenSelectClubModal(false);
  };

  const handleClickRegisterClub = () => {
    mutate(selectedClub);
  };

  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black-001-opacity">
      <div className="rounded-[12px] bg-white-001 px-[24px] py-[43.5px] shadow-[0_4px_20px_0px_rgba(0,0,0,0.4)] lg:w-[384px]">
        <div className="flex">
          <div className="grow">
            <h3 className="mb-[5px] text-[20px] font-semibold leading-[28px] text-black-003">
              어떤 야구 구단을 응원하나요?
            </h3>
            <p className="text-[16px] leading-[22.4px] text-gray-002">
              하나의 구단만 선택할 수 있어요
            </p>
          </div>
          <button
            type="button"
            className="mt-[2px] flex items-center justify-center lg:size-[24px]"
            onClick={handleClickCloseModal}
          >
            <Exit className="lg:size-[14px]" stroke="#000000" />
          </button>
        </div>
        <ClubList />
        <button
          className="h-[64px] w-full rounded-[8px] bg-yellow-001 text-[18px] font-bold leading-[25.2px] disabled:bg-gray-001"
          onClick={handleClickRegisterClub}
          disabled={isDisabled}
        >
          저장
        </button>
      </div>
    </div>
  );
}
