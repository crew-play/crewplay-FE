import { atomSelectedClub } from "@/jotai/my-page";
import { useAtomValue } from "jotai";
import Image from "next/image";

interface IGameScheduleClubItemProps {
  readonly clubName: string;
  readonly emblemImg: string;
  readonly onClick: (_clubName: string) => void;
}

export default function GameScheduleClubItem({
  clubName,
  emblemImg,
  onClick,
}: IGameScheduleClubItemProps) {
  const selectedClub = useAtomValue(atomSelectedClub);

  return (
    <div
      className={`flex h-[72.18px] w-[112px] items-center justify-center text-[16px] leading-[19.09px] ${selectedClub === clubName && "rounded-[8px] bg-white-003"}`}
      onClick={() => {
        return onClick(clubName);
      }}
    >
      <Image src={emblemImg} alt="club-image" width={63} height={40} />
    </div>
  );
}
