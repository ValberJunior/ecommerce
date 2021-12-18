import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons"
import { Center, ContactItem, Container, Desc, Left, List, ListItem, Logo, MailICon, MapIcon, Payment, PhoneIcon, Right, SocialContainer, SocialICon, Title } from "./styles"


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Market Prime Store.</Logo>
                
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus libero aperiam, 
                    consectetur labore nobis harum architecto iste quidem illo possimus corporis quis! Ratione, autem quidem 
                    aperiam ipsam porro quibusdam? Quod expedita facilis itaque, ellendus modi saepe laudantium
                 </Desc>

                 <SocialContainer>
                     <SocialICon color='3B5999'>
                         <Facebook/>
                     </SocialICon>

                     <SocialICon color='E4405F'>
                         <Instagram/>
                     </SocialICon>

                     <SocialICon color='55ACEE'>
                         <Twitter/>
                     </SocialICon>

                     <SocialICon color='E60023'>
                         <YouTube/>
                     </SocialICon>
                 </SocialContainer>

            </Left>

            <Center>
                <Title>Useful Links</Title>

                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>

                </List>

            </Center>

            <Right>
                <Title>Contact</Title>

                <ContactItem>
                    <MapIcon/> 622 Dixie Path, South Tobinchester 98336
                </ContactItem>

                <ContactItem>
                    <PhoneIcon/> + 1 234 56 78
                </ContactItem>

                <ContactItem>
                    <MailICon/> contact@marketprimestore.com
                </ContactItem>

                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>

            </Right>
        </Container>
    )
}

export default Footer
