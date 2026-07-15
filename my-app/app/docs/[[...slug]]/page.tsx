export default async function slug( {
    params,
} :{
    params : Promise <{slug?: string[] }>
}) {

    const {slug} =await params;


    if(!slug || slug.length === 0){
        return <h1>Thats a docs page</h1>
    }

    if(slug.length === 2){
        return <h1> The first route after docs/ is {slug[0]} and 2nd one is {slug[1]}</h1>
    }
    else if(slug.length === 1){
        return <h1> The  route after docs/ is {slug[0]} </h1>
    }
    
    
    return <h1>DOCSSSS</h1>  //if none of above codition met mean we have more than 2 routes e.g., docs/reviews/hello/bye after docs/ so we will return this message
}

/*
DESCRIPTION:
Folder: app/docs/[[...slug]]/page.tsx (double brackets = optional catch-all)
- slug is optional in the type because /docs alone has nothing after it
- await params first, then destructure slug
- /docs            -> slug is undefined -> "Thats a docs page"
- /docs/a          -> slug = ["a"]           -> length 1 branch
- /docs/a/b        -> slug = ["a","b"]       -> length 2 branch
- /docs/a/b/c/...  -> slug.length >= 3       -> falls through to "DOCSSSS"
Note: undefined check must come first, or slug.length crashes when slug is undefined.
*/