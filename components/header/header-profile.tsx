import { atomUserAuth } from "@/jotai/user-auth";
import Profile from "@/public/svg/profile.svg";
import { useAtomValue } from "jotai";
import BottomArrow from "@/public/svg/bottom-arrow.svg";

export default function HeaderProfile() {
  const userAuth = useAtomValue(atomUserAuth);

  return (
    <div className="flex cursor-pointer items-center">
      <div className="flex size-[36px] items-center justify-center rounded-full bg-gray-009">
        <Profile />
      </div>
      <span className="ml-[10px] text-[16px] font-medium leading-[22.4px]">
        {userAuth.nickname}
      </span>
    </div>
  );
}
