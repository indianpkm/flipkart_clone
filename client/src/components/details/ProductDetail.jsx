import { Box, Typography,styled, Table, TableBody, TableRow, TableCell } from '@mui/material'
import React from 'react'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText=styled(Box)`
font-size:14px;
vertical-align:baseline;
& p{
    font-size:14px;
    margin-top:10px;
}
`
const StyleBadge=styled(LocalOfferIcon)`
margin-right:10px;
color:#00cc00;
font-size:15px;
`
const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& >td{
    font-size:14px;
    margin-top:10px;
    border:none
}
`

const ProductDetail = ({product}) => {
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date=new Date(new Date().getTime()+(5*24*60*60*60*1000))
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>8 rating & 1 review
                <Box component='span'>
                    <img src={fassured} style={{ width: 77, marginLeft: 20 }} alt='fassured' />
                    </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><StyleBadge/> Get extra 20% of upto ₹50 ob 1 item</Typography>
                <Typography><StyleBadge/>10% off on Kotak Bank Debit Card Transactions, up to ₹500. On orders of ₹5,000 and above</Typography>
                <Typography><StyleBadge/>Get GST Invoice Available & Save up to 28% for Business purchases on Electronics</Typography>
                <Typography><StyleBadge/>Buy this product and get upto ₹500 off on Flipkart Furniture</Typography>
                <Typography><StyleBadge/>5% Cashback on Flipkart Axis Bank Card</Typography>
                <Typography><StyleBadge/>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                     <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </ColumnText>
                     <ColumnText>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component='span'  style={{color:'#2874f0'}}>PKM Store</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>7 Days Replacement Policy</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{width:390}} alt='flipkartPoints'/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail