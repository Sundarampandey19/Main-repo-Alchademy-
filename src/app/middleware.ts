  import { NextRequest, NextResponse } from 'next/server';


export function middleware(req) {
    const nextUrl = req.nextUrl;
    const { pathname } = nextUrl;
  
    // Allow access to the landing page without authentication
    if (pathname === '/') {
      return NextResponse.next();
    }
  
    // For all other pages, check for session
    const session = req.nextAuth.session?.user;
    if (!session) {
      // Redirect to login page if no session exists
      return NextResponse.redirect(new URL('/login', req.url));
    }
  
    // Allow access to authenticated pages if session is valid
    return NextResponse.next();  import { NextRequest, NextResponse } from 'next/server';


    export function middleware(req) {
        const nextUrl = req.nextUrl;
        const { pathname } = nextUrl;
      
        // Allow access to the landing page without authentication
        if (pathname === '/') {
          return NextResponse.next();
        }
      
        // For all other pages, check for session
        const session = req.nextAuth.session?.user;
        if (!session) {
          // Redirect to login page if no session exists
          return NextResponse.redirect(new URL('/login', req.url));
        }
      
        // Allow access to authenticated pages if session is valid
        return NextResponse.next();
        
      }
  }