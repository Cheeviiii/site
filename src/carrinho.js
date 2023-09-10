const shopCart = []

function addItemCart(item) {
  shopCart.push(item)
}

function removeItemCart(item) {
  const index = shopCart.indexOf(item)

  if (index !== -1) {
    shopCart.splice(index,1)
  }
}

function viewCart() {
  if  (shopCart.length == 0) {
    console.log('Your shopping car is empty')
  } else {
    console.log('Itens in your shopping cart: ')
    for (var i = 0; i< shopCart.length; i++) {
      console.log(`${i + 1} - ${shopCart[i]}`)
    }
  }
}

function clearCart() {
  shopCart.length = 0 
  console.log('Your shopping cart has been cleared')
}

addItemCart("Tennis")
addItemCart("Blusa")
addItemCart("Computador Gaymer")

viewCart()

removeItemCart("Computador Gaymer")