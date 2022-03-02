import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Container, Filter, FilterContainer, FilterText, Option, Select, Title } from './styles'
import { Announcement, Footer, Navbar, Newsletter, Products } from '../../components';

const ProductList = () => {

    const location = useLocation();

    // console.log(location)

    const cat = location.pathname.split('/')[2];
    const [ filter, setFilter ] = useState({});
    const [ sort , setSort ] = useState('Newest');

    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilter({
            ...filter,
            [e.target.name] : value
        })
    }

    return (
        <Container>
            <Navbar/>
            <Announcement/>

            <Title>{cat}</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disable value>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                        <Option>brown</Option>
                        <Option>gray</Option>
                    </Select>

                    <Select name='size' onChange={handleFilters}>
                        <Option disable value>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>

                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={e=>setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='desc'>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products cat={cat} filter={filter} sort={sort} />
            <Newsletter/>
            <Footer/>
            
        </Container>
    )
}

export default ProductList
