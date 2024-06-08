import { NextResponse } from "next/server";
import type { NextRequest } from "next/server.js";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URI());
}
