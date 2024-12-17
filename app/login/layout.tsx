import { PropsWithChildren } from "react";

export default function LoginLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="flex h-[calc(100vh-164px)] min-h-[400px] w-full items-center justify-center bg-white-004 px-[16px] lg:px-0">
        {children}
      </main>
    </>
  );
}
