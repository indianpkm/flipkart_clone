import axios from "axios"
import * as actionTypes from '../constants/productConstant'

const url='http://localhost:8000'

export const getProducts=(filterData)=>async(dispatch)=>{
    try{
        const {data} = await axios.get(`${url}/products`)
        if(filterData){
        dispatch({type:actionTypes.Get_Products_Success,payload:filterData})   
        }else{
        dispatch({type:actionTypes.Get_Products_Success,payload:data})
        }
    }catch(err){
        dispatch({type:actionTypes.Get_Products_Fail,payload:err.message})
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({type:actionTypes.Get_Product_Details_Request})
        const {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type:actionTypes.Get_Product_Details_Success,payload:data})
    }catch(err){
        dispatch({type:actionTypes.Get_Product_Details_Fail,payload:err.message})
    }
}