import {type NextRequest } from "next/server";
import {headers, cookies} from "next/headers";


export async function GET(request: NextRequest){

    //THERE ARE TWO WAYS OF READING HEADERS IN NEXT.JS  APP ROUTE HANDLERS.

    // FIRST METHOD OF READING HEADERS IN NEXT.JS APP ROUTE HANDLERS IS BY USING THE REQUEST OBJECT PASSED AS AN ARGUMENT TO THE FUNCTION:

    const requestheaders=new Headers(request.headers);
    console.log("Authorization header in Request Headers:", requestheaders.get("Authorization")); //this will print the Authorization header in the request headers in the console.


    // 2ND METHOD OF READING HEADERS IN NEXT.JS APP ROUTE HANDLERS IS BY USING THE HEADERS() FUNCTION PROVIDED BY NEXT.JS:

    const Allheaders=await headers();
    console.log("Authorization header in All Headers:", Allheaders.get("Authorization")); //this will print the Authorization header in the all headers in the console.






    //THERE ARE TWO WAYS OF SETTING COOKIES IN NEXT.JS APP ROUTE HANDLERS.
    
    //SET HUM NE RESPONSE SE KIYA THA AND GET AESE KR RHE
    const token=request.cookies.get("token");
    console.log("Token from request cookies:", token); //this will print the token from the request cookies in the console.



    //2ND AND RECOMMENDED METHOD IS TO USE THE COOKIES() FUNCTION PROVIDED BY NEXT.JS:
    const allcookies=await cookies();
    allcookies.set("sellerToken","567");
    console.log("Token from all cookies:", allcookies.get("sellerToken")?.value); //this will print the sellerToken from the all cookies in the console.


    return new Response("<h1>PROFILE Function by route.ts</h1>",{
        headers:{
            "Content-Type":"text/html" ,    //ab proper h1 main bra ho k wo response show hoga jo dikhaya hai q content type yahan se text/html set kr diya h. otherwise wo text/plain show hoga.    
            "Set-Cookie":"token=12345" ,
    },
});
}



