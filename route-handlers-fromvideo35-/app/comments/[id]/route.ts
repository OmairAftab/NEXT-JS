import {comments} from "../data";


//DYNAMIC ROUTE HANDLERS ARE ALSO SAME AS API ROUTE HANDLERS AS THEY ARE 
// KEPT IN FOLDER ENCLOSED WITH [], BUT THEY ARE USED FOR DYNAMIC ROUTES.


export async function GET(request: Request, {params}:  {params: Promise<{id: string}>}){

    const {id}=await params;
    const comment=  comments.find((c)=>c.id===parseInt(id));

    return Response.json(comment);
}




export async function PATCH(request: Request, {params}: {params: Promise<{id: string}>}){

    const {id}=await params;
    const body=await request.json(); //{text: "...."}  //this is the body of the request which we are sending from the client side in the fetch request.
    
    const commentIndex=comments.findIndex((c)=>c.id===parseInt(id)); //findIndex gives the index of the comment in the comments array which has the id same as the id in the params. If no comment is found with the given id, it returns -1.

    if(commentIndex===-1){
        return new Response("Comment not found", {status: 404});
    }

    comments[commentIndex].text=body.text;

    return Response.json(comments[commentIndex]);
}