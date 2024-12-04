export default function RegisterVote() {
  return (
    <section className="mt-[140px] flex h-[425px] w-screen items-center justify-center bg-black-001">
      <div className="w-[660px]">
        <div className="flex flex-col text-center">
          <span className="mb-[20px] text-[24px] leading-[24px] text-white-001">
            유저들이 선정하고 투표하는 크루플레이
          </span>
          <span className="mb-[32px] text-[38px] font-bold leading-[38px] text-yellow-001">
            지금 바로 새로운 투표를 등록해 보세요!
          </span>
        </div>
        <div>
          <form className="flex justify-between rounded-[120px] bg-white-001 px-[14px] py-[9px]">
            <input
              type="text"
              name="vote-topic"
              id="vote-topic"
              className="grow rounded-[120px] px-[16px] text-[24px] font-medium leading-[24px] placeholder:text-gray-004 focus:outline-none"
              placeholder="로그인 후 이용해주세요."
            />
            <button
              type="submit"
              className="flex items-center justify-center rounded-[40px] bg-black-001 px-[32.5px] py-[17px] leading-[19px] text-yellow-001"
            >
              등록하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
