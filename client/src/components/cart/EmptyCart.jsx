import { Typography } from '@mui/material';
import { Box,styled } from '@mui/system'
import React from 'react'

const Component=styled(Box)(({theme})=>({
  height:'65vh',
  width:'80%',
  background:'#fff',
  margin:'80px 140px',
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  [theme.breakpoints.down('md')]:{
    margin:'80px 45px',
  }
}))
const Container=styled(Box)`
text-align:center;
padding-top:70px
`

const EmptyCart = () => {   
const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <Component>
        <Container>
            <img src={imgurl} alt='cart' style={{width:'45%',marginBottom:40}} />
            <Typography>Your cart is empty</Typography>
        </Container>
    </Component>
  )
}

export default EmptyCart