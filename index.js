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
const orderQueue = []

function addNewPizza(pizzaObject) {
    menu.push(pizzaObject)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue 
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzeName) {
    const selectedPizza = menu.find(obj => obj.name === pizzeName)

    if (selectedPizza) {
        const oldCash = cashInRegister
        const price = selectedPizza.price
        
        cashInRegister = cashInRegister + parseInt(price)

        console.log("New Cash from", oldCash, "into", parseInt(cashInRegister))

        console.log(selectedPizza)
    } else {
        console.log("Pizza name not found")
    }
}

placeOrder("Sting")