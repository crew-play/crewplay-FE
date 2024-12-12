"use client";

import { useEffect } from "react";
import Intro from "./components/intro";
import SocialLoginButton from "./components/social-login-button";
import { useAtom, useAtomValue } from "jotai";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";

export default function Login() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  return (
    <div className="mx-auto flex h-[calc(100vh-164px)] min-h-[400px] w-full max-w-[358px] flex-col justify-center overflow-auto px-4 md:w-[341px]">
      <Intro />
      <SocialLoginButton />
    </div>
  );
}
