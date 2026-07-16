"use client"

import {useRouter} from "next/navigation";





export default function order(){
    
    const router=useRouter();

    const handleClick=()=>{
    console.log("Order Placed");
    router.push("/");
}

    return(
        <>
            <button 
                onClick={handleClick}
                className="m-5 p-5 bg-amber-200 text-2xl">Place order
            </button>
        </>
    )
}