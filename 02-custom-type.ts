type Address = {
    street: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person: Person = {
    name: "Ice",
    age: 1,
    isStudent: true
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

function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

displayInfo(person)