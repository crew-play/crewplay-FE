import Kia from "@/public/svg/team/kia.svg";
import Samsung from "@/public/svg/team/samsung.svg";
import Lg from "@/public/svg/team/lg.svg";
import Doosan from "@/public/svg/team/doosan.svg";
import Kt from "@/public/svg/team/kt.svg";
import Kiwoom from "@/public/svg/team/kiwoom.svg";
import Lotte from "@/public/svg/team/lotte.svg";
import Nc from "@/public/svg/team/nc.svg";
import Hanwha from "@/public/svg/team/hanwha.svg";
import Ssg from "@/public/svg/team/ssg.svg";
import { useMemo } from "react";
import SelectTeamCard from "./select-club-card";

export default function SelectTeamList() {
  const TEAM_INFORMATION = useMemo(() => {
    return [
      {
        id: "kia",
        name: "기아 타이거즈",
        image: <Kia />,
      },
      {
        id: "samsung",
        name: "삼성 라이온즈",
        image: <Samsung />,
      },
      {
        id: "lg",
        name: "LG 트윈스",
        image: <Lg />,
      },
      {
        id: "doosan",
        name: "두산 베어스",
        image: <Doosan />,
      },
      {
        id: "kt",
        name: "KT wiz",
        image: <Kt />,
      },
      {
        id: "kiwoom",
        name: "키움 히어로즈",
        image: <Kiwoom />,
      },
      {
        id: "lotte",
        name: "롯데 자이언츠",
        image: <Lotte />,
      },
      {
        id: "nc",
        name: "NC 다이노스",
        image: <Nc />,
      },
      {
        id: "hanwha",
        name: "한화 이글스",
        image: <Hanwha />,
      },
      {
        id: "ssg",
        name: "SSG 랜더스",
        image: <Ssg />,
      },
    ];
  }, []);

  return (
    <div className="mt-[24px] h-[300px] overflow-auto">
      {TEAM_INFORMATION.map((team) => {
        return <SelectTeamCard key={team.id} team={team} />;
      })}
    </div>
  );
}
