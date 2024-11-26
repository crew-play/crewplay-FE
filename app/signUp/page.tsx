"use client";

import { ReactNode, useState } from "react";
import NicknameDescription from "./components/nickname/nickname-description";
import NicknameForm from "./components/nickname/nickname-form";
import SelectTeamDescription from "./components/team/select-team-desciption";
import SelectTeamList from "./components/team/select-team-list";

export default function SignUp() {
  const [step] = useState<string>("team");

  const stepComponent: { [key: string]: ReactNode } = {
    nickname: (
      <>
        <NicknameDescription />
        <NicknameForm />
      </>
    ),
    team: (
      <>
        <SelectTeamDescription />
        <SelectTeamList />
      </>
    ),
  };

  return (
    <div
      className={`mx-auto flex h-[calc(100vh-164px)] min-h-[400px] ${step === "nickname" && "w-[382px]"} ${step === "team" && "w-[371px]"} flex-col justify-center overflow-auto`}
    >
      {stepComponent[step]}
    </div>
  );
}
