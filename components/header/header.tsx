"use client";

import Logo from "@/public/svg/logo.svg";
import Link from "next/link";

import { useEffect, useState } from "react";
import HeaderDropdown from "./header-dropdown";
import { usePathname } from "next/navigation";

interface IHeaderProps {
  readonly isOnlyUseLogo: boolean;
}

export default function Header({ isOnlyUseLogo }: IHeaderProps) {
  const pathname = usePathname();

  const [selectedMenu, setSelectedMenu] = useState<string>(pathname);
  const [isHover, setIsHover] = useState<boolean>(false);

  const isThisWeekMenu =
    selectedMenu === "/" ||
    selectedMenu === "/vote-result" ||
    selectedMenu === "/vote-topic";

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    setSelectedMenu(pathname);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-[999] mx-auto flex h-20 w-full items-center justify-around border-b border-white-005 bg-white-001">
      <div>
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
      </div>
      <div
        className={`${isOnlyUseLogo ? "hidden" : "flex"} text-[20px] font-medium leading-[28px]`}
      >
        <div
          className={`${isThisWeekMenu ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009 hover:text-gray-010"} relative flex items-center`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="size-full px-[24px] py-[26px]">주간 투표</span>
          {isHover && <HeaderDropdown setIsHover={setIsHover} />}
        </div>
        <Link
          href="/"
          className={`px-[24px] py-[26px] ${selectedMenu === "/schedule" ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009 hover:text-gray-010"}`}
        >
          경기 일정
        </Link>
        <Link
          href="/today-news"
          className={`px-[24px] py-[26px] ${selectedMenu === "/today-news" ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009 hover:text-gray-010"}`}
        >
          오늘의 소식
        </Link>
        <Link
          href="/"
          className={`px-[24px] py-[26px] ${selectedMenu === "/event" ? "border-b-[3px] border-b-black-001 font-bold" : "text-gray-009 hover:text-gray-010"}`}
        >
          이벤트
        </Link>
      </div>
      <div>
        <Link
          href="/login"
          className={`${isOnlyUseLogo && "hidden"} rounded-[8px] border border-black-001 px-[16px] py-[16.5px] text-[16px] font-medium leading-[19.09px] text-black-001 hover:bg-white-003`}
        >
          로그인/회원가입
        </Link>
      </div>
    </header>
  );
}
