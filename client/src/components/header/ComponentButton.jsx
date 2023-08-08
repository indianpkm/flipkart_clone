import { Box, Button, Typography, styled, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";
import { useState } from "react";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import { Profile } from "./Profile";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import PriceFilter from "./PriceFilter";

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))
const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 5px 0 20px',
    '&>*': {
        marginRight: '25px !important',
        fontSize: 16,
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
        flexDirection:'column',
        alignItems: 'center',
        gap:20
    }
}))

const LoginButton = styled(Button)`
    color:#2874f0;
    background:#ffffff;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px
`
const HeaderText=styled(Typography)`
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
`

const ComponentButton = () => {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext)
    const {cartItems}=useSelector(state=>state.cart)
    
    const openDialog = () => {
        setOpen(true)
    }

    return (<>
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
            }
            <HeaderText style={{ marginTop:3, width: 135,textAlign:'center' }}>Become a seller</HeaderText>
            <PriceFilter/>
            <Container to='/cart' style={{display:'flex',flexDirection:'row'}}>
                <Badge badgeContent={cartItems?.length} color='secondary'>
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    </>)
}

export default ComponentButton;