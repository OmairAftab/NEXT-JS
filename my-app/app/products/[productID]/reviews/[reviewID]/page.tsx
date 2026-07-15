export default async function reviews({
    params,
} :{
    params: Promise <{ productID: string; reviewID:string}>
}) {
    const productID= (await params).productID;
    const reviewID= (await params).reviewID;

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