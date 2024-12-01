import { atomSignUpForm } from "@/jotai/sign-up";
import { useAtom } from "jotai";
import { ReactNode } from "react";

interface ISelectClubCardProps {
  readonly clubName: string;
  readonly clubImage: ReactNode;
  readonly clubId: number;
}

export default function SelectClubCard({
  clubName,
  clubImage,
  clubId,
}: ISelectClubCardProps) {
  const [signUpForm, setSignUpForm] = useAtom(atomSignUpForm);

  const handleClickClub = () => {
    const selectedClubName = signUpForm.clubName === clubName ? "" : clubName;
    setSignUpForm((prev) => {
      return { ...prev, clubId: clubId, clubName: selectedClubName };
    });
  };

  return (
    <div
      className={`mb-[12px] flex h-[70.51px] cursor-pointer items-center rounded-[8px] border bg-white px-4 ${signUpForm.clubName === clubName ? "border-[#FF6F3C]" : "border-default-default"}`}
      onClick={handleClickClub}
    >
      {clubImage}
      <p className="ml-[10px] text-[16px] font-semibold leading-[22.4px] text-default-default">
        {clubName}
      </p>
    </div>
  );
}
