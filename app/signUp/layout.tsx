import { PropsWithChildren } from "react";

export default function SignUpLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="flex h-[calc(100vh-164px)] min-h-[683px] items-center justify-center overflow-auto bg-white-004 px-[16px] lg:px-0">
        {children}
      </main>
    </>
  );
}
