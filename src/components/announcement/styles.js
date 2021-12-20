import styled from "styled-components";
import { mobileMini, viewPort} from "../responsive";

export const Container = styled.section`
height: 30px;
background-color: teal;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;

${viewPort({width: '100vw'})};

${mobileMini({ fontSize: '11px'})}
`;