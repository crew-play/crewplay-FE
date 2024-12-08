export default function TodayNewsDescription() {
  return (
    <div className="mt-[60px] flex w-full flex-col items-center px-[40px] lg:mt-[80px] lg:h-[80px] lg:flex-row lg:rounded-[12px] lg:border lg:border-black-001">
      <h1 className="text-[30px] font-bold leading-[42px] lg:text-[24px] lg:leading-[24px]">
        오늘의 소식
      </h1>
      <p className="mt-[12px] w-[280px] text-center text-[16px] leading-[22.4px] lg:ml-[30px] lg:mt-0 lg:w-auto lg:text-start lg:text-[18px] lg:font-medium lg:leading-[18px]">
        크루플레이가 제공하는 오늘의 최신
        <br className="lg:hidden" />
        야구 관련 소식을 전달해 드리는 공간입니다.
      </p>
    </div>
  );
}
