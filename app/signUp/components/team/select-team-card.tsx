import { ReactNode } from "react";

interface ISelectTeamCardProps {
  readonly team: {
    readonly id: string;
    readonly name: string;
    readonly image: ReactNode;
  };
}

export default function SelectTeamCard({ team }: ISelectTeamCardProps) {
  return (
    <div className="mb-[12px] flex h-[70.51px] cursor-pointer items-center rounded-[8px] border border-default-default bg-white px-4">
      {team.image}
      <p className="ml-[10px] text-[16px] font-semibold leading-[22.4px] text-default-default">
        {team.name}
      </p>
    </div>
  );
}
