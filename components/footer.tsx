import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-screen flex-col justify-between border-t border-t-gray-009 bg-white-001 px-[24px] py-[32px] text-[14px] leading-[19.6px] text-gray-002 lg:flex-row lg:items-center lg:px-[160px]">
      <div className="mb-[8px] flex grow font-bold lg:mb-0">
        <Link href="/">서비스 이용약관</Link>
        <Link href="/" className="ml-[8px] lg:ml-[16px]">
          개인정보 처리방침
        </Link>
      </div>
      <p className="w-auto">ⓒ 2024. CREWPLAY</p>
    </footer>
  );
}
