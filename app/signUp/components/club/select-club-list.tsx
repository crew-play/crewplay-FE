import NextStepButton from "@/components/next-step-button";
import { atomSignUpForm } from "@/jotai/sign-up";
import Doosan from "@/public/svg/team/doosan.svg";
import Hanwha from "@/public/svg/team/hanwha.svg";
import Kia from "@/public/svg/team/kia.svg";
import Kiwoom from "@/public/svg/team/kiwoom.svg";
import Kt from "@/public/svg/team/kt.svg";
import Lg from "@/public/svg/team/lg.svg";
import Lotte from "@/public/svg/team/lotte.svg";
import Nc from "@/public/svg/team/nc.svg";
import Samsung from "@/public/svg/team/samsung.svg";
import Ssg from "@/public/svg/team/ssg.svg";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import useClubList from "../../hooks/use-club-list";
import useSignUp from "../../hooks/use-sign-up";
import SelectClubCard from "./select-club-card";

export const TEAM_IMAGES: Record<number, ReactNode> = {
  1: <Kia />,
  2: <Samsung />,
  3: <Lg />,
  4: <Doosan />,
  5: <Kt />,
  6: <Ssg />,
  7: <Lotte />,
  8: <Hanwha />,
  9: <Nc />,
  10: <Kiwoom />,
};

const CLASS_NAME =
  "mt-6 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#002A5C] text-[14px] font-semibold leading-[14px] text-neutral-onNeutral disabled:bg-default-tertiaryHover";

export default function SelectClubList() {
  const signUpForm = useAtomValue(atomSignUpForm);
  const router = useRouter();
  const { data, isLoading, isError } = useClubList();
  const { mutate } = useSignUp();

  const isDisabled = signUpForm.clubName === "";

  if (isLoading) return <div>로딩중...</div>;

  if (isError) {
    alert("구단리스트 조회 오류");
    router.push("/");
  }

  if (!data || !data.data) return <div>데이터 오류</div>;
  const clubList = data.data.map((club, index) => {
    const clubId = index + 1;
    const clubImage = TEAM_IMAGES[clubId];

    return {
      ...club,
      clubImage,
    };
  });

  const handleSignUpSubmit = () => {
    mutate({
      providerId: signUpForm.providerId,
      nickname: signUpForm.nickname,
      clubName: signUpForm.clubName,
    });
  };

  return (
    <div>
      <div className="mt-6 h-[300px] overflow-auto">
        {clubList.map((club) => {
          return (
            <SelectClubCard
              key={club.clubId}
              clubName={club.clubName}
              clubImage={club.clubImage}
              clubId={club.clubId}
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
  );
}
