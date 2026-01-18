import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/login", request.url));

  response.cookies.set("auth_token", "", {
    path: "/",
    maxAge: 0,
  });

  return response;
}
