"use client";



export default function ClientComponentTwo({children}:
    {
        children: React.ReactNode
    }
) {
    return (
        <>
            <h1>Client Component Two</h1>
            {children}
        </>
    )
}