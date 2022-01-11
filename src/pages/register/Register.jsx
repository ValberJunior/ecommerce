import { Button } from "../../components"
import { Agreement, BtnGroup, Container, Form, Input, Title, Wrapper } from "./styles"
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const Navigate = useNavigate();

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>

                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />

                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong>
                    </Agreement>

                    <BtnGroup>
                        <Button onClick={()=>{ Navigate('*') }}>CREATE</Button>
                        <Button onClick={()=>{ Navigate('/') }}>BACK</Button>
                    </BtnGroup>
                </Form>
                
            </Wrapper>         
        </Container>
    )
}

export default Register
