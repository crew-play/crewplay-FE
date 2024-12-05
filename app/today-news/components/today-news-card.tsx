import Image from "next/image";

export default function TodayNewsCard() {
  return (
    <div>
      <Image
        alt="asd"
        src="/"
        width={400}
        height={280}
        className="rounded-[8px]"
      />
      <p className="mt-[10px] line-clamp-2 w-[360px] text-[24px] font-bold leading-[33.6px]">
        슈팅스타 오늘 첫 방송... 큰 산 최강 야구 넘을까? [해시태그] asd asd
        asdasd asdasdasdasdasdasdasdasdasdasd
      </p>
      <span className="text-gray-006 mt-[10px] block text-[14px] font-medium leading-[14px]">
        방금 전
      </span>
    </div>
  );
}
