import { useNavigate } from 'react-router-dom';
import Animation from '../../assets/notfound.gif';
import { BtnGroup, Container, Img } from './styles';
import { Button } from '..'



const AnimationError = () => {

    const Navigate = useNavigate();

    return (
        <Container>
            <Img src={Animation} alt='erro not found image'/>
            <BtnGroup>
             <Button onClick={()=>{ Navigate('/') }}>BACK</Button>
            </BtnGroup>
        </Container>
    )
}

export default AnimationError
