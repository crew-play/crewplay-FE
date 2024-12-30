"use client";

import Logo from "@/public/svg/logo.svg";
import Link from "next/link";

import { reissueToken } from "@/api/reissue-token";
import { getUserProfile } from "@/api/user-profile";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { atomUserAuth } from "@/jotai/user-auth";
import Hamburger from "@/public/svg/hamburger.svg";
import { decodeToken } from "@/utils/decodeToken";
import { getToken } from "@/utils/token";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "../mobile-menu/mobile-menu";
import HeaderDropdown from "./header-dropdown";
import HeaderProfile from "./header-profile";

interface IHeaderProps {
  readonly isOnlyUseLogo: boolean;
}

export default function Header({ isOnlyUseLogo }: IHeaderProps) {
  const pathname = usePathname();

  const [selectedMenu, setSelectedMenu] = useState<string>(pathname);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isOpenMobileOpenMobileMenu, setIsOpenMobilMenu] =
    useAtom(atomIsOpenMobileMenu);
  const [userAuth, setUserAuth] = useAtom(atomUserAuth);

  const isLogin = userAuth.role !== "ANONYMOUS";

  const isThisWeekMenu =
    selectedMenu === "/" ||
    selectedMenu === "/vote-result" ||
    selectedMenu === "/vote-topic";

  const init = async () => {
    const accessToken = localStorage.getItem("access");

    if (accessToken) {
      const { data } = await getUserProfile();
      const { role } = decodeToken(accessToken);

      if (!data) return;

      const { nickname, clubName: favoriteClub } = data;
      setUserAuth({ nickname, role, favoriteClub });

      return;
    }

    const refreshToken = await getToken("refresh");

    if (!accessToken && refreshToken) {
      const newAccessToken = await reissueToken();
      localStorage.setItem("access", newAccessToken);

      const { data } = await getUserProfile();
      const { role } = decodeToken(newAccessToken);

      if (!data) return;

      const { nickname, clubName: favoriteClub } = data;

      setUserAuth({ nickname, role, favoriteClub });
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setSelectedMenu(pathname);
  }, [pathname]);

  useEffect(() => {
    if (isOpenMobileOpenMobileMenu) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpenMobileOpenMobileMenu]);

  return (
    <header
      className={`sticky top-0 z-[999] mx-auto flex h-20 w-full items-center ${isOnlyUseLogo ? "justify-start lg:px-[160px]" : "justify-between lg:justify-around lg:px-0"} border-b border-white-005 bg-white-001 px-[16px]`}
    >
      <Link href="/" className="flex items-center">
        <Logo />
      </Link>
      <div
        className={`${isOnlyUseLogo ? "hidden" : "hidden lg:flex"} text-[20px] font-medium leading-[28px]`}
      >
        <div
          className={`${isThisWeekMenu ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009 hover:text-gray-010"} relative flex items-center`}
          onMouseEnter={() => {
            return setIsHover(true);
          }}
          onMouseLeave={() => {
            return setIsHover(false);
          }}
        >
          <span className="size-full px-[24px] py-[26px]">주간 투표</span>
          {isHover && <HeaderDropdown setIsHover={setIsHover} />}
        </div>
        <Link
          href="/game-schedule"
          className={`px-[24px] py-[26px] ${selectedMenu.match("game-schedule") ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009 hover:text-gray-010"}`}
        >
          경기 일정
        </Link>
        <Link
          href="/today-news"
          className={`px-[24px] py-[26px] ${selectedMenu === "/today-news" ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009 hover:text-gray-010"}`}
        >
          오늘의 소식
        </Link>
        <div
          className={`px-[24px] py-[26px] ${selectedMenu === "/event" ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009"} cursor-pointer`}
        >
          이벤트
        </div>
      </div>
      <div className="hidden lg:block">
        {isLogin ? (
          <HeaderProfile />
        ) : (
          <Link
            href="/login"
            className={`${isOnlyUseLogo ? "hidden" : "hidden lg:block"} rounded-[8px] border border-black-001 px-[16px] py-[16.5px] text-[16px] font-medium leading-[19.09px] text-black-001 hover:bg-white-003`}
          >
            로그인/회원가입
          </Link>
        )}
      </div>
      <div
        aria-description="mobile-menu"
        className={`${isOnlyUseLogo ? "hidden" : "flex items-center justify-center lg:hidden"} size-[35px]`}
        onClick={() => {
          return setIsOpenMobilMenu(true);
        }}
      >
        <Hamburger />
      </div>
      {isOpenMobileOpenMobileMenu && <MobileMenu />}
    </header>
  );
}
