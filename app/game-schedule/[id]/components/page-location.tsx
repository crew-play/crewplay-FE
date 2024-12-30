import Home from "@/public/svg/home.svg";
import ColumnDivider from "@/public/svg/column-divider.svg";

export default function PageLocation() {
  return (
    <div className="hidden lg:flex lg:items-center">
      <div className="flex size-[18px] items-center justify-center">
        <Home className="size-[14px]" fill="#767676" />
      </div>
      <ColumnDivider className="mx-[12px] h-[14px] w-[2px]" stroke="#DDDDDD" />
      <span className="text-[14px] leading-[14px] text-gray-017">
        경기 일정
      </span>
      <ColumnDivider className="mx-[12px] h-[14px] w-[2px]" stroke="#DDDDDD" />
      <span className="text-[14px] font-bold leading-[14px]">경기 상세</span>
    </div>
  );
}
