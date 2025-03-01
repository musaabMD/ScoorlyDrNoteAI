// middleware.js (no changes needed if you already implemented it)
import { NextResponse } from 'next/server';
import { updateSession } from "@/libs/supabase/middleware";

export async function middleware(request) {
  // Auth handling first
  const authResponse = await updateSession(request);
  
  // Domain-based routing
  const url = request.nextUrl;
  const hostname = request.headers.get('host');
  
  // Root path handling
  if (url.pathname === '/') {
    if (hostname.includes('drnote.co')) {
      return NextResponse.redirect(new URL('/apps/drnote', request.url));
    } else {
      return NextResponse.redirect(new URL('/apps/scoorly', request.url));
    }
  }
  
  return authResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};