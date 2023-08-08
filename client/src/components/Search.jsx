import { InputBase,Box,styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { getProducts } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchContainer=styled(Box)(({theme})=>({
    background:'#fff',
    width:'38%',
    borderRadius:2,
    marginLeft:10,
    display:'flex',
    [theme.breakpoints.down('md')]:{
        width:'60%',
        margin:'0px 30px'
    }
}))
const InputSearchBox=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset
`
const SearchIconWrapper=styled(SearchIcon)`
    color:blue;
    padding:5px;
    display:flex
`
const ListWrapper=styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:36px;
`

const Search=()=>{
    const [text,setText]=useState('');
    const {products}=useSelector(state=>state.getProducts)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText=(text)=>{
        setText(text);
    }
    return(<>
    <SearchContainer>
    <InputSearchBox 
    onChange={(e)=>getText(e.target.value)}
    value={text}
     placeholder="Search for products, brands and more" />
    <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
    {
        text && 
        <ListWrapper>
            {
                products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                            <ListItem>
                                <Link
                                to={`/product/${product.id}`}
                                onClick={()=>setText('')}
                                style={{textDecoration:'none',color:'inherit'}}
                                >
                                {product.title.longTitle}
                                </Link>
                            </ListItem>
                    )
                )
            }
        </ListWrapper>
    }
    </SearchContainer>
    </>)
}

export default Search;