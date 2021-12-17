const { default: styled } = require("styled-components");

export const Container = styled.section`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Title = styled.h3`
font-size: 70px;
margin-bottom: 20px;
`;

export const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`;

export const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fff;

display: flex;
justify-content: space-between;

border: 1px solid lightgray;
`;

export const Input = styled.input`
border: none;
outline: none;
flex: 8;

padding-left: 20px;
`;

export const Button = styled.button`
flex: 1;
border: none;
outline: none;
background-color: teal;
cursor: pointer;
color: white;
`;