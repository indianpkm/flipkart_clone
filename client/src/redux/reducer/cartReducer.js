import * as actionType from '../constants/cartConstant'

export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case actionType.add_To_Cart:
            const item=action.payload;
            const exist=state.cartItems.find(product=>product.id===item.id)
            if(exist){
                return{...state,cartItems:state.cartItems.map(data=>data.product===exist.product? item:data)}
            }else{
                return{...state,cartItems:[...state.cartItems,item]}
            }
        case actionType.remove_From_Cart:
            return{...state,cartItems:state.cartItems.filter(product=>product.id !== action.payload)}
        case actionType.change_Cart_Qty:
            return{...state,cartItems:state.cartItems.filter(item=>item.id===action.payload.id?item.quantity=action.payload.quantity:item.quantity)}
        default:
            return state;
    }
}