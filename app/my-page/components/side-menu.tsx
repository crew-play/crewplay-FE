import { TUserProfileSelectedMenu } from "@/interface/user-profile";
import { atomUserAuth } from "@/jotai/user-auth";
import { removeToken } from "@/utils/token";
import { SetStateAction, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { Dispatch } from "react";

interface ISideMenuProps {
  readonly selectedMenu: TUserProfileSelectedMenu;
  readonly setSelectedMenu: Dispatch<SetStateAction<TUserProfileSelectedMenu>>;
}

export default function SideMenu({
  selectedMenu,
  setSelectedMenu,
}: ISideMenuProps) {
  const router = useRouter();
  const setUserAuth = useSetAtom(atomUserAuth);

  const handleClickSideMenu = (type: TUserProfileSelectedMenu) => {
    setSelectedMenu(type);
  };

  const handleClickLogout = async () => {
    await removeToken("refresh");
    localStorage.removeItem("access");

    setUserAuth({
      nickname: "",
      role: "ANONYMOUS",
      favoriteClub: "",
    });

    router.push("/");
  };

  return (
    <div className="w-full text-[20px] font-bold leading-[20px] lg:mr-[202.5px] lg:max-w-[87.5px] lg:pt-[51px] lg:text-[24px] lg:leading-[33.6px]">
      <ul className="flex flex-row lg:flex-col">
        <li
          className={`w-full cursor-pointer py-[14px] text-center lg:mb-[40px] lg:py-0 ${selectedMenu === "editProfile" ? "border-b-2 border-black-001 text-black lg:border-none" : "text-gray-009 hover:text-black-003"}`}
          onClick={() => {
            return handleClickSideMenu("editProfile");
          }}
        >
          정보수정
        </li>
        <li
          className={`w-full cursor-pointer py-[14px] text-center lg:mb-[40px] lg:py-0 ${selectedMenu === "voteManage" ? "border-b-2 border-black-001 text-black lg:border-none" : "text-gray-009 hover:text-gray-010"}`}
          onClick={() => {
            return handleClickSideMenu("voteManage");
          }}
        >
          투표관리
        </li>
        <div className="mb-[40px] hidden border-t border-t-gray-012 lg:block" />
        <li
          className="hidden cursor-pointer text-gray-009 hover:text-gray-010 lg:block"
          onClick={handleClickLogout}
        >
          로그아웃
        </li>
      </ul>
    </div>
  );
}
