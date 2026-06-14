type Pizza = {
    name: string
    price: number
}

/**
 * Challenge: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

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

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completedOrder(1)

console.log("Menu", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)