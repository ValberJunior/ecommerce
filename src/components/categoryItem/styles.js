import styled from "styled-components";
import { mobile, tablet, viewPort } from '../responsive';

export const Container = styled.div`
flex:  1;
margin: 3px;
height: 70vh;

position: relative;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

${viewPort({width: '100vw', height: '60vh'})}

${tablet({width: '100vw', height: '45vh'})}

${mobile({ width: '100vw', height: '30vh'})}
`;

export const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;

display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
`;

export const Title = styled.h3`
color: #fff;
font-size: 35px;
margin-bottom: 20px;
`;

export const Button = styled.button`
border: none;
outline: none;
background-color: #fff;
color: gray;
font-weight: 600;

cursor: pointer;

padding: 15px;
`;