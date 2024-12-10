"use client";

import MainButton from "./main-button";

export default function RegisterVote() {
  const handleClickRegisterButton = () => {
    // eslint-disable-next-line no-console
    console.log("!!");
  };

  return (
    <section className="flex h-[368px] w-screen items-center justify-center bg-black-001 lg:h-[425px]">
      <div className="w-full px-[16px] lg:w-[660px] lg:px-0">
        <div className="flex flex-col text-center">
          <span className="mb-[10px] text-[14px] leading-[14px] text-white-001 lg:mb-[20px] lg:text-[24px] lg:leading-[24px]">
            유저들이 선정하고 투표하는 크루플레이
          </span>
          <span className="mb-[20px] text-[24px] font-bold leading-[33.6px] text-yellow-001 lg:mb-[32px] lg:text-[38px] lg:leading-[38px]">
            지금 바로 새로운 투표를 등록해 보세요!
          </span>
        </div>
        <div>
          <form className="flex flex-col rounded-[8px] px-[14px] py-[9px] lg:flex-row lg:justify-between lg:rounded-[120px] lg:bg-white-001">
            <input
              type="text"
              name="vote-topic"
              id="vote-topic"
              className="mb-[12px] h-[52px] grow rounded-[8px] bg-white-001 px-[16px] text-center text-[16px] font-medium leading-[16px] placeholder:text-gray-004 focus:outline-none lg:mb-0 lg:h-auto lg:rounded-[120px] lg:text-start lg:text-[24px] lg:leading-[24px]"
              placeholder="로그인 후 이용해주세요."
            />
            <MainButton text="등록하기" onClick={handleClickRegisterButton} />
          </form>
        </div>
      </div>
    </section>
  );
}
