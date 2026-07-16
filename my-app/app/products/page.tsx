import Link from "next/link";
export default function products(){
    return (
    <>
        <h1>Products List</h1>
        <ul>
           <Link href="/products/1"> <li className="text-blue-400 underline"> Product 1</li></Link>
           <Link href="/products/2">   <li className="text-blue-400 underline">Product 2</li></Link>
           <Link href="/products/3" replace>   <li className="text-blue-400 underline"> Product 3</li></Link>
                            {/* replace above acts like when we click the back button after being directed to product3 page, it will not come back to  the products page rather it will move to the home page */}
        </ul>
    </>

    )
}