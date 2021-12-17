import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons"
import { ArrowLeft, ArrowRight , Container, Slide, ImgContainer,Image, InfoContainer, Wrapper, Title, Desc, Button } from "./styles"
import { useState } from "react";
import {sliderItems} from '../../data';

const Slider = () => {

    const [ slideIndex, setSlideIndex ] = useState(0);

    const handleClick = (direction)=>{
        if(direction==='left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>

            <ArrowLeft direction='left' onClick={()=>{handleClick('left')}}>
                <ArrowBackIos/>
            </ArrowLeft>

                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map(item=>
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                        <Image src={item.img} alt='Shop Model'/>
                        </ImgContainer>

                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                    )}
                </Wrapper>

            <ArrowRight direction='right' onClick={()=>{handleClick('right')}}>
                <ArrowForwardIos/>
            </ArrowRight>
          
        </Container>
    )
}

export default Slider
