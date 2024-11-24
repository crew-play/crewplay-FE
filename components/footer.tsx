import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-[5.25rem] w-full items-center justify-between border-t border-default-default bg-default-secondary px-40 text-sm">
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
