import { Box,styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import Banner from './Banner'
import Navbar from './Navbar'
import { getProducts } from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'
import Slide from './slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component=styled(Box)`
  padding:10px;
  background:#F2F2F2;
`

const Home = () => {
  const {products}=useSelector(state=>state.getProducts)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (<>
    <Navbar/>
    <Component>
    <Banner/>
    <MidSlide products={products} title='Deal of the day' timer={true}/>
    <MidSection/>
    <Slide products={products} title='Discount for you' timer={false}/>
    <Slide products={products} title='Suggesting items' timer={false}/>
    <Slide products={products} title='top selection' timer={false}/>
    <Slide products={products} title='Trending offers' timer={false}/>
    <Slide products={products} title='Season top picks' timer={false}/>
    <Slide products={products} title='Top deal on accessories' timer={false}/>
    </Component>
    </>)
}

export default Home