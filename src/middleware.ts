import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { url } = request;
  if (!url.includes('localhost') && !url.includes('hellolin.top')) {
    return NextResponse.redirect('https://hellolin.top', 308);
  }
  return NextResponse.next();
}

export const config = { matcher: '/:path*' };
