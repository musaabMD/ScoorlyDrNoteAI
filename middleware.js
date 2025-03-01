// middleware.js
import { NextResponse } from 'next/server';
import { updateSession } from "@/libs/supabase/middleware";

export async function middleware(request) {
  // First, handle auth
  const authResponse = await updateSession(request);
  
  const url = request.nextUrl;
  const hostname = request.headers.get('host');
  const path = url.pathname;
  
  // If accessing the root path
  if (path === '/') {
    if (hostname.includes('drnote.co')) {
      // Rewrite to drnote content but keep the URL as root
      return NextResponse.rewrite(new URL('/apps/drnote', request.url));
    } else {
      // Default to scoorly but keep the URL as root
      return NextResponse.rewrite(new URL('/apps/scoorly', request.url));
    }
  }
  
  // For path-based access, handle sub-pages
  if (path.startsWith('/apps/')) {
    // This allows direct access to /apps/... paths for development
    return authResponse;
  }
  
  // For all other paths, rewrite based on domain
  if (hostname.includes('drnote.co')) {
    // Keep the path but serve from drnote content
    return NextResponse.rewrite(new URL(`/apps/drnote${path}`, request.url));
  } else {
    // Keep the path but serve from scoorly content
    return NextResponse.rewrite(new URL(`/apps/scoorly${path}`, request.url));
  }
  
  return authResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};