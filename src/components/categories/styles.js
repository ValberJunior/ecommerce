import styled from "styled-components";
import { mobile, tablet } from '../responsive';

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: space-between;

padding: 20px;

${tablet({flexDirection: 'column'})};

${mobile({ padding: '0px', flexDirection: 'column'})}
`;