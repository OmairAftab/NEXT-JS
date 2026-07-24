import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(["/user-profile"])        //user-profile route is protected route, user must be signed in to access this route

const isAdminRoute=createRouteMatcher(["/admin"])        

export default clerkMiddleware(async (auth,req)=>{
    if(isProtectedRoute(req))  {        //if request is for protected route, then check if user is signed in or not
       await auth.protect();          //if user is not signed in protect method will redirect user to sign in page 
    }


    const claims = (await auth()).sessionClaims;
    console.log("Session claims:", claims); // check your TERMINAL, not browser



      if ( isAdminRoute(req) && (await auth()).sessionClaims?.metadata?.role !== "admin") {
          const url = new URL("/", req.url);
          return NextResponse.redirect(url);
      }

})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
    '/__clerk/(.*)',
  ],
}