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

const cashInRegister = 100
const orderQueue = []
const nextOrderId = 1;

function addNewPizza(pizzaObject) {
    menu.push(pizzaObject)
}


function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    cashInRegister += selectedPizza.price
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder
}

function completedOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 })
addNewPizza({ name: "BBQ Chicken", cost: 12 })
addNewPizza({ name: "Spicy Sausage", cost: 11 })

placeOrder("Chicken Bacon Ranch")
completedOrder("1")

console.log("Menu", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)