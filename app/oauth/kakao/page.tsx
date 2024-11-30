"use client";

import { sendCode } from "@/api/social-login";
import { atomSignUpForm } from "@/recoil/signUp/sign-up-step";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export default function OAuthKakaoPage() {
  const [params] = useSearchParams();
  const router = useRouter();
  const setSignUpForm = useSetRecoilState(atomSignUpForm);

  const init = async (code: string) => {
    const { data, status } = await sendCode(code);
    const isSuccess = status === "success";

    let path = "/";

    if (isSuccess && data) {
      path = "/signUp/nickname";
      setSignUpForm((prev) => {
        return {
          ...prev,
          nickname: data.nickname,
          providerId: data.providerId,
        };
      });
      router.push(path);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    const code = params[1];

    if (code) {
      init(code);
    }
  }, [params]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="mb-4 text-xl font-semibold">잠시만 기다려주세요.</p>
      <div className="mx-auto size-20 animate-spin rounded-full border-8 border-black/10 border-t-default-default" />
    </div>
  );
}
