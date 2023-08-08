
import { AppBar, Toolbar, styled, Box, Typography, IconButton, Drawer, List, ListItem, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import Search from '../Search'
import ComponentButton from './ComponentButton'
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataProvider'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const StyleHeader = styled(AppBar)`
    background:#2874f0;
    height:55px;
`
const Component = styled(Link)(({ theme }) => ({
    marginLeft: '12%',
    lineHeight: 0,
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        marginLeft: 10
    }
}))
const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic
`
const PlusImg = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 2
})
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'40%',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        marginLeft: 'auto'
    }
}))
const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false)
    const {setAccount}=useContext(DataContext)
    const handleOpen = () => {
        setOpen(true)
    }
    const LogoutUser=()=>{
        setAccount('')
    }
    const handleClose = () => {
        setOpen(false)
    }
    const list = () => (
        <Box style={{ width: 200 }} onClick={handleClose}>
            <List >
                <ListItem>
                    <ComponentButton/>
                </ListItem>
                <MenuItem onClick={() => {LogoutUser() }} style={{marginLeft:25}}>
                    <PowerSettingsNewIcon color='primary' fontSize='small' />
                    <Logout>Logout</Logout>
                </MenuItem>
            </List>
        </Box>
    )
    return (<>
        <StyleHeader>
            <Toolbar style={{ minHeight: 55 }}>

                <Component to='/'>
                    <img src={logoURL} alt='logo' style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}><SubHeading>Explore&nbsp;
                        <Box component='span' style={{ color: 'yellow' }}> Plus </Box></SubHeading>
                        <PlusImg src={subURL} alt='sub-Logo' />
                    </Box>
                </Component>
                <Search />
                <MenuButton color='inherit' onClick={handleOpen}>
                    <MenuIcon />
                </MenuButton>
                <Drawer
                    open={open}
                    onClose={handleClose}
                >
                    {list()}
                </Drawer>
                <CustomButtonWrapper> <ComponentButton /> </CustomButtonWrapper>
            </Toolbar>
        </StyleHeader>
    </>)
}

export default Header;