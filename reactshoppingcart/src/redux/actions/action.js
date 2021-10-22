export const addToCart=(data)=>{
    return{
        type:"ADD_TO_CART",
        payload:
            // id:new Date().getTime().toString(),
            data
        
    }
}
// export const increaseQty=(id)=>{
//     return{
// type:"INCREASE_QUANTITY"
// }


export const removeFromCart=(id)=>{
    console.log(id)
    return{
        type:"REMOVE_FROM_CART",
        payload:id
        
    }
}
export const increaseQty=(id)=>{
    return{
        type:"INCREASE_QTY",
        payload:id
    }
}
export const decreaseQty=(id)=>{
    return{
        type:"DECREASE_QTY",
        payload:id
    }
}