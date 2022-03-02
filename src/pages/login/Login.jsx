import { Button } from "../../components"
import { BtnGroup, Container, Error, Form, Input, Link, Title, Wrapper } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const  dispatch = useDispatch();
    const {isFetching,error} = useSelector(state=>state.user);

    const Navigate = useNavigate();

    const handleClick = (e)=>{
        e.preventDefault();
        login( dispatch, { username, password} );
    };

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN </Title>

                <Form>
                    <Input 
                    placeholder="username" 
                    onChange={(e)=> setUsername(e.target.value)}
                    />

                    <Input
                    placeholder="password"
                    type="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    />

                    <BtnGroup>

                        <Button
                        onClick={handleClick}
                        disable={isFetching}
                        >
                            LOGIN
                        </Button>

                        <Button 
                        onClick={()=>{ Navigate('/') }}
                        >
                            BACK
                        </Button>

                    </BtnGroup>
                    
                    { error && <Error>
                            Something went wrong...
                    </Error>}

                    <Link onClick={()=>{ Navigate('*') }} >DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link onClick={()=>{ Navigate('/register') }} >CREATE A NEW ACCOUNT</Link>
                </Form>
                
            </Wrapper>         
        </Container>
    )
}

export default Login
