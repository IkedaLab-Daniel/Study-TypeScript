type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

let menu: Pizza[] = [
    {
        id: 1,
        name: "Cobra",
        price: 10
    },
    {
        id: 2,
        name: "Sting",
        price: 15
    },
]

let cashInRegister = 100;
let orderQueue: Order[] = [];
let nextOrderId = 1;

function addNewPizza(pizzaObject: Pizza) {
    menu.push(pizzaObject)
}


function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exists in menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completedOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.log(`Order ${orderId} not found`)
        return
    }

    order.status = "completed"
    return order
}

addNewPizza({ id: 3, name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ id: 4, name: "BBQ Chicken", price: 12 })
addNewPizza({ id: 5, name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completedOrder(1)

console.log("Menu", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)

/**
 * Challenge: create a new utility function called getPizzaDetail. It will take
 * a parameter called `identifier`, but there's a twist: we want this identifier
 * to be allowed to either be the string name of the pizza (e.g. "Pepperoni"),
 * OR to be the number ID of the pizza (e.g. 2).
 * 
 * Don't worry about the code inside the function yet, just create the function
 * signature, making sure to teach TS that the `identifier` parameter is allowed
 * to either be a string or a number.
 */

function getPizzaDetail(identifier: string | number) {
    let pizza;

    if (typeof(identifier) === "string") {
        pizza = menu.find(obj => obj.name === identifier)
    } else {
        pizza = menu.find(obj => obj.id === identifier)
    }

    if (!pizza) {
        console.error(`Pizza ${pizza} not found.`)
        return
    }

    return pizza
}

const pizzaDeatail = getPizzaDetail("Sting")
console.log(pizzaDeatail)