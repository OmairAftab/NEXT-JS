"use client";
// THE ERRROR FILE IS ALWAYS A CLIENT COMPONENT, because it is used to handle errors in client side navigation.

export default function ErrorHandler({
    error,
    reset
}: 
    {
    error: Error,
    reset: () => void
}) {
    console.log(error);
    return (
    <>
    <h1>{error.message}</h1>
    <button onClick={()=>reset()}> Try Again</button>
    </>)
}