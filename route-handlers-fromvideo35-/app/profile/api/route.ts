import {type NextRequest } from "next/server";
import {headers} from "next/headers";

//THERE ARE TWO WAYS OF READING HEADERS IN NEXT.JS  APP ROUTE HANDLERS.

export async function GET(request: NextRequest){


    // FIRST METHOD OF READING HEADERS IN NEXT.JS APP ROUTE HANDLERS IS BY USING THE REQUEST OBJECT PASSED AS AN ARGUMENT TO THE FUNCTION:

    const requestheaders=new Headers(request.headers);
    console.log("Authorization header in Request Headers:", requestheaders.get("Authorization")); //this will print the Authorization header in the request headers in the console.



    // 2ND METHOD OF READING HEADERS IN NEXT.JS APP ROUTE HANDLERS IS BY USING THE HEADERS() FUNCTION PROVIDED BY NEXT.JS:

    const Allheaders=await headers();
    console.log("Authorization header in All Headers:", Allheaders.get("Authorization")); //this will print the Authorization header in the all headers in the console.



    return new Response("<h1>PROFILE Function by route.ts</h1>",{
        headers:{
            "Content-Type":"text/html"     //ab proper h1 main bra ho k wo response show hoga jo dikhaya hai q content type yahan se text/html set kr diya h. otherwise wo text/plain show hoga.    
        }
    });
}



