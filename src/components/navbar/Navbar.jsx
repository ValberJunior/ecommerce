import React from 'react'
import { Center, Container, Input, Language, Left, Logo, Right, SearchContainer, SearchIcon, MenuItem, Wrapper, ShoppingCart, BadgeSection } from './styles';


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
               <Left>
                   <Language>EN</Language>
                   <SearchContainer>
                        <Input/>
                        <SearchIcon/>
                   </SearchContainer>
               </Left>
               <Center>
                   <Logo>
                       MarketPrime.
                   </Logo>
                </Center>
               <Right>
                  <MenuItem>Register</MenuItem>
                  <MenuItem>Sign In</MenuItem>

                  <BadgeSection badgeContent={4} color='primary'>
                      <ShoppingCart/>
                  </BadgeSection>
               </Right>
            </Wrapper>    
        </Container>
    )
}

export default Navbar;
