import { comments } from "./data";

export async function GET(){
    return Response.json(comments);
}


//jab POST REQUEST KNRNA TO AESE TEXT BHEJNA {"text": "...."} mean text  b double comments main
export async function POST(request: Request){
    const comment=await request.json();
    console.log("Received body:", comment);   // check your terminal after posting

    const newComment={
        id:comments.length+1,
        text:comment.text
    }

    comments.push(newComment);  
    
    return new Response(JSON.stringify(newComment), {
        status: 201,
    });
}