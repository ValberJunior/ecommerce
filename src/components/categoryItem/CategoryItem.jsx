import { Button, Container, Image, Info, Title } from "./styles"

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} key={item.id}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
