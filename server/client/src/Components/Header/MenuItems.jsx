import React from 'react'
import {Box,Typography,styled} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import AddShopping from '@mui/icons-material/AddShoppingCartOutlined';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MoreIcon from '@mui/icons-material/More';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradingIcon from '@mui/icons-material/Grading';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const First = styled(Box)`
    background : '#2874f0;
    height : 40px;
    display : flex;
`
const Item1 = styled(Box)`
    margin-left : 10px;
    display : flex;
    color : #FFF;
`
const Logo = styled(Box)`
    margin-left : auto;
   `

const Image = styled('img')(({theme})=>({
    height : '25px',
    width : '25px',
    marginRight : '10px'
}))

const FirstItem = styled(Box)`
background-color : #2874f0;
display : flex;
padding : 12px 0px;
`

const Container = styled(Box)`
margin-top: -8px !important;
margin-left: -4px !important;

`
const HomeText = styled(Typography)`
    margin-left : 10px;
    margin-top : 1px;
`

const SecondItem = styled(Box)`
`
const Items = styled(Box)`
margin : 10px;
display : flex
`

const ItemsText = styled(Box)`
margin-left : 10px;
`

const MenuItems = () => {


    const flipkartLogo = "data:image/jpeg;base64,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"

  return (
    <Container>
      <FirstItem>
        <Item1>
            <HomeIcon/><HomeText>Home</HomeText>
        </Item1>
        
      <Logo><Image src = {flipkartLogo}/>
      </Logo>
      </FirstItem>
      <SecondItem>
        <Items>
            <AddShopping/><ItemsText>Flipkart Plus Zone</ItemsText>
        </Items>
        <Items>
            <BorderAllIcon/><ItemsText>All Categories</ItemsText>
        </Items>
        <Items>
            <WhatshotIcon/><ItemsText>Trending Stores</ItemsText>
        </Items>
        <Items>
            <MoreIcon/><ItemsText>More on Flipkart</ItemsText>
        </Items>
        <Items>
            <GTranslateIcon/><ItemsText>Choose Language</ItemsText>
        </Items>
        <Items>
            <LocalOfferIcon/><ItemsText>Offer Zone</ItemsText>
        </Items>
        <Items>
            <BorderAllIcon/><ItemsText>Sell on Flipkart</ItemsText>
        </Items>
        <Items>
            <StorefrontIcon/><ItemsText>My orders</ItemsText>
        </Items>
        <Items>
            <GradingIcon/><ItemsText>Coupons</ItemsText>
        </Items>
        <Items>
            <ShoppingCartIcon/><ItemsText>My Cart</ItemsText>
        </Items>
        <Items>
            <PersonIcon/><ItemsText>My Account</ItemsText>
        </Items>
        <Items>
            <FavoriteIcon/><ItemsText>My Wishlist</ItemsText>
        </Items>
        <Items>
            <NotificationsActiveIcon/><ItemsText>My Notifications</ItemsText>
        </Items>
      </SecondItem>

    </Container>

  )
}

export default MenuItems
