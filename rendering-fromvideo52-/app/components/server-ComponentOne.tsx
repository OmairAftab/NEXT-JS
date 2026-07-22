import fs from "fs"; //making it server component cause fs is only available in server side
import ClientComponentOne from "./client-ComponenetOne";




export default function ServerComponentOne() {
    return (
        <>
            <h1>Server Component One</h1>

            <ClientComponentOne/>   
            {/* we can use client components in server components */}
            
        </>
    )
}