import styled from "styled-components";
import { viewPort } from "../responsive";

export const Btn = styled.button`
width: 40%;
border: none;
outline: none;
padding: 15px 20px;
margin: 10px;

background-color: teal;
color: white;

cursor: pointer;

${viewPort({width: '90%', margin: 'auto', marginBottom: '10px'})};

&:disable{
    color: green;
    cursor: not-allowed;
}

`;
