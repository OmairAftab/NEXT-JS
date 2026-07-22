"use client";

import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function ClientUsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError("An error occurred while fetching users.");
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>{error}</p>;

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