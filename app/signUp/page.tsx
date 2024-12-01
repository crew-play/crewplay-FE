"use client";

import { atomSignUpForm, atomSignUpStep } from "@/jotai/sign-up";
import { useAtomValue } from "jotai";
import NicknameDescription from "./components/nickname/nickname-description";
import NicknameForm from "./components/nickname/nickname-form";
import SelectClubDescription from "./components/club/select-club-description";
import SelectClubList from "./components/club/select-club-list";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function SignUpPage() {
  const signUpStep = useAtomValue(atomSignUpStep);
  const signUpForm = useAtomValue(atomSignUpForm);
  const router = useRouter();

  useEffect(() => {
    if (signUpForm.providerId === "") {
      router.push("/");
    }
  }, []);

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
            <SelectClubDescription />
            <SelectClubList />
          </>
        );
    }
  };

  switch (signUpStep) {
    case "nickname":
  }

  return <div className="mx-auto w-[384px]">{renderComponent()}</div>;
}
