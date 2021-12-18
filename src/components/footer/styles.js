import {  Copyright, MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

export const FooterSection = styled.footer`
display: flex;
flex-align: center;
justify-content: center;

flex-direction: column;

padding: 10px 0px;
`;

export const Container = styled.div`
display: flex;
padding: 60px;

${mobile({ flexDirection: 'column'})}

`;

export const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

export const Logo = styled.h3`

`

export const Desc = styled.p`
margin: 20px 0px;
`;

export const SocialContainer = styled.div`
display: flex;
`;

export const SocialICon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: #fff;
background-color: #${(props=>props.color)};
cursor: pointer;

display: flex;
justify-content: center;
align-items: center;

margin-right: 20px;
`;

export const Center = styled.div`
flex: 1;
padding: 20px;

${mobile({ display: 'none'})}

`;

export const Title = styled.h4`
margin-bottom: 30px;
`;

export const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
`;

export const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;


export const Right = styled.div`
flex: 1;
padding: 20px;

${mobile({ display:'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'})}

`;

export const ContactItem = styled.div`
margin-botom: 20px;
display: flex;
align-items: center;
`;

export const MapIcon = styled(Room)`
margin-right: 10px;
`;

export const PhoneIcon = styled(Phone)`
margin-right: 10px;
`;

export const MailICon = styled(MailOutline)`
margin-right: 10px;
`;

export const Payment = styled.img`
width: 50%;
cursor: pointer;

margin: 10px 0px;
`;

export const CopyrightSection = styled.div`
width: 60%;
margin: auto;
border-top: 0.5px solid gray;

display: flex;
align-items: center;
justify-content: center;

padding: 20px;
`;

export const CopyrightBar = styled.span`
text-align: center
font-weight: 400;

display: flex;
align-items: center;
justify-content: center;
`;

export const CopyrightIcon = styled(Copyright)`
margin: 5px;
`;