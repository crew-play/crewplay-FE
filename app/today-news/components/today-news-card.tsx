import Image from "next/image";
import Link from "next/link";

interface ITodayNewsCardProps {
  readonly newsDateTime: string;
  readonly headline: string;
  readonly newsLink: string;
  readonly thumbnail: string;
}

export default function TodayNewsCard({
  newsDateTime,
  headline,
  newsLink,
  thumbnail,
}: ITodayNewsCardProps) {
  const normalizeUrl = (url: string) => {
    if (thumbnail.startsWith("//")) {
      return `https:${url}`;
    }

    return url;
  };

  return (
    <Link href={newsLink} target="_blank">
      <div className="relative h-[180px] w-full max-w-[360px] rounded-[8px] lg:h-[280px] lg:max-w-[400px]">
        <Image
          alt="thumbnail"
          src={normalizeUrl(thumbnail)}
          fill
          className="rounded-[8px]"
        />
      </div>
      <p className="mt-[14px] line-clamp-2 max-w-[360px] text-[16px] font-bold leading-[22.4px] lg:mt-[10px] lg:text-[24px] lg:leading-[33.6px]">
        {headline}
      </p>
      <span className="mt-[10px] block text-[12px] font-medium leading-[12px] text-gray-006 lg:text-[14px] lg:leading-[14px]">
        {newsDateTime}
      </span>
    </Link>
  );
}
