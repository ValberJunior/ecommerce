import styled from 'styled-components';
import { mobile, tablet, viewPort } from '../../components/responsive';


export const Container = styled.section`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),rgba(255,255,255,0.5)
    ), 
    url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;

    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: #fff;

${tablet({ width: '50vw'})};

${mobile({ width: '75%'})};
`;

export const Title = styled.h1`
font-size: 24px;
font-weight: 300;

margin-bottom: 15px;
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`;

export const BtnGroup = styled.div`
width: 100%;

display: flex;
align-items: center;
justify-content: center;

padding: 10px 0px;

${viewPort({flexDirection: 'column'})};
`;

export const Error = styled.span`
width: 100%;

display: flex;
align-items: center;
justify-content: center;

color: red;
padding: 15px;

`;


export const Link = styled.a`

margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;
