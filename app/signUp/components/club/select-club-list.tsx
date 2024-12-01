import NextStepButton from "@/components/next-step-button";
import { atomSignUpForm } from "@/jotai/sign-up";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";
import useClubList from "../../hooks/use-club-list";
import useSignUp from "../../hooks/use-sign-up";
import SelectClubCard from "./select-club-card";

const CLASS_NAME =
  "mt-6 flex h-[52px] w-full items-center justify-center rounded-lg bg-[#002A5C] text-[14px] font-semibold leading-[14px] text-neutral-onNeutral disabled:bg-default-tertiaryHover";

export default function SelectClubList() {
  const signUpForm = useAtomValue(atomSignUpForm);
  const router = useRouter();
  const { data, isLoading, isError } = useClubList();
  const { mutate } = useSignUp();

  const isDisabled = signUpForm.clubName === "";

  if (isLoading) return <div>로딩중</div>;

  if (isError) {
    alert("구단리스트 조회 오류");
    router.push("/");
  }

  if (!data || !data.data) return <div>데이터 오류</div>;

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
  );
}
