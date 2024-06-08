import { NextResponse } from "next/server";
import type { NextRequest } from "next/server.js";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/profile", request.url));
}

export const confif = {
  matcher: [
    '/',
    'profile',
    '/'
  ],
};
