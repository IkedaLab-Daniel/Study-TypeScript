// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person: Person = {
    name: "Ice",
    age: 1,
    isStudent: true,
    address: {
        street: "123 main",
        city: "any",
        country: "ph"
    }
}

let person2: Person = {
    name: "Ikeda",
    age: 4,
    isStudent: true,
        address: {
        street: "123 main",
        city: "any",
        country: "ph"
    }
}

