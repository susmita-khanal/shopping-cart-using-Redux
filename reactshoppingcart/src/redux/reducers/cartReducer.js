import {addToCart} from "../cart.utils";
import { increaseQty,decreaseQty } from "../cart.utils";

const initialData={
    product:[],
    // totalAmount:0
}

const cartReducer=(state=initialData,action)=>{
//    console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
        return{
            ...state,
            product:addToCart(state.product,action.payload)
        }
       
        case "REMOVE_FROM_CART":
           
            const deleteItem=state.product.filter((cval)=>cval.id !== action.payload)
           
            return{
                ...state,
                product:deleteItem
            }
            case "INCREASE_QTY":
                return {
                    ...state,
                    product:increaseQty(state.product,action.payload)
                }
                case "DECREASE_QTY":
                return {
                    ...state,
                    product:decreaseQty(state.product,action.payload)
                }
                
        default:return state;
    }
}
export default cartReducer