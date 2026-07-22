import ClientComponentOne from "../components/client-ComponenetOne";
import ClientComponentTwo from "../components/client-ComponenetTwo";
import ServerComponentOne from "../components/server-ComponentOne";


export default function InterleavingPage() {

    return(
        <>
            <ClientComponentOne/>
            <ClientComponentTwo>
                <ServerComponentOne/>
            </ClientComponentTwo>
            <ServerComponentOne/>
        </>
    )
}


//WE CAN USE SERVER COMPONENTS INSIDE SERVER COMPONENTS
//WE CAN USE CLIENT COMPONENTS INSIDE CLIENT COMPOENENTS
//WE CAN USE CLIENT COMPONENTS INSIDE SERVER COMPONENTS

//BUT WE CAN NOT USE SERVER COMPONENTS INSIDE CLIENT COMPONENTS 
//THAT WE LEARNED IN  Next.js 15 Tutorial - 65 - Interleaving Server and Client Components


