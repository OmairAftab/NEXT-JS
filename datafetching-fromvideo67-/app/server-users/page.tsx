


type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};


export default async function ServerUsersPage() {

    await new Promise((resolve)=>setTimeout(resolve, 2000)); //simulating a delay of 2 seconds to test loading.tsx


    
        const response= await fetch("https://jsonplaceholder.typicode.com/users");

        const users: User[] = await response.json();

        return (
        <div className="flex flex-col gap-4">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="p-4 m-4 flex flex-col justify-center items-start  border border-black border-2"
                >
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm">
                        <div>Username: {user.username}</div> 
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}