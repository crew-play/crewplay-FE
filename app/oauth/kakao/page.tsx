"use client";

import Spinner from "@/components/spinner";
import { Suspense } from "react";
import HandleOAuth from "./handle-oauth";

export default function OAuthKakaoPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <HandleOAuth />
    </Suspense>
  );
}
