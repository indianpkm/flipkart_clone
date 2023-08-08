import React from 'react'
import { Button, Dialog, TextField, Box, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { authenticateSignup,authenticateLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvider'
import { useContext } from 'react'

const Component = styled(Box)(({theme})=>({
  height:'70vh',
  width:'90vh',
  [theme.breakpoints.down('md')]:{
    width:'100%'
  }
}))

const Image = styled(Box)(({theme})=>({
  background:'#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat',
  height:'83.7%',
  width:'28%',
  padding:'45px 35px',
  '&> p, &> h5':{
    color:'#FFFFFF'
  },
  [theme.breakpoints.down('md')]:{
    display:'none',
  }
}))

const Wrapper=styled(Box)(({theme})=>({
  display:'flex',
  flexDirection:'column',
  padding:'45px 35px',
  flex:1,
  '& > div, &> button,&>p':{
    marginTop:20
  },
  [theme.breakpoints.down('md')]:{
    width:'100%',
  }
}))
const LoginButton=styled(Button)`
  text-transform:none;
  background:#f8641B;
  color:#fff;
  height:48px;
  border-radius:2px;
`
const RequestOtp=styled(Button)`
  text-transform:none;
  background:#fff;
  color:#2874f0;
  height:48px;
  border-radius:2px;
  box-shadow:0 2px 4px 0 rgb(0 0 0/20%)
`
const Text=styled(Typography)`
  font-size:12px;
  color:#878787;
`
const CreateAccount=styled(Typography)`
  font-size:14px;
  text-align:center;
  color:#2874f0;
  font-weight:600;
  cursor:pointer;
`
const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`

const accountInitialValues={
  login:{
    view:'login',
    heading:'Login',
    subheading:"Get access to your Orders, Wishlist and Recommendations"
  },
  signup:{
    view:'signup',
    heading:"Looks like you're new here!",
    subheading:"Sign up with your mobile number to get started",
  }
}
const signupInitialValues={
  firstname:'',
  lastname:'',
  username:'',
  email:'',
  password:'',
  phone:''
}
// const loginInitialValues={
//   username:'',
//   password:''
// }

const LoginDialog = ({ open, setOpen }) => {
const [account,toggleAccount]=useState(accountInitialValues.login);
const [signup,setSignup]=useState(signupInitialValues)
const [login,setLogin]=useState()
const [error,setError]=useState(false)
const {setAccount}=useContext(DataContext)

const toggleSignup=()=>{
  toggleAccount(accountInitialValues.signup)
}

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false)
  }
const onInputChange=(e)=>{
  setSignup({...signup,[e.target.name]:e.target.value})
}
const signupUser=async()=>{
  let response=await authenticateSignup(signup);
  if(!response) return;
  handleClose();
  setAccount(signup.firstname)
}
const onValueChange=(e)=>{
  setLogin({...login,[e.target.name]:e.target.value})
}
const loginUser=async()=>{
  let res= await authenticateLogin(login)
  console.log(res)
  if(res.status===200){
    handleClose();
    setAccount(res.data.data.firstname)
  }else{
    setError(true)
  }
}

  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
      <Component style={{display:'flex'}}>
        <Image>
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography style={{marginTop:20}}>{account.subheading}</Typography>
        </Image>
       { account.view==='login' ?
       <Wrapper>
          <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='username' label='Enter Username'></TextField>
          {error && <Error>Please Enter Vaild Details</Error>}
          <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='password' label='Enter Password'></TextField>
          <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
          <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
          <Typography style={{textAlign:'center'}}>OR</Typography>
          <RequestOtp>Request OTP</RequestOtp>
          <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
        </Wrapper> :
        <Wrapper>
         <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="firstname" label='Enter First Name'></TextField>
         <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="lastname" label='Enter Last Name'></TextField>
         <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="username" label='Enter Username'></TextField>
         <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="email" label='Enter Email'></TextField>
         <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="password" label='Enter Password'></TextField>
         <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="phone" label='Enter Phone'></TextField>
         <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
       </Wrapper>
        }
      </Component>
    </Dialog>
  )
}

export default LoginDialog