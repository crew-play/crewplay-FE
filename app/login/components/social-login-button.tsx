import { KAKAO_LOGIN_URL } from "@/constants/social-login-url";
import Kakao from "@/public/svg/kakao.svg";
import Link from "next/link";

export default function SocialLoginButton() {
  return (
    <div className="flex w-full flex-col">
      <Link
        href={KAKAO_LOGIN_URL}
        className="flex h-[52px] w-full items-center justify-center rounded-md bg-[#FBE44D] text-[14px] font-bold leading-[14px] text-black-003"
      >
        <Kakao />
        <span className="ml-2">카카오로 로그인</span>
      </Link>
    </div>
  );
}
