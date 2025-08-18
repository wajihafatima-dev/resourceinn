import { NextResponse,NextRequest } from "next/server";

export function middleware(NextRequest) {
  const token = NextRequest.cookies.get("token")?.value;

  if (!token && NextRequest.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", NextRequest.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};