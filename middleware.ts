import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { NEXTAUTH_SECRET } from "./utils/importer";

export const config = {
  matcher: ["/planningSelection", "/profile/:path*", "/planningDetail/:path*"], // Adjust the matcher to the routes you want to protect
};

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: NEXTAUTH_SECRET });
  if (!token) {
    // Redirect to main page if not authenticated
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  // Continue to the protected route if authenticated
  return NextResponse.next();
}
