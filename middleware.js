// import { updateSession } from "@/libs/supabase/middleware";

// export async function middleware(request) {
//   return await updateSession(request);
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * Feel free to modify this pattern to include more paths.
//      */
//     "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
//   ],
// };
import { updateSession } from "@/libs/supabase/middleware";
import { NextResponse } from 'next/server';

export async function middleware(request) {
  // First, update Supabase session
  const response = await updateSession(request);
  
  // If the user is trying to access the root, redirect based on hostname
  const url = request.nextUrl;
  if (url.pathname === '/') {
    const hostname = request.headers.get('host');
    
    if (hostname.includes('drnote.co')) {
      // Rewrite to drnote
      return NextResponse.rewrite(new URL('/apps/drnote', request.url));
    } else {
      // Default to scoorly
      return NextResponse.rewrite(new URL('/apps/scoorly', request.url));
    }
  }
  
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};