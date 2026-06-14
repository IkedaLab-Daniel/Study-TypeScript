type Pizza = {
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: string
}

/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */

let menu: Pizza[] = [
    {
        name: "Cobra",
        price: 10
    },
    {
        name: "Sting",
        price: 15
    },
]

let cashInRegister = 100;
const orderQueue = [];
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
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completedOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completedOrder(1)

console.log("Menu", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)