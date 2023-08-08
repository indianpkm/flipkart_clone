import { Box, Menu, MenuItem, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import axios from 'axios';

const Component=styled(Menu)`
margin-top:30px;
`;

const PriceFilter = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch=useDispatch()
    const open = Boolean(anchorEl);
    const [originalData,setOriginalData]=useState([])
    const url='http://localhost:8000'

    useEffect(()=>{
      const getData=async()=>{
        const {data} = await axios.get(`${url}/products`)
        setOriginalData(data)
      }
      getData()
    },[])
    
    const handleClose=(value)=>{
        setAnchorEl(null)
        const filterProduct = originalData.filter((item) => {
          if (value === '0-500') {
            return item.price.cost > 0 && item.price.cost <= 500;
          } else if (value === '500-1000') {
            return item.price.cost > 500 && item.price.cost <= 1000;
          } else if (value === '>1000') {
            return item.price.cost > 1000;
          }else{
            return item.price.cost>0
          }
        });
    
        dispatch(getProducts(filterProduct));
    }
    
    const openFilter=(e)=>{
        setAnchorEl(e.currentTarget)
    }

    const handleCloseMenu = () => {
      setAnchorEl(null);
      dispatch(getProducts()); // Dispatch an action to get all products
    };

  return (
    <>
    <Box onClick={openFilter}>  
    <Typography style={{marginLeft:22,marginTop:7, cursor:'pointer',width:'100%',fontSize:15}}>Filter</Typography>
    </Box>
    <Component 
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleCloseMenu}
    
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
        <MenuItem onClick={() => handleClose('0-500')}>0-500</MenuItem>
        <MenuItem onClick={() => handleClose('500-1000')}>500-1000</MenuItem>
        <MenuItem onClick={() => handleClose('>1000')}>{'>'}1000</MenuItem>
        <MenuItem onClick={() => handleCloseMenu()}>Clear Filter</MenuItem>
    </Component>
    </>
  )
}

export default PriceFilter