"use client";

import Divider from "@/components/divider";
import { atomIsOpenMobileMenu } from "@/jotai/mobile-menu-open";
import { useAtom, useAtomValue } from "jotai";
import { useEffect } from "react";
import LatestVoteResultSection from "./components/latest-vote-result-section";
import ThisWeekVoteSection from "./components/this-week-vote-section";
import { atomUserAuth } from "@/jotai/user-auth";

export default function VoteResultPage() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useAtom(atomIsOpenMobileMenu);
  const userAuth = useAtomValue(atomUserAuth);

  useEffect(() => {
    if (isOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  }, []);

  const isLogin = userAuth.role !== "ANONYMOUS";

  return (
    <>
      {isLogin && <ThisWeekVoteSection />}
      <Divider />
      <LatestVoteResultSection />
    </>
  );
}
