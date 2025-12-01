import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of blocked countries (ISO 3166-1 alpha-2 country codes)
const BLOCKED_COUNTRIES = ['PK']; // Pakistan

export function middleware(request: NextRequest) {
  // Get country from Vercel's geolocation headers
  const country = request.geo?.country || '';
  
  // Check if the country is in our blocked list
  if (BLOCKED_COUNTRIES.includes(country)) {
    // Redirect to a blocked page
    return NextResponse.redirect(new URL('/blocked', request.url));
  }
  
  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};