"use client";

import { TUserProfileSelectedMenu } from "@/interface/user-profile";
import { useState } from "react";
import MyPageProfile from "./components/my-page-profile";
import SideMenu from "./components/side-menu";

export default function MyPage() {
  const [selectedMenu, setSelectedMenu] =
    useState<TUserProfileSelectedMenu>("editProfile");

  return (
    <div className="flex justify-center">
      <SideMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="border-l border-l-gray-012" />
      {selectedMenu === "editProfile" && <MyPageProfile />}
    </div>
  );
}
