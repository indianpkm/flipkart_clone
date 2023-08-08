import { Box, Button, styled } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LeftContainer = styled(Box)(({theme})=>({
  minWidth:'40%',
  padding:'40px 7px 0 80px',
  [theme.breakpoints.down('lg')]:{
    padding:'20px 40px',
  }
}))
const Image = styled('img')({
  padding: '15px',
  width:'95%'
})
const StyledButton = styled(Button)(({theme})=>({
  width:'48%',
  height:50,
  borderRadius:2,
  fontSize:15,
  [theme.breakpoints.down('lg')]:{
    width:'46%',
    fontSize:12
  },
  [theme.breakpoints.down('sm')]:{
    width:'48%'
  }
}))

const ImageBox=styled(Box)`
padding: 15px 20px;
border: 1px solid #f0f0f0;
`

const ActionItem = ({ product }) => {
  const [quantity,setQuantity]=useState(1);
  const {id}=product;
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const addItemToCart=()=>{
    dispatch(addToCart(id,quantity))
    navigate('/cart')
  }

  return (
    <LeftContainer>
      <ImageBox>
        <Image src={product.url} alt='product_image'/>
      </ImageBox>
      <StyledButton variant='contained' onClick={()=>addItemToCart()}
      style={{ marginRight: 10, background: '#ff9f00' }} ><ShoppingCartIcon /> Add to cart</StyledButton>
      <StyledButton variant='contained' style={{ background: '#fb541b' }}><FlashOnIcon /> Buy now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem