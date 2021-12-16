import React from 'react'
import { Center, Container, Left, Right, Wrapper } from './styles';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
               <Left>Left</Left>
               <Center>Center</Center>
               <Right>Right</Right>
            </Wrapper>    
        </Container>
    )
}

export default Navbar;
