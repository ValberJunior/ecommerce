import React from 'react';
import { useEffect, useState } from 'react';
import { AddIcon, BagIcon, Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetails, ProductId, ProductName, ProductPrice, ProductSize, RemoveIcon, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './styles'
import { Announcement, Footer, Navbar, Newsletter } from '../../components';
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../services/services';
import { useNavigate } from 'react-router-dom';


const KEY = 'pk_test_51KAuPKB6LFO7RKgdjPqtmKWQ3KsCmoKuvFT4JP0xasvi6f0HC2z97bvmmgij2bWnVvRtQa1a1wxYlrwJH3CT1fiR00lIuTZmvo';

const Cart = () => {

    const cart = useSelector(state=>state.cart);
    const [ stripeToken, setStripeToken] = useState({});
    const navigate = useNavigate();

    const onToken = (token) => {
        const id = token;
        setStripeToken(id);
    }

    useEffect(()=>{

        const makeRequest = async ()=>{
            try{
                    const res = await userRequest.post("/checkout/payment",
                    {
                    tokenId: stripeToken.id,
                    amount: 500,
                    }) ;
                    navigate('/success', {data: res.data});
                }catch(err){
                             console.log(err)
                }
        };

        stripeToken && cart.total >= 1 && makeRequest();

    }, [stripeToken, cart.total, navigate])



    return (
        <Container>
            <Navbar/>
            <Announcement/>

            <Wrapper>
                <Title>YOUR BAG <BagIcon/></Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your WishList(0)</TopText>
                        </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                       {cart.products.map(product=>
                       (
                        <Product key={Math.ceil(Math.random()*100)}>
                            <ProductDetails>
                                <Image src={product.img} alt={product.title}/>
                                <Details>
                                    <ProductName><strong>Product:</strong> {product.title}</ProductName>
                                    <ProductId><strong>ID:</strong>{product._id}</ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize><strong>Size:</strong> {product.size}</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>

                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                            <Hr/>
                        </Product>
                       )
                       )}

                       
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ { cart.Total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem >
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discont</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type='total'>
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ { cart.total}</SummaryItemPrice>
                        </SummaryItem>

                    <StripeCheckout
                    name='SHOOP STORE'
                    image='https://cdn.iconscout.com/icon/free/png-64/bag-2456694-2036148.png'
                    billingAddress
                    description={`Your total is $${cart.total}`}
                    amount={cart.total*100}
                    token={(token)=>{onToken(token)}}
                    stripeKey={KEY}
                    >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout> 
                    </Summary>
                </Bottom>
            </Wrapper>

            <Newsletter/>
            <Footer/>            
        </Container>
    )
}

export default Cart
