import Image from "next/image";

export default function TodayNewsCard() {
  return (
    <div>
      <Image
        alt="asd"
        src="/"
        width={360}
        height={280}
        className="h-[280px] w-full max-w-[400px] rounded-[8px]"
      />
      <p className="mt-[14px] line-clamp-2 max-w-[360px] text-[16px] font-bold leading-[22.4px] lg:mt-[10px] lg:text-[24px] lg:leading-[33.6px]">
        슈팅스타 오늘 첫 방송... 큰 산 최강 야구 넘을까? [해시태그] asd asd
        asdasd asdasdasdasdasdasdasdasdasdasd
      </p>
      <span className="text-gray-006 mt-[10px] block text-[12px] font-medium leading-[12px] lg:text-[14px] lg:leading-[14px]">
        방금 전
      </span>
    </div>
  );
}
