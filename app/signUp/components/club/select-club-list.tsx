import NextStepButton from "@/components/next-step-button";
import { atomSignUpForm } from "@/jotai/sign-up";
import { useAtomValue, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import useClubList from "../../hooks/use-club-list";
import useSignUp from "../../hooks/use-sign-up";
import SelectClubCard from "./select-club-card";
import Spinner from "@/components/spinner";
import NotExist from "@/components/not-exist";
import { useEffect } from "react";
import { atomIsPending } from "@/jotai/pending";

const CLASS_NAME =
  "mt-6 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#002A5C] text-[14px] font-semibold leading-[14px] text-white-002 disabled:bg-gray-001";

export default function SelectClubList() {
  const signUpForm = useAtomValue(atomSignUpForm);
  const setIsPending = useSetAtom(atomIsPending);
  const router = useRouter();

  const { data, isLoading, isError } = useClubList();
  const { mutate, isPending } = useSignUp();

  const isDisabled = signUpForm.clubName === "";

  useEffect(() => {
    if (isPending) {
      setIsPending(true);
    } else {
      setIsPending(false);
    }

    return () => {
      setIsPending(false);
    };
  }, [isPending]);

  if (isLoading) return <Spinner />;

  if (isError) {
    alert("구단리스트 조회 오류");
    router.push("/");
  }

  if (!data || !data.data)
    return <NotExist text="구단 목록이 존재하지 않습니다." />;

  const handleSignUpSubmit = () => {
    mutate({
      providerId: signUpForm.providerId,
      nickname: signUpForm.nickname,
      clubName: signUpForm.clubName,
    });
  };

  return (
    <>
      <div>
        <div className="mt-6 h-[300px] overflow-auto">
          {data.data.map((club) => {
            return (
              <SelectClubCard
                key={club.clubName}
                clubName={club.clubName}
                emblemImg={club.emblemImg}
              />
            );
          })}
        </div>
        <NextStepButton
          className={CLASS_NAME}
          text="크루플레이 가입완료"
          disabled={isDisabled}
          onClick={handleSignUpSubmit}
        />
      </div>
    </>
  );
}
