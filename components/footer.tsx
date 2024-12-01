import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto flex h-[5.25rem] items-center justify-between border-t border-default-default bg-default-secondary px-[16px] text-[10px] leading-[17.38px] md:w-[620px] md:text-sm md:leading-[20.27px] lg:w-[920px] xl:w-[1220px] 2xl:w-[1520px]">
      <div className="flex">
        <Link href="/" className="font-normal text-default-secondary">
          서비스 이용약관
        </Link>
        <Link href="/" className="ml-4 font-bold">
          개인정보 처리방침
        </Link>
      </div>
      <p className="font-normal text-default-secondary">ⓒ 2024. CREWPLAY</p>
    </footer>
  );
}
