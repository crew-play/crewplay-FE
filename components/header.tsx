import Link from "next/link";
import Logo from "@/public/svg/logo.svg";

interface IHeaderProps {
  readonly isOnlyUseLogo: boolean;
}

export default function Header({ isOnlyUseLogo }: IHeaderProps) {
  return (
    <header className="sticky top-0 z-[999] flex h-20 w-full items-center justify-between border-b border-white-005 bg-white-001 px-[31px] text-[20px] font-medium leading-[24px] text-black-003 md:px-[80px] lg:px-[160px]">
      <div className="flex h-6 items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div
          className={`md:ml-[24px] md:w-[220px] lg:ml-[48px] lg:w-[231px] ${isOnlyUseLogo ? "hidden" : "hidden md:flex md:items-center md:justify-between"}`}
        >
          <Link href="/" className="">
            투표
          </Link>
          <Link href="/" className="">
            경기 일정
          </Link>
          <Link href="/">최근 이슈</Link>
        </div>
      </div>
      <div
        className={`${isOnlyUseLogo ? "hidden" : "hidden md:flex md:items-center"}`}
      >
        <Link href="/login">로그인/회원가입</Link>
      </div>
    </header>
  );
}
