import { notFound, redirect } from "next/navigation";

export default async function reviews({
    params,
} :{
    params: Promise <{ productID: string; reviewID:string}>
}) {
    const productID= (await params).productID;
    const reviewID= (await params).reviewID;

    if(parseInt(reviewID)>1000){
        // notFound();  //this will show the custom notfound page we created in this directory (app/products/[productID]/reviews/[reviewID]/not-found.tsx) instead of the default notfound page (app/not-found.tsx)

        redirect("/"); //if reviewID is greater than 1000, we will redirect to home page instead of showing notfound page
    }

    return <h1> Review {reviewID} for product {productID}</h1>

}



// Folder structure:
// app/
// └── product/
//     └── [productID]/
//         ├── page.tsx              → /product/5
//         └── reviews/
//             └── [reviewID]/
//                 └── page.tsx      → /product/5/reviews/12