
"use client"; 
//If i make this navBar component as a client component then its children components that are used inside it
//  (Navlinks and Navsearch) will also become client components  
//which we can verify by seeing the console.log in browser console that after making navBar client component
//the "server" isn't appearing before the console.logged text

//so itsetter to make client coponents at lowest level e.g., we need to manage state at navsearch only so try to make navsearch a 
// client component isntead of making navBar a client component because making navBar a client component will make all its children components client components and hence it will increase the bundle size and hence it will affect the performance of the app


import { NavSearch } from "./navSearch"
import { Navlinks } from "./navlinks"

export const NavBar=()=>{


    return(
        <nav>
            <Navlinks/>
            <br />
            <NavSearch/>
        </nav>
    )
}