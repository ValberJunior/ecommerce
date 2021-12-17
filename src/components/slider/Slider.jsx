import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons"
import { ArrowLeft, ArrowRight , Container, Slide, ImgContainer,Image, InfoContainer, Wrapper, Title, Desc, Button } from "./styles"
import { useState } from "react"

const Slider = () => {

    const [ slideIndex, setSlideIndex ] = useState(0);

    const handleClick = ()=>{

    }

    return (
        <Container>

            <ArrowLeft onClick={()=>{handleClick('left')}}>
                <ArrowBackIos/>
            </ArrowLeft>

                <Wrapper>
                    <Slide bg='f5fafd'>
                        <ImgContainer>
                        <Image src='https://images2.imgbox.com/34/ac/B0gchqid_o.png' alt='Shop Model'/>
                        </ImgContainer>

                        <InfoContainer>
                            <Title>SUMMER SALE</Title>
                            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% FOR NEW ARRIVALS.</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>

                    <Slide bg='fcf1ed'>
                        <ImgContainer>
                        <Image src='https://images2.imgbox.com/6b/61/1U5irgVW_o.png' alt='Shop Model'/>
                        </ImgContainer>

                        <InfoContainer>
                            <Title>WINTER SALE</Title>
                            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% FOR NEW ARRIVALS.</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>

                    <Slide bg='fbf0f4'>
                        <ImgContainer>
                        <Image src='https://images2.imgbox.com/6b/61/1U5irgVW_o.png' alt='Shop Model'/>
                        </ImgContainer>

                        <InfoContainer>
                            <Title>POPULAR SALE</Title>
                            <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% FOR NEW ARRIVALS.</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>

                </Wrapper>

            <ArrowRight onClick={()=>{handleClick('right')}}>
                <ArrowForwardIos/>
            </ArrowRight>
          
        </Container>
    )
}

export default Slider
