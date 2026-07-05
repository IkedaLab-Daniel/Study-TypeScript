type User = {
    id: number
    username: string
    role: "member" | "contributor" | "admin"
}

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_smith", role: "contributor" },
    { id: 3, username: "alice_jones", role: "admin" },
    { id: 4, username: "charlie_brown", role: "member" },
];

function updateUser(id: number, updates: any): undefined {
    // Find the user in the array by the id
    const user = users.find(user => user.id === id)
    if (!user) {
        console.error(`User with id ${id} not found.`)
        return
    }
    // Use Object.assign to update the found user in place. 
    Object.assign(user, updates)
}

// Example updates:
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)