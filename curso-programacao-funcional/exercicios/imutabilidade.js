const cart = {
    quantity: 2,
    total: 200
}

//bad 
cart.quantity = 3 // retornarĂ¡ erro

//good
const newCart = {...cart, quantity: 3}
console.log(newCart)

