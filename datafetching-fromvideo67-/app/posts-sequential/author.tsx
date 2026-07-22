

type Author={
    id:number,
    name:string,
}


export default async function Author({userId}:{
    userId:number
}){

    const response= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const user: Author = await response.json();

    return(
        <>
            {user.name}
        </>
    )

}