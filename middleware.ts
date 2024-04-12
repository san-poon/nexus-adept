import { type NextRequest } from 'next/server';

import { createClient } from '@/data-access/supabase/server';
import {
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicCreationRoutes,
} from '@/lib/routes';


/*
* Middleware must be lightweight for it runs on every request.
* It is the first line of defense for authorization while
* Data Access Layer (DAL) being the ultimate auth guard with
* full correctness.
* 
* Good for centralizing redirect logic, allowing you
* to specify public vs. protected routes.
* Use for stateless checks (optimistic), 
* but not database checks (secure).
    * While it’s ok to read cookies, since Middleware runs on every request (including prefetching), 
    * it should not be used for database checks to avoid making multiple calls on each navigation.
    * While Middleware can be useful for initial validation, it should not be the sole line of defense in protecting your data. 
    * The bulk of security checks should be performed in the Data Access Layer (DAL).
*/
export async function middleware(request: NextRequest) {

  const { nextUrl } = request;
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isPublicCreationRoute = publicCreationRoutes.includes(nextUrl.pathname);
  if (isPublicRoute || isPublicCreationRoute) {
    return;
  }

  const supabase = createClient();
  const data = (await supabase.auth.getUser()).data;
  const isLoggedIn = !!data.user;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)


  // const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // if (isApiAuthRoute) {
  //   return;
  // }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return;
  }

  if (!isLoggedIn) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};