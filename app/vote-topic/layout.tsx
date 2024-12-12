import { PropsWithChildren } from "react";

export default function VoteLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
