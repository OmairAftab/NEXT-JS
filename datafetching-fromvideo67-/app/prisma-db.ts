import { PrismaClient } from "./generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({
  url: "file:app.db",
});

export const prisma = new PrismaClient({ adapter });

export const seedProducts = async () => {
  const count = await prisma.product.count();

  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: "Product 1",price: 10.99, description: "This is product 1" },
        { title: "Product 2", price: 20.99, description: "This is product 2" },
        { title: "Product 3", price: 30.99, description: "This is product 3" },
      ],
    });
  }
};


seedProducts();



export async function getProducts(){
    return await prisma.product.findMany();
}



export async function getProducct(id:number){
     return await prisma.product.findUnique({
        where : {id}
     })
}



export async function createProduct(
    title: string,
    price: number,
    description: string
){
    return await prisma.product.create({
        data: {
            title,
            price,
            description
        }
    })
}



export async function updateProduct(
    id: number,
    title:string,
    price:number,
    description:string
){
    return await prisma.product.update({
        where: {id},
        data: {
            title,
            price,
            description
        }
    })
}

