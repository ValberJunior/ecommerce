import React from 'react'
import { Center, Container, Input, Language, Left, Logo, Right, SearchContainer, SearchIcon, MenuItem, Wrapper, ShoppingCart, BadgeSection } from './styles';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const Navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
               <Left>
                   <Language>EN</Language>
                   <SearchContainer>
                        <Input placeholder='Search'/>
                        <SearchIcon/>
                   </SearchContainer>
               </Left>
               <Center>
                   <Logo>
                       SHOOP <i style={{color: 'tomato'}} className="fas fa-shopping-bag"></i>
                   </Logo>
                </Center>
               <Right>
                  <MenuItem onClick={()=>{ Navigate('/register') }}>Register</MenuItem>
                  <MenuItem onClick={()=>{ Navigate('/login') }}>Sign In</MenuItem>

                  <BadgeSection badgeContent={4} color='primary'>
                      <ShoppingCart/>
                  </BadgeSection>
               </Right>
            </Wrapper>    
        </Container>
    )
}

export default Navbar;
