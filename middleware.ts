import { NextResponse } from "next/server";

export function middleware(request: Request) {
  // Only enforce in production
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const user = process.env.STUDIO_BASIC_AUTH_USER;
  const pass = process.env.STUDIO_BASIC_AUTH_PASS;

  // If creds not configured, skip protection
  if (!user || !pass) return NextResponse.next();

  const header = request.headers.get("authorization") || "";

  // Expect header: "Basic base64(username:password)"
  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return unauthorized();

  try {
    // Use web-standard base64 decoder available in Edge runtime
    const decoded = globalThis.atob(encoded);
    const separatorIndex = decoded.indexOf(":");
    const username = decoded.slice(0, separatorIndex);
    const password = decoded.slice(separatorIndex + 1);
    if (username === user && password === pass) {
      return NextResponse.next();
    }
  } catch (_) {
    // fall through to unauthorized
  }

  return unauthorized();
}

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Studio"' },
  });
}

export const config = {
  matcher: [
    "/studio",
    "/studio/:path*",
    "/static/:path*", // Studio assets
  ],
};


