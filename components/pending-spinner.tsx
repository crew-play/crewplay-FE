"use client";

import { useEffect } from "react";
import Spinner from "./spinner";

export default function PendingSpinner() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-[#00000080]">
      <Spinner />
    </div>
  );
}
