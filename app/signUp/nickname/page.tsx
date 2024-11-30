"use client";

import NicknameDescription from "./components/nickname-description";
import NicknameForm from "./components/nickname-form";

export default function signUpNickname() {
  return (
    <div className="mx-auto w-[384px]">
      <NicknameDescription />
      <NicknameForm />
    </div>
  );
}
