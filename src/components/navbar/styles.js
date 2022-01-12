import styled from "styled-components";
import { Search , ShoppingCartOutlined  } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile, mobileMini, tablet, viewPort } from '../responsive';


export const Container = styled.header`
height: 60px;

${viewPort({width: '100vw'})};

${mobile({height: '50px'})}

`;

export const Wrapper = styled.nav`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;

${viewPort({padding: '10px 15px', justifyContent: 'center'})};

${tablet({width: '100vw'})};

${mobile({padding: '10px 0px', justifyContent: 'center'})};

`;

export const Left = styled.div`
flex: 1;
display: flex;
align-items: center;


`;

export const Language = styled.span`
font-size: 14px;
cursor: pointer;

${mobile({display:'none'})}
`;

export const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

${viewPort({marginLeft:'20px'})};

${mobile({marginLeft:'15px'})}

${mobileMini({marginLeft: '5px'})}
`;

export const SearchIcon = styled(Search)`
cursor: pointer;
color: gray;
font-size: 16px;
`;

export const Input = styled.input`
border: none;
outline: none;

${viewPort({width: '100px'})};

${mobile({width: '60px'})}

${mobileMini({width: '40px'})}

`;

export const Center = styled.div`
flex: 1;
text-align: center;

${viewPort({display: 'flex', justifyContent:'center'})};
`;

export const Logo = styled.h1`
font-weight: bold;
cursor: pointer;

${mobile({fontSize: '15px', marginLeft:'5px'})}

${mobileMini({fontSize:'12px'})}

`;

export const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

${viewPort({ justifyContent: 'center'})};

${mobile({flex: 2, justifyContent: 'center'})}
`;

export const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
 
${viewPort({marginLeft: '10px', fontSize: '12px'})};

${mobile({marginLeft:'5px'})}

${mobileMini({fontSize: '12px', marginLeft: '5px'})}
`;

export const BadgeSection = styled(Badge)`
margin-left: 25px;

${mobile({marginLeft:'15px'})}

${mobileMini({marginLeft:'8px'})}
`;

export const ShoppingCart = styled(ShoppingCartOutlined)`
cursor: pointer;
`;
