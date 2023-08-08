import { Button, ButtonGroup } from '@mui/material'
import {styled } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change_Cart_Qty } from '../../redux/constants/cartConstant'
import { changeCartQtyAcion } from '../../redux/actions/cartAction'

const Component=styled(ButtonGroup)`
margin-top:30px;
`
const StyledButton=styled(Button)`
border-radius:50%
`

const GroupButton = ({item}) => {
  const {cartItems}=useSelector(state=>state.cart)
  const id=cartItems.filter(item=>console.log(item))
  const dispatch=useDispatch()
  const changeCartQty=(id,quantity)=>{
    dispatch(changeCartQtyAcion(id,quantity))
  }

  return (
    <Component>
        <StyledButton onClick={()=>changeCartQty(item.id,item.quantity-1)}>-</StyledButton>
        <Button>{item.quantity}</Button>
        <StyledButton onClick={()=>changeCartQty(item.id,item.quantity+1)}>+</StyledButton>
    </Component>
  )
}

export default GroupButton;