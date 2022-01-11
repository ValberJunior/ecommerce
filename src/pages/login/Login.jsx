import { Button } from "../../components"
import { BtnGroup, Container, Form, Input, Link, Title, Wrapper } from "./styles";
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const Navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN </Title>

                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />

                    <BtnGroup>
                        <Button onClick={()=>{ Navigate('*') }}>LOGIN</Button>
                        <Button onClick={()=>{ Navigate('/') }}>BACK</Button>
                    </BtnGroup>
                    

                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
                
            </Wrapper>         
        </Container>
    )
}

export default Login

