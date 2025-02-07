import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
  console.log(req.cookies);
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/user/:path*", "/admin/:path*"],
};
