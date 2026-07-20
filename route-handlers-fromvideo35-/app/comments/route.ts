import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET( request: NextRequest, ){
    const searchQuery= request.nextUrl.searchParams;  //sab queryparamters jo ? k aage likhe hote
    const query=searchQuery.get("query")               //query k aage jo likha wo get kre ga mean 
                                                      // if comments?query=first 

    //if query exists so bs wo wale comments le k aao jin main wo word aata ho mean if comments?query=first   so jo aik comment hai {id:1,   text: "This is the first comment,"}  sirf wo show hoga
    const filteredcomments= query ? comments.filter((comment)=>comment.text.includes(query)) : comments
   
    return Response.json(filteredcomments);
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