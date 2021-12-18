import { AddIcon, BagIcon, Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetails, ProductId, ProductName, ProductPrice, ProductSize, RemoveIcon, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './styles'
import { Announcement, Footer, Navbar, Newsletter } from '../../components';

const Cart = () => {
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
                        <Product>
                            <ProductDetails>
                                <Image src='https://www.pngarts.com/files/2/Shoes-Transparent-Background-PNG.png' alt='image product'/>
                                <Details>
                                    <ProductName><strong>Product:</strong> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><strong>ID:</strong> 98493473949</ProductId>
                                    <ProductColor color='gray' />
                                    <ProductSize><strong>Size:</strong> 37.5</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>

                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>

                        <Hr/>

                        <Product>
                            <ProductDetails>
                                <Image src='https://www.pngarts.com/files/1/T-Shirt-Transparent-Background-PNG.png' alt='image product'/>
                                <Details>
                                    <ProductName><strong>Product:</strong> HAKURA T-SHIRT</ProductName>
                                    <ProductId><strong>ID:</strong> 98493473949</ProductId>
                                    <ProductColor color='black' />
                                    <ProductSize><strong>Size:</strong> M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <AddIcon/>
                                    <ProductAmount>2</ProductAmount>
                                    <RemoveIcon/>
                                </ProductAmountContainer>

                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 120</SummaryItemPrice>
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
                            <SummaryItemPrice>$ 120</SummaryItemPrice>
                        </SummaryItem>

                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>

            <Newsletter/>
            <Footer/>            
        </Container>
    )
}

export default Cart
