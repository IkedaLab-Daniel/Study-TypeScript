const menu = [
    {
        name: "Cobra",
        price: 10
    },
    {
        name: "Sting",
        price: 15
    },
]

let cashInRegister = 100
let orderQueue = []
let nextOrderId = 1;

function addNewPizza(pizzaObject) {
    menu.push(pizzaObject)
}


function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { pizza: selectedPizza, status: "ordered", orderId: nextOrderId}
    nextOrderId += 1
    orderQueue.push(newOrder)
    return newOrder
}

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder( orderId) {
    const order = orderQueue.find(orderObj => orderObj.orderId)

    if (order) {
        orderQueue = orderQueue.filter(obj => obj.orderId !== orderId)
        order["status"] = 'completed'
        orderQueue.push(order)
        return order
    } else {
        return "Order not found"
    }
}

console.log(placeOrder("Sting"))
console.log(completeOrder(1))
console.log(placeOrder("Cobra"))
console.log(completeOrder(2))