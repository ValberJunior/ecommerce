import styled from "styled-components";

export const Container = styled.section`
flex: 1;
margin: 5px;
min-width: 280px;
height: 350px;

display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;

position: relative;
`;

export const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: #fff;
position: absolute;
`;

export const Image = styled.img`
height: 75%;

z-index: 2;
`;

export const Info = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;

background-color: rgba(0,0,0,0.2);

opacity: 0;

z-index: 3;

display: flex;
align-items: center;
justify-content: center;

transition: all 0.5s linear;

&:hover{
    opacity: 1;
}
`;

export const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;

background-color: white;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

margin: 10px;

transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`;