import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("auth_token");

  if (!token && req.nextUrl.pathname.startsWith("/add-item")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/add-item"],
};
