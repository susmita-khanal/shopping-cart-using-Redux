export const addToCart = (cartItems, cartItemToAdd) => {
    
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
      
      return cartItems.map(item =>
        item.id === cartItemToAdd.id
          ? { ...cartItemToAdd, quantity: item.quantity + 1 }
          : item
      );
    }
   
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

  // export const increaseQty=(cartItems,cartItemToIncreaseQty)=>{
  //    const increasequantity=cartItems.forEach((item)=>{
  //         item.id === cartItemToIncreaseQty.id ? {...cartItemToIncreaseQty,quantity:item.quantity++ }: item
  //      })
  //      return increasequantity
  //    }

  export const increaseQty = (cartItems, id) => {
    console.log(cartItems, id)
    return  cartItems.map((item) => item.id === id ? {...item, quantity:item.quantity = item.quantity+1 } : item)
  }

  export const decreaseQty = (cartItems, id) => {
    console.log(cartItems, id)
    return  cartItems.map((item) => item.id === id ? {...item, quantity:item.quantity= item.quantity-1 } : item)

  }