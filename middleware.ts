import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();

  if (
    request.nextUrl.pathname.startsWith("/my-page") ||
    request.nextUrl.pathname.startsWith("/signUp") ||
    request.nextUrl.pathname.startsWith("/signUp/success")
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
};
