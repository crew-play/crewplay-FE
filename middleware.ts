import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: ["/my-page", "/signUp/:path*"],
};
