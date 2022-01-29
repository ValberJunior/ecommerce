import { AddIcon, BagIcon, Bottom, Button, Container, Details, Hr, Image, Info, PriceDetail, Product, ProductAmount, ProductAmountContainer, ProductColor, ProductDetails, ProductId, ProductName, ProductPrice, ProductSize, RemoveIcon, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './styles'
import { Announcement, Footer, Navbar, Newsletter } from '../../components';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cart = useSelector(state=>state.cart);

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
                        <>
                        <Product key={Math.random()*100}>
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
                        </Product>
                         <Hr/>
                        </>
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
