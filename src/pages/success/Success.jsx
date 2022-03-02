import { Button, Container, SucessAnimation, Title, Wrapper } from "./styles"
import successGif from '../../assets/Success.gif';
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {

    const location = useLocation();
    const Navigate = useNavigate();

    console.log(location);

    return (
        <Container>
            <Wrapper>
                <SucessAnimation src={successGif} alt='Success Animation'/>
                <Title>Transaction performed successfully !!!</Title>
                <Button
                onClick={()=>{ Navigate('/') }}>
                     Back to Home
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Success
