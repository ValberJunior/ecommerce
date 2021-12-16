import styled from "styled-components";
import { Search , ShoppingCartOutlined  } from '@material-ui/icons';
import { Badge } from '@material-ui/core';


export const Container = styled.header`
height: 60px;
`;

export const Wrapper = styled.nav`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

export const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

export const SearchIcon = styled(Search)`
cursor: pointer;
color: gray;
font-size: 16px;
`;

export const Input = styled.input`
border: none;
outline: none;
`;

export const Center = styled.div`
flex: 1;
text-align: center;
`;

export const Logo = styled.h1`
font-weight: bold;
`;

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`;

export const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
`;

export const BadgeSection = styled(Badge)`
margin-left: 25px;
`;

export const ShoppingCart = styled(ShoppingCartOutlined)`
cursor: pointer;
`;
