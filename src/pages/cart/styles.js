import styled from 'styled-components';
import { Add, Remove, ShoppingBasket } from '@material-ui/icons';
import { mobile, mobileMini, tablet , viewPort} from '../../components/responsive';

export const Container = styled.section`
${mobile({ width: '350px', margin: 'auto'})}
`;

export const Wrapper = styled.div`
padding: 20px;
`;

export const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

export const BagIcon = styled(ShoppingBasket)``;

export const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

padding: 20px;

${viewPort({ padding: '25px 5px'})}

`;

export const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;

border: ${props=>props.type === 'filled' && 'none'};
background-color: ${props=>props.type === 'filled' ? 'black' : 'transparent'};
color: ${props=>props.type === 'filled' && 'white'};
`;

export const TopTexts = styled.div`
${viewPort({ display: 'none'})}
`;

export const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

export const Bottom = styled.div`
display: flex;
justify-content: space-between;


${tablet({ flexDirection: 'column'})}

${viewPort({ flexDirection: 'column'})}
`;

export const Info = styled.div`
flex: 3;
`;

export const Product = styled.div`
display: flex;
justify-content: space-between;

padding: 30px 5px;

${viewPort({ flexDirection: 'column'})}
`;

export const ProductDetails = styled.div`
flex: 2;

display: flex;

`

export const Image = styled.img`
width: 200px;

${viewPort({ width: '130px'})}
`;

export const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;

${mobileMini({ fontSize: '12px'})}
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;

flex-direction: column;
`;

export const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

export const AddIcon = styled(Add)`
cursor: pointer;
`;

export const RemoveIcon = styled(Remove)`

cursor: pointer;`;

export const ProductAmount = styled.span`
font-size: 24px;
margin: 5px;

${viewPort({ margin: '5px 15px'})}
`;

export const ProductPrice = styled.span`
font-size: 30px;
font-weight: 200;

${viewPort({ marginBottom: '20px'})}
`;

export const Hr = styled.hr`
border: 0.5px solid #eee;
`;

export const Summary = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;

${tablet({width: '50vw', margin: 'auto', marginTop: '40px'})}
`;

export const SummaryTitle = styled.h1`
font-weight: 200;

`;

export const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === 'total' && '500'};
font-size: ${props=>props.type === 'total' && '24px'};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: #fff;
font-weight: 600;

border: none;
outline: none;

cursor: pointer;
`;