import { AddContainer, AddIcon, Amount, AmountContainer, Button, Container, Desc, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, RemoveIcon, Title, Wrapper } from './sytles';
import { Announcement, Footer, Navbar, Newsletter } from '../../components';


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.png' alt='fashion model'/>
                </ImgContainer>

                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laudantium natus repellat ex dignissimos 
                        corporis culpa, unde aliquam cupiditate quasi sequi minus,tenetur fugiat accusamus commodi quas praesentium illo impedit.
                        Excepturi vitae, sunt molestiae ullam labore consequatur iure modi ieos quam, inventore incidunt facilis distinctio!
                    </Desc>
                    <Price>$ 20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>

                        <AmountContainer>
                            <RemoveIcon/>
                            <Amount>1</Amount>
                            <AddIcon/>
                        </AmountContainer>

                        <Button>ADD TO CART</Button>
                        
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>            
        </Container>
    )
}

export default Product
