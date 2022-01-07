import styled from "styled-components";
import { mobile, tablet, viewPort } from '../responsive';

export const Container = styled.section`
width: 100%;
height: 100vh;
display: flex;

position: relative;

${viewPort({display: 'none'})};

${tablet({display: 'none'})};

${mobile({ display: 'none'})};

`;

export const ArrowLeft = styled.div`
width: 50px;
height: 50px;
background-color: #fdf5f5;
border-radius: 50%;

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;

position: absolute;
top: 50%;
left: 10px;

opacity: 0.5;

z-index: 2;
`;

export const ArrowRight = styled.div`
width: 50px;
height: 50px;
background-color: #fdf5f5;
border-radius: 50%;

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;

position: absolute;
top: 50%;
right: 10px;

opacity: 0.5;

z-index: 2;
`;

export const Wrapper = styled.div`
height: 100vh;

display: flex;

transition: all 1.5s ease;

transform: translate(${props=>props.slideIndex * -100}vw);

${viewPort({width: '100vw'})};

`;

export const Slide = styled.div`
width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: flex-end;

background: url('${props=>props.bg}');
background-size: cover;

`;


export const InfoContainer = styled.div`
 background-color: #00000045;
 width: 500px;
 padding: 50px;
 margin-right:50px;
 color: white;
`;

export const Title = styled.h1`
font-size: 70px;

`;

export const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

export const Button = styled.button`
padding: 10px 20px;
font-size: 20px;
background-color: transparent;
cursor: pointer;

background-color: white;

border: 1px solid #cdcdcd;

border-radius: 10px;
`;

