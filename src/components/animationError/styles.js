import styled from "styled-components";
import { mobile } from "../responsive";



export const Container = styled.section`
width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
`;

export const Img = styled.img`
width: 400px;

${mobile({width: '300px'})};
`;

export const BtnGroup = styled.span`
width: 40%;

display: flex;
align-items: center;
justify-content: center;
`;