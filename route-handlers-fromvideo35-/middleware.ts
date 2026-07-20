import type { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
import  { NextResponse } from "next/server";


export function middleware(request: NextRequest) {

    const response=NextResponse.next();
    const theemePreference=request.cookies.get("theme");

    if(!theemePreference){
        response.cookies.set("theme","dark");
    }

    response.headers.set("X-Custom-Header","My Custom Header Value");

    return response;


    //IF USER GO TO PROFILE PAGE THEN REDIRECT HIM TO HELLO PAGE. THIS IS HOW WE CAN REDIRECT USER FROM MIDDLEWARE IN NEXT.JS APP ROUTE HANDLERS.

    // if(request.nextUrl.pathname==="/profile"){

    //     return NextResponse.redirect(new URL("/hello",request.nextUrl));
    // }
}