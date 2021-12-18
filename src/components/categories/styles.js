import styled from "styled-components";
import { mobile } from '../responsive';

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: space-between;

padding: 20px;

${mobile({ padding: '0px', flexDirection: 'column'})}
`;