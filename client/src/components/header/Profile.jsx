import { Menu, MenuItem, Typography,styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
margin-top:5px;
`;
const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`

export const Profile = ({account,setAccount}) => {
    const [open,setOpen]=useState()
    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const LogoutUser=()=>{
        setAccount('')
    }
  return (
    <><Box style={{display:'flex',justifyContent:'center',alignItems:'center'}} onClick={handleClick}>
    <Typography style={{marginLeft:22,marginTop:7, cursor:'pointer',width:'100%',fontSize:15}}>{account}</Typography>
    </Box>
    <Component
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose();LogoutUser()}}><PowerSettingsNewIcon color='primary' fontSize='small'/>
        <Logout>Logout</Logout></MenuItem>
      </Component>
    </>
  )
}
