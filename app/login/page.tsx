"use client";

import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import Intro from "./components/intro";
import SocialLoginButton from "./components/social-login-button";
import { atomUserAuth } from "@/jotai/user-auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);
  const userAuth = useAtomValue(atomUserAuth);
  const router = useRouter();

  const isLogin = userAuth.role !== "ANONYMOUS";

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin]);

  return (
    <div className="flex w-full flex-col justify-center overflow-auto lg:w-[341px]">
      <Intro />
      <SocialLoginButton />
    </div>
  );
}
