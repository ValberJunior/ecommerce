import React from 'react'
import { Center, Container, Input, Language, Left, Logo, Right, SearchContainer, SearchIcon, MenuItem, Wrapper, ShoppingCart, BadgeSection } from './styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const Navigate = useNavigate();
    const quantity = useSelector(state=>state.cart.quantity);

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
                   <Logo onClick={()=>{ Navigate('/') }}>
                       SHOOP <i style={{color: 'tomato'}} className="fas fa-shopping-bag"></i>
                   </Logo>
                </Center>
               <Right>
                  <MenuItem onClick={()=>{ Navigate('/register') }}>Register</MenuItem>
                  <MenuItem onClick={()=>{ Navigate('/login') }}>Sign In</MenuItem>
                <Link to='/cart'>
                  <BadgeSection badgeContent={quantity} color='primary'>
                      <ShoppingCart/>
                  </BadgeSection>
                </Link>
               </Right>
            </Wrapper>    
        </Container>
    )
}

export default Navbar;
