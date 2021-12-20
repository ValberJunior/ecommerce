import styled from "styled-components";
import { mobile, tablet , viewPort} from '../responsive';

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: space-between;

padding: 20px;

${viewPort({padding: '0px', flexDirection: 'column'})};

${tablet({flexDirection: 'column'})};

${mobile({ padding: '0px', flexDirection: 'column'})}
`;