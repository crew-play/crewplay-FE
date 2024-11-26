import Refresh from "@/public/svg/refresh-input.svg";

export default function NicknameForm() {
  return (
    <div className="mt-[48px]">
      <div className="flex h-[52px] w-full items-center rounded-lg border border-default-default bg-default-default">
        <input
          type="text"
          className="w-full rounded-lg pl-[18px] leading-[16px] text-default-default focus:outline-none"
          placeholder="닉네임을 입력해주세요."
        />
        <button className="mr-2 flex size-[36px] items-center justify-center">
          <Refresh />
        </button>
      </div>
      <button
        type="button"
        className="mt-[24px] flex h-[52px] w-full items-center justify-center rounded-lg bg-[#002A5C] text-[14px] font-semibold leading-[14px] text-neutral-onNeutral"
      >
        다음
      </button>
    </div>
  );
}
