type User = {
    username: string
    role: UserRole
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "guest"