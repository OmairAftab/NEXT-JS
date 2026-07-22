import Author from "./author";


type Post={
    userId:number,
    id:number,
    title:string,
    body:string
}


export default async function PostsSequentialPage() {

    const response= await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts:Post[]= await response.json();

    const filteredposts=posts.filter((post)=>post.id % 10===0);


    return (
        <div className="flex flex-col gap-4">
            {filteredposts.map((post) => (
                <div
                    key={post.id}
                    className="p-4 m-4 flex flex-col justify-center items-start  border border-black border-2"
                >
                    <div className="font-bold">Post id : {post.id}</div>
                    <div className="text-sm">
                        <div>Title: {post.title}</div>
                        <div>Body: {post.body}</div>
                    </div>

                    <div className="font-bold">Written by:  <Author userId={post.userId}/></div>

                </div>
            ))}
        </div>
    );
}


//in this tutorial 70- we did sequential data fetching
//First the data of posts is fetched and then the data of author is fetched for each post. 
// This is sequential data fetching .. request are dependdent on each other. and takes more time to load the page.