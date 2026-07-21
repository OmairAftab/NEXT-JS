import { Reviews } from "../components/reviews";
import { Relatedproduct } from "../components/relatedproduct";
import { Suspense } from "react";

export default function ProductPage() {

return (

    <>
    <h1>This is the productDetailPage</h1>

    <Suspense fallback={<h1>Loading reviews...</h1>}>
         <Reviews/> 
    </Suspense>

    <Suspense fallback={<h1>Loading related product...</h1>}>
        <Relatedproduct/>
    </Suspense>
    
    </>
)

}


//without using streaming our content was loading after 4 seconds 
//as we have made the related product component to wait for 4 seconds before it renders the content and is more than 2sec wait of reviews
//so page wait for everything and then shows without suspence



//BUT WHEN WE USE SESPENCE AND WRAPS THE COMPONENTS THAT HAS TO WAIT IN SUSPENCE
//THEN OTHER CONTENT IS LOADING WHICH DON INVOLVE SUSPENCE
//AND THE CONTENT INVOLVING SUSPENCE COMES AS SOON AS ITS DATA IS RECEIVED
//UNTIL THEN THE FALLBACK CONTENT IS SHOWN