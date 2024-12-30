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
    <div className="mt-[51px] flex w-[87.5px] flex-col text-[24px] font-bold leading-[33.6px] lg:mr-[202.5px]">
      <ul>
        <li
          className={`mb-[40px] cursor-pointer ${selectedMenu === "editProfile" ? "text-black" : "text-gray-009 hover:text-black-003"}`}
          onClick={() => {
            return handleClickSideMenu("editProfile");
          }}
        >
          정보수정
        </li>
        <li
          className={`mb-[40px] cursor-pointer ${selectedMenu === "voteManage" ? "text-black" : "text-gray-009 hover:text-gray-010"}`}
          onClick={() => {
            return handleClickSideMenu("voteManage");
          }}
        >
          투표관리
        </li>
        <div className="mb-[40px] border-t border-t-gray-012" />
        <li
          className="cursor-pointer text-gray-009 hover:text-gray-010"
          onClick={handleClickLogout}
        >
          로그아웃
        </li>
      </ul>
    </div>
  );
}
