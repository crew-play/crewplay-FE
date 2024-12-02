import { atomSignUpForm } from "@/jotai/sign-up";
import { useAtom } from "jotai";
import Image from "next/image";

interface ISelectClubCardProps {
  readonly clubName: string;
  readonly emblemImg: string;
}

export default function SelectClubCard({
  clubName,
  emblemImg,
}: ISelectClubCardProps) {
  const [signUpForm, setSignUpForm] = useAtom(atomSignUpForm);

  const handleClickClub = () => {
    const selectedClubName = signUpForm.clubName === clubName ? "" : clubName;
    setSignUpForm((prev) => {
      return { ...prev, clubName: selectedClubName };
    });
  };

  return (
    <div
      className={`mb-[12px] flex h-[70.51px] cursor-pointer items-center rounded-[8px] border bg-white px-4 ${signUpForm.clubName === clubName ? "border-[#FF6F3C]" : "border-default-default"}`}
      onClick={handleClickClub}
    >
      <Image
        src={emblemImg}
        alt="team emblem"
        width={60}
        height={38.51}
        className="max-h-[38.51px] object-contain"
      />
      <p className="ml-[10px] text-[16px] font-semibold leading-[22.4px] text-default-default">
        {clubName}
      </p>
    </div>
  );
}
