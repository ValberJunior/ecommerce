import styled from "styled-components";

export const Container = styled.section`
width: 100%;
height: 100vh;
display: flex;

position: relative;

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

transform: translate(0vw);
`;

export const Slide = styled.div`
width: 100vw;
height: 100vh;

display: flex;
align-items: center;

background-color: #${props=>props.bg};

`;

export const ImgContainer = styled.div`
flex: 1;
height: 100%;
`;

export const Image = styled.img`
height: 80%;
`;

export const InfoContainer = styled.div`
flex: 1;
padding: 50px;
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
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

