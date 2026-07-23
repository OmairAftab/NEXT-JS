import { createProduct } from "../prisma-db";
import { redirect } from "next/navigation";



export default function NewProduct(){

    async function handleformsubmission(formdata:FormData){
        "use server";  //ye is liye likha hai kyon k ye function server side pe run hoga. this specific function must run on the server, not in the browser." This is what's called a Server Action

        const title = formdata.get("title") as string;
        const price = formdata.get("price") as string;
        const description = formdata.get("description") as string;

        await createProduct( title, parseInt(price),description);   //ye wo function hai jo video 72 k doran bnae the for CRUD operations

        redirect("/products");  //jab product ban jae ga to us page pe chale jaen ge jahan sb products show hote
    }



    return (
    <form action={handleformsubmission}  className="p-4 space-y-4 max-w-96" >
      <label className="text-black">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        />
      </label>
      <label className="text-black  ">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        />
      </label>
      <label className="text-black">
        Description
        <textarea
          className="block w-full p-2 text-black border rounded"
          name="description"
          
        />
      </label>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500"
      >
        Add Product
      </button>
    </form>
  );
}