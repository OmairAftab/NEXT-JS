import {getProducts} from "../prisma-db";


type Product={
  id :  number,
  title : string,
  price : number,
  description : string | null
}





export default async function ProductsPage() {

    const products:Product[]= await getProducts(); 


    return(
        <div>
            
            {products.map((product) => (
                <div className="border border-black p-4 m-4" key={product.id}>
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
                </div>
            ))}
        </div>
    )
}