import { atomSelectedClub } from "@/jotai/my-page";
import { useAtom } from "jotai";
import Image from "next/image";

interface IClubCardProps {
  readonly isLast: boolean;
  readonly emblemImg: string;
  readonly clubName: string;
}

export default function ClubCard({
  isLast,
  emblemImg,
  clubName,
}: IClubCardProps) {
  const [selectedClub, setSelectedClub] = useAtom(atomSelectedClub);

  const handleClickClub = (club: string) => {
    if (selectedClub === club) {
      setSelectedClub("");
    } else {
      setSelectedClub(club);
    }
  };

  return (
    <div
      className={`${!isLast && "mb-[12px]"} flex h-[70.51px] cursor-pointer items-center rounded-[8px] border bg-white px-4 ${selectedClub === clubName ? "border-yellow-003" : "border-white-005"}`}
      onClick={() => {
        return handleClickClub(clubName);
      }}
    >
      <Image
        src={emblemImg}
        alt="team emblem"
        width={60}
        height={38.51}
        className="max-h-[38.51px] object-contain"
      />
      <p className="ml-[10px] text-[16px] font-semibold leading-[22.4px] text-black-002">
        {clubName}
      </p>
    </div>
  );
}
