"use client";

import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { useAtom } from "jotai";
import { useEffect } from "react";
import Intro from "./components/intro";
import SocialLoginButton from "./components/social-login-button";

export default function Login() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  return (
    <div className="flex w-full flex-col justify-center overflow-auto lg:w-[341px]">
      <Intro />
      <SocialLoginButton />
    </div>
  );
}
