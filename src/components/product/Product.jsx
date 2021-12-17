import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import { Circle, Container, Icon, Image, Info } from './styles'

const Product = ({item}) => {
    return (
        <Container>
           <Circle/> 
           <Image src={item.img}/>
           <Info>
               <Icon>
                   <ShoppingCartOutlined/>
               </Icon>
               <Icon>
                   <SearchOutlined/>
               </Icon>
               <Icon>
                   <FavoriteBorderOutlined/>
               </Icon>

           </Info>
        </Container>
    )
}

export default Product
