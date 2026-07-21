//dynamicparams is initially set to true and when 
//dynamicparams is set to true then it will statically render pages on demand for any dynamic route not included in the generateStaticParams function and it will be rendered on demand at runtime 

//when dynamicparams is set to false then it will only render pages for the dynamic routes included in the generateStaticParams function and any other dynamic route not included in the generateStaticParams function will show 404 page

export const dynamicParams = false;



//generatestsaticparams function is used to generate static params for dynamic routes in Next.js.
// It allows you to pre-render pages with specific parameters at build time instead of on deamnd at rutime like usual dynamic routes, hence improving performance and SEO.

export async function generateStaticParams() {
    return[{id: "1"}, {id: "2"}, {id: "3"}]
}



export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {

const {id} = await params;

return(
    <>
        Showing product {id} page and time is {new Date().toLocaleTimeString()}
    </>
)
}


//when we hadn't used generatestaticparams function then jb hum reload krte the to dus time ka time aata tha because it was server component and every time it was re-rendering 
// but now jb humne generatestaticparams function use kiya to ye static ho gya and jb hum reload krte to same time aata hai jo 1st time render hone pe tha