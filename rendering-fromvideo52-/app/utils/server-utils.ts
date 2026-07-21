import "server-only"; // now if someone want to access this function in client side then it will throw error because this function is server only and not client side
// and hence it will prevent any chnace of exposing server side code to the client

//without using server-only we can easily access the server side function in client side and hence it will expose the server side code to the client which is not good for security and hence we should use server-only to prevent this from happening

export const Serversidefunction=()=>{

    console.log("This is a server side function which is suppposed to run on server side only and not on client side as server side function deals with env, database and other server side things which should not be exposed to client side")

    return "Server side function";
}