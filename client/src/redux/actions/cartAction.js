import axios from 'axios'
import * as actionType from '../constants/cartConstant'

const url='http://localhost:8000'

export const addToCart=(id,quantity)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${url}/product/${id}`)
        dispatch({type:actionType.add_To_Cart,payload:{...data,quantity}})
    }catch(err){
        dispatch({type:actionType.add_To_Cart_Error,payload:err.message})
    }
}

export const removeFromCart=(id)=>(dispatch)=>{
    dispatch({type:actionType.remove_From_Cart,payload:id})
}

export const changeCartQtyAcion=(id,quantity)=>(dispatch)=>{
    dispatch({type:actionType.change_Cart_Qty,payload:{id,quantity}})
}