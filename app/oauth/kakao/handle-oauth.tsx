"use client";

import { sendCode } from "@/api/social-login";
import { getUserProfile } from "@/api/user-profile";
import { atomSelectedClub } from "@/jotai/my-page";
import { atomSignUpForm } from "@/jotai/sign-up";
import { atomUserAuth } from "@/jotai/user-auth";
import { decodeToken } from "@/utils/decodeToken";
import { useSetAtom } from "jotai";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HandleOAuth() {
  const router = useRouter();
  const params = useSearchParams();
  const setSignUpForm = useSetAtom(atomSignUpForm);
  const setUserInformation = useSetAtom(atomUserAuth);
  const setSelectedClub = useSetAtom(atomSelectedClub);

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
      const accessToken = localStorage.getItem("access");

      const { data } = await getUserProfile();

      if (accessToken) {
        const { nickname, role } = decodeToken(accessToken);
        setUserInformation({
          nickname,
          role,
          favoriteClub: data?.clubName || "",
        });
        setSelectedClub(data?.clubName || "");
      }

      router.push(path);
    }
  };

  useEffect(() => {
    if (!code) return;
    init(code);
  }, [code]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="mb-4 text-xl font-semibold">잠시만 기다려주세요.</p>
      <div className="mx-auto size-20 animate-spin rounded-full border-8 border-black/10 border-t-white-001" />
    </div>
  );
}
