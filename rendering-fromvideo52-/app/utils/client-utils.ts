import "client-only"; // now if someone want to access this function in server side then it will throw error because this function is client only and not server side

export const ClientSideFunction = () => {
    console.log("This is a client side function which is suppposed to run on client side only and not on server side as client side function deals with UI, user interactions and other client side things which should not be exposed to server side")

    return "client side function";
};