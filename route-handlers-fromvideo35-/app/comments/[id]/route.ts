import {comments} from "../data";


//DYNAMIC ROUTE HANDLERS ARE ALSO SAME AS API ROUTE HANDLERS AS THEY ARE 
// KEPT IN FOLDER ENCLOSED WITH [], BUT THEY ARE USED FOR DYNAMIC ROUTES.


export async function GET(request: Request, {params}:  {params: Promise<{id: string}>}){

    const {id}=await params;
    const comment=  comments.find((c)=>c.id===parseInt(id));

    return Response.json(comment);
}