import { KAKAO_LOGIN_URL, NAVER_LOGIN_URL } from "@/constants/social-login-url";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex">
      <Link href={NAVER_LOGIN_URL} className="mr-2">
        네이버로 로그인
      </Link>
      <Link href={KAKAO_LOGIN_URL}>카카오로 로그인</Link>
    </div>
  );
}
