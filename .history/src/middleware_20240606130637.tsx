import { NextResponse } from "next/server";
import type { NextRequest } from "next/server.js";

export function middleware(request: NextRequest) {
    
}

export const confif = {
  matcher: ["/", "profile", "/login", "/signup"],
};
