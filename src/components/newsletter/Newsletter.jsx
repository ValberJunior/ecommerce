import { Send } from "@material-ui/icons"
import { Button, Container, Description, Input, InputContainer, Title } from "./styles"

const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
