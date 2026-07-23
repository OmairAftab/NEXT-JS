"use client"

import {useFormStatus} from "react-dom"

export const Submit=()=>{

    const {pending}=useFormStatus();

    return (
        <button className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-500"
        disabled={pending}
        >
            {pending ? "Submitting..." : "Submit"}

        </button>
    )
}


//this is a client component as it uses useFormStatus() hook which is a client side hook.
//so hum ne direct form nain use ni kkiya q k wo to server component tha and agar hum us main use krte to error aata.
//and also form submission k liye server component hee use krna chahiye q k its preferred
//and ye bs button pr useFormStatus use krne k liye is ko separate kiya and use kr k wahan import kr liya
