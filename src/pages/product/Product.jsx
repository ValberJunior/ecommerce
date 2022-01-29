import { AddContainer, AddIcon, Amount, AmountContainer, Button, Container, Desc, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer, Price, RemoveIcon, Title, Wrapper } from './sytles';
import { Announcement, Footer, Navbar, Newsletter } from '../../components';
import { useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { publicRequest } from '../../services';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';



const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [ product, setProduct ] = useState({});
    const [ quantity, setQuantity ] = useState(1);
    const [ color , setColor ] = useState('');
    const [ size, setSize ] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        const getProduct = async ()=> {
        try{
            const res = await publicRequest.get("/products/find/"+id);
            setProduct(res.data);
        }
        catch(err){
            console.log(err)
        }
    };
        getProduct()        
    },[id]);

    const handleQuantity = (type) =>
    {
        if(type === 'dec'){
         quantity > 1 && setQuantity(quantity - 1);
        }
        else{
            setQuantity( quantity + 1);
        }
    }

    const handleClick = ()=> {
       dispatch(addProduct({...product, quantity , color, size}));   
    };

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} alt='fashion model'/>
                </ImgContainer>

                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>
                       {product.desc}
                    </Desc>
                    <Price>$ {product.price}</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                                { product.color?.map(c=>(
                                <FilterColor color={c} key={c} onClick={()=>{setColor(c)}}/>
                                )) }
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            { product.size?.map(s=>(
                                <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                )) }
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>

                        <AmountContainer>
                            <RemoveIcon onClick={()=>{handleQuantity('dec')}}/>
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={()=>{handleQuantity('inc')}}/>
                        </AmountContainer>

                        <Button onClick={handleClick}>ADD TO CART</Button>
                        
                    </AddContainer>

                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>            
        </Container>
    )
}

export default Product
