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