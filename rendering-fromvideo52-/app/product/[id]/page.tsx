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