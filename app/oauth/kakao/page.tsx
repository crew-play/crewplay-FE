"use client";

import { sendCode } from "@/api/social-login";
import { atomSignUpForm } from "@/jotai/sign-up";
import { atomUserAuth } from "@/jotai/user-auth";
import { decodeToken } from "@/utils/decodeToken";
import { getToken } from "@/utils/token";
import { useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OAuthKakaoPage() {
  const router = useRouter();
  const setSignUpForm = useSetAtom(atomSignUpForm);
  const setUserInformation = useSetAtom(atomUserAuth);

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const init = async (code: string) => {
    const { data, status } = await sendCode(code);
    const isSuccess = status === "success";

    let path = "/";

    if (isSuccess && data) {
      path = "/signUp";
      setSignUpForm((prev) => {
        return {
          ...prev,
          nickname: data.nickname,
          providerId: data.providerId,
        };
      });
      router.push(path);
    } else {
      const accessToken = await getToken("access");

      if (accessToken) {
        const { nickname, role } = decodeToken(accessToken.value);
        setUserInformation({ nickname, role });
      }

      router.push(path);
    }
  };

  useEffect(() => {
    if (code) {
      init(code);
    }
  }, [code]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="mb-4 text-xl font-semibold">잠시만 기다려주세요.</p>
      <div className="mx-auto size-20 animate-spin rounded-full border-8 border-black/10 border-t-white-001" />
    </div>
  );
}
