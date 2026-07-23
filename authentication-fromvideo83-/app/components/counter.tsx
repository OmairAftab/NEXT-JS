"use client";

import { useState } from "react";
import{useAuth, useUser} from "@clerk/nextjs";


export const Counter = () => {

    const [count, setCount] = useState(0);

    const {isSignedIn, isLoaded, userId, sessionId} = useAuth();

    const {user} = useUser();

    console.log({isSignedIn, isLoaded, userId, sessionId});
    console.log({user});


    if(!isLoaded || !isSignedIn || !userId || !sessionId || !user){
        return null;
    }


    return(
    <>
    
        <p>Count: {count}</p>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </>)

}




// useAuth() -> gives you SESSION/AUTH STATUS info (is user signed in? what's their ID?)
  // Does NOT give full profile details (no name, no email, no image)
  // Fast, lightweight - just reads the session token, no extra network call
//   const { isLoaded, userId, isSignedIn } = useAuth();
  // isLoaded    -> true once Clerk has finished checking auth (avoids flash of wrong content)
  // userId      -> the signed-in user's ID, or null if signed out
  // isSignedIn  -> simple true/false shortcut, same info as checking userId


  
  // useUser() -> gives you the FULL USER PROFILE object (name, email, image, etc.)
  // Slightly heavier - fetches actual user data, not just session status
//   const { isLoaded: userLoaded, user } = useUser();
  // user -> full user object (user.firstName, user.emailAddresses, user.imageUrl, etc.)
  //         or null if signed out

