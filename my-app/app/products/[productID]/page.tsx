//making dynamic metadata for product details page
import  { Metadata } from "next";

type Props={
    params: Promise<{ productID: string }>
};

export const generateMetadata= async ({params}: Props): Promise<Metadata>=>{
    const id= (await params).productID;
    return {
        title: `Product ${id} details page`,
        description: `This is the details page for product ${id}`,
    }

}

export default async function productDetails({
    params,
}:{
    params :  Promise <{ productID: string }>   
}) {
    const productID= (await params).productID;
    return <h1>Details about product {productID}</h1>
}