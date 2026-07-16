import Link from "next/link";

// // And to actually test delay as mentioned  in loading.tsx it, put the delay in page.tsx:

export default async function blog(){
    
    await new Promise((resolve) => setTimeout(resolve, 3000)); // testing the loading.tsx file by adding a delay of 4 seconds before rendering the blog page

    return <h1>Blog page</h1>
}