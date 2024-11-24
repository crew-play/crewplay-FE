import Link from "next/link";
import Logo from "@/public/svg/logo.svg";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-20 w-full items-center border-b border-default-default bg-default-default">
      <Link href="/" className="ml-40 h-6">
        <Logo />
      </Link>
    </header>
  );
}
