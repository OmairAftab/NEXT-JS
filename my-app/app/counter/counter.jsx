"use client"
import { useState } from "react"


//we can't use metadata in client component, so we have to use it in server component
// export const metadata={
//     title:"Counter Page",
// }

export default function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button className="w-30 h-10 px-5 border rounded-2xl mx-5 bg-green-300" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="w-30 h-10 px-5 border rounded-2xl mx-5 bg-red-300" onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}