"use client";

import NicknameDescription from "../components/nickname/nickname-description";
import NicknameForm from "../components/nickname/nickname-form";

export default function signUpNickname() {
  return (
    <div className="mx-auto w-[384px]">
      <NicknameDescription />
      <NicknameForm />
    </div>
  );
}
