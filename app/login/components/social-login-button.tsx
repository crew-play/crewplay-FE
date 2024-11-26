import { KAKAO_LOGIN_URL, NAVER_LOGIN_URL } from "@/constants/social-login-url";
import Link from "next/link";
import Kakao from "@/public/svg/kakao.svg";
import Naver from "@/public/svg/naver.svg";

export default function SocialLoginButton() {
  return (
    <div className="flex w-full flex-col">
      <Link
        href={KAKAO_LOGIN_URL}
        className="text-brand-default flex h-[52px] w-full items-center justify-center rounded-md bg-[#FBE44D] text-sm font-bold leading-[14px]"
      >
        <Kakao />
        <span className="ml-2">카카오로 로그인</span>
      </Link>
      <Link
        href={NAVER_LOGIN_URL}
        className="text-brand-onBrand mt-4 flex h-[52px] w-full items-center justify-center rounded-md bg-[#5AC367] text-sm font-bold leading-[14px]"
      >
        <Naver />
        <span className="ml-2">네이버로 로그인</span>
      </Link>
    </div>
  );
}
