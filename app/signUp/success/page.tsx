"use client";

import { atomSignUpForm, ISignUpForm } from "@/jotai/sign-up";
import MovePage from "@/public/svg/right-arrow.svg";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useClubList from "../hooks/use-club-list";
import Image from "next/image";
import Link from "next/link";

export default function SignUpSuccessPage() {
  const router = useRouter();
  const signUpForm = useAtomValue(atomSignUpForm);

  const { data, isLoading, isError } = useClubList();

  useEffect(() => {
    const isNotValid = Object.keys(signUpForm).filter((key) => {
      return signUpForm[key as keyof ISignUpForm] === "";
    });

    if (isNotValid.length > 0) {
      router.push("/");
    }
  }, []);

  if (isLoading) return <div>로딩중..</div>;

  if (!data || !data.data) return <div>데이터 없음</div>;

  if (isError) return <div>Error 발생</div>;

  const club = data.data.find((club) => {
    return club.clubName === signUpForm.clubName;
  });
  const imageUrl = club ? club.emblemImg : "";

  return (
    <div className="w-full lg:w-[341px]">
      <div className="text-center">
        <p className="text-[28px] font-bold leading-[39.2px] text-black-003 lg:text-[32px] lg:leading-[44.8px]">
          회원가입이
          <br />
          완료되었습니다!
        </p>
        <p className="mt-4 text-[20px] font-normal leading-[24px] text-black-003">
          나의 첫번째 야구 커뮤니티, 크루플레이
        </p>
      </div>
      <Link
        href="/login"
        className="mt-[32px] flex h-[76px] cursor-pointer items-center justify-between rounded-[8px] border border-white-005 bg-white-001 px-[16px]"
      >
        <div className="flex">
          <Image
            src={imageUrl}
            alt="team emblem"
            width={60}
            height={38.51}
            className="max-h-[38.51px] object-contain"
          />
          <div className="ml-[10px] text-left">
            <p className="text-[16px] font-semibold leading-[22.4px] text-black-002">
              {signUpForm.clubName}
            </p>
            <p className="mt-[2px] text-[14px] font-normal leading-[19.6px]">
              지금 바로 응원해보세요
            </p>
          </div>
        </div>
        <div className="flex size-[36px] items-center justify-center">
          <MovePage />
        </div>
      </Link>
    </div>
  );
}
