"use client";

import { TUserProfileSelectedMenu } from "@/interface/user-profile";
import { useState } from "react";
import MyPageProfile from "./components/my-page-profile";
import SideMenu from "./components/side-menu";

export default function MyPage() {
  const [selectedMenu, setSelectedMenu] =
    useState<TUserProfileSelectedMenu>("editProfile");

  return (
    <div className="flex flex-col px-[24px] py-[32px] lg:flex-row lg:justify-center lg:px-[16px] lg:py-0">
      <SideMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="hidden border-l border-l-gray-012 lg:block" />
      {selectedMenu === "editProfile" && <MyPageProfile />}
    </div>
  );
}
