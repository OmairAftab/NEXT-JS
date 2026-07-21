"use client";

import {useState} from "react";

export default function AboutPage() {

    console.log("this is a client compnent and when we will open console in browser then server keyword will not be mentioned before this because it is not a server component and is now a client coponent")

    const [name,setName]=useState("");

    

    return (
        <div>
            <h1>NAME Page</h1> 
            <br /> <br />

            <input value={name} onChange={(e)=>setName(e.target.value)}/>

            <h3>Your name is {name}</h3>
        </div>
    )
}