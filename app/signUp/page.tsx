"use client";

import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { atomSignUpStep } from "@/jotai/sign-up";
import { useAtom } from "jotai";
import { useEffect } from "react";
import SelectClubDescription from "./components/club/select-club-description";
import SelectClubList from "./components/club/select-club-list";
import GoBackButton from "./components/nickname/go-back-button";
import NicknameDescription from "./components/nickname/nickname-description";
import NicknameForm from "./components/nickname/nickname-form";
export default function SignUpPage() {
  const [signUpStep, setSignUpStep] = useAtom(atomSignUpStep);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  const handleClickBackButton = () => {
    setSignUpStep("nickname");
  };

  const renderComponent = () => {
    switch (signUpStep) {
      case "nickname":
        return (
          <>
            <NicknameDescription />
            <NicknameForm />
          </>
        );
      case "club":
        return (
          <>
            <GoBackButton text="회원가입" onClick={handleClickBackButton} />
            <SelectClubDescription />
            <SelectClubList />
          </>
        );
    }
  };

  switch (signUpStep) {
    case "nickname":
  }

  return <div className="w-full lg:w-[382px]">{renderComponent()}</div>;
}
