import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET;
  console.log('NEXTAUTH_SECRET:', secret); // Log the secret to verify

  if (!secret) {
    console.error('NEXTAUTH_SECRET is not set');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const session = await getToken({ req, secret });

  if (!session && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'], // Adjust the matcher to your main page route
};