"use client";

import { atomSignUpForm, atomSignUpStep } from "@/jotai/sign-up";
import { useAtom, useAtomValue } from "jotai";
import NicknameDescription from "./components/nickname/nickname-description";
import NicknameForm from "./components/nickname/nickname-form";
import SelectClubDescription from "./components/club/select-club-description";
import SelectClubList from "./components/club/select-club-list";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import GoBackButton from "./components/nickname/go-back-button";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
export default function SignUpPage() {
  const [signUpStep, setSignUpStep] = useAtom(atomSignUpStep);
  const signUpForm = useAtomValue(atomSignUpForm);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  const router = useRouter();

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }

    if (signUpForm.providerId === "") {
      router.push("/");
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
