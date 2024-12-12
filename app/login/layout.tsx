import { PropsWithChildren } from "react";

export default function LoginLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="bg-white-004">{children}</main>
    </>
  );
}
