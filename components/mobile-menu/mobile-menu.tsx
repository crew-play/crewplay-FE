import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import BottomArrow from "@/public/svg/bottom-arrow.svg";
import Exit from "@/public/svg/exit.svg";
import Logo from "@/public/svg/logo.svg";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileWeeklyMenu from "./mobile-weekly-menu";
import { removeToken } from "@/utils/token";
import { atomUserAuth } from "@/jotai/user-auth";

export default function MobileMenu() {
  const router = useRouter();
  const [isOpenWeekly, setIsOpenWeekly] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);
  const setIsOpenMobileMenu = useSetAtom(atomIsOpenMobileMenu);
  const setUserAuth = useSetAtom(atomUserAuth);

  const handleClickOpenWeeklyMenu = () => {
    setIsOpenWeekly((prev) => {
      return !prev;
    });
  };

  const handleClickCloseMenu = () => {
    setIsOpenMobileMenu(false);
  };

  const handleClickMenu = (url: string) => {
    router.push(url);
    setIsOpenMobileMenu(false);
  };

  const handleLogout = async () => {
    await removeToken("refresh");
    localStorage.removeItem("access");

    setUserAuth({
      nickname: "",
      role: "ANONYMOUS",
      favoriteClub: "",
    });

    router.push("/");
    setIsOpenMobileMenu(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (width > 1024) {
      setIsOpenMobileMenu(false);
    }
  }, [width]);

  return (
    <div className="absolute left-0 top-0 z-[1000] flex h-screen w-screen flex-col bg-white-001 px-[24px] py-[36px]">
      <div
        className="mb-[10px] ml-auto flex size-[40px] items-center justify-center"
        onClick={handleClickCloseMenu}
      >
        <Exit width={12} height={12} stroke="#111111" />
      </div>
      <div className="mb-[10px] py-[16px]">
        <Logo />
      </div>
      <div
        className="mb-[10px] flex items-center justify-center rounded-[8px] border border-black-001 bg-white-001 py-[16.5px] text-[16px] font-medium leading-[19.09px]"
        onClick={() => {
          return handleClickMenu("/login");
        }}
      >
        <span>로그인/회원가입</span>
      </div>
      <div>
        <div
          className="mb-[10px] flex cursor-pointer justify-between border-b border-b-gray-003 px-[24px] pb-[26px] pt-[16px]"
          onClick={handleClickOpenWeeklyMenu}
        >
          <span className="text-[16px] font-bold leading-[22.4px] text-black-001">
            주간 투표
          </span>
          <div className="flex size-[24px] items-center justify-center">
            <BottomArrow
              width={12}
              height={6}
              stroke="#666666"
              className={isOpenWeekly ? "rotate-180" : "rotate-[360deg]"}
            />
          </div>
        </div>
        {isOpenWeekly && <MobileWeeklyMenu onClick={handleClickMenu} />}
        <div
          className="mb-[10px] flex cursor-pointer justify-between border-b border-b-gray-003 bg-white-001 px-[24px] pb-[26px] pt-[16px]"
          onClick={() => {
            return handleClickMenu("/today-news");
          }}
        >
          <span className="text-[16px] font-bold leading-[22.4px] text-black-001">
            오늘의 소식
          </span>
        </div>
        <div
          className="mb-[10px] flex cursor-pointer justify-between border-b border-b-gray-003 bg-white-001 px-[24px] pb-[26px] pt-[16px]"
          onClick={() => {
            return handleClickMenu("/my-page");
          }}
        >
          <span className="text-[16px] font-bold leading-[22.4px] text-black-001">
            마이페이지
          </span>
        </div>
        <div
          className="mb-[10px] flex cursor-pointer justify-between bg-white-001 px-[24px] pb-[26px] pt-[16px]"
          onClick={handleLogout}
        >
          <span className="text-[16px] font-bold leading-[22.4px] text-gray-003">
            로그아웃
          </span>
        </div>
      </div>
    </div>
  );
}
