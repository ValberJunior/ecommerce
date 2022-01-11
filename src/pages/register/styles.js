import styled from 'styled-components';
import { mobile, mobileMini, tablet , viewPort } from '../../components/responsive';


export const Container = styled.section`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),rgba(255,255,255,0.5)
    ), 
    url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;

    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: #fff;

${tablet({ width: '60vw'})}

${mobile({ width: '75%'})}

${mobileMini({ width: '90%'})}
`;

export const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
${mobile({ flexDirection: 'column'})}
`;

export const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

export const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

export const BtnGroup = styled.div`
width: 100%;

display: flex;
align-items: center;
justify-content: center;

${viewPort({flexDirection: 'column'})};
`;
