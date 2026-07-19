
import { Card } from "../../components/card";
import Link from "next/link";

export default function Notifications() {
    return (
    <>

    <Card>Notifications

        <br />
        <Link href="/complex-dashboard/archieved" className="underline text-blue-400">Archieved</Link>

    </Card>


{/* WHEN WE HAD CLICKED THE ARCHIEVED BUTTON AND MOVE TO THE /complex-dashboard/archieved
  page then other componnets will be loaded as they are just notifications one is changed
    but if we click reload at that page /complex-dashboard/archieved then the other compoonents will not
    be loaded and it will be an error displaying page

    FIX: add default.tsx in those folders where we have to show the default page when we click reload at that page
*/}
   

    
    </>
    
)
}