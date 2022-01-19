import { useEffect, useState } from "react";
import { Container } from "./styles";
import { popularProducts } from '../../data'
import Product from "../product/Product";
import axios from 'axios';


const Products = ({cat, filter, sort}) => {

 const [ products, setProducts ] = useState([]);
 const [ filteredProducts, setFilteredProducts ] = useState([]);


 useEffect( () => {
    const getProducts = async () => {
        try{
            const res = await axios.get(
                cat ? `http://localhost:5000/api/products?category=${cat}`
                : 'http://localhost:5000/api/products' );
            setProducts(res.data);
        }
        catch(err){
            console.log(err)
        }
    };
    getProducts();     
 },[cat]);


 useEffect(()=>{
     cat && 
     setFilteredProducts(
         products.filter( (item) => 
            Object.entries(filter).every(([key,value]) =>  item[key].includes(value)
            )
        )
     );

 }, [products, cat, filter]);

 useEffect(()=>{
 if (sort==='newest'){
     setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt - b.createAt)
        )
 }
 else if (sort==='asc'){
    setFilteredProducts(prev=>
       [...prev].sort((a,b)=>a.price - b.price)
       )
}
else {
    setFilteredProducts(prev=>
       [...prev].sort((a,b)=>b.price - a.price)
       )
}
 },[sort])


    return (
        <Container>
            {cat ? filteredProducts.map(
                item => (
                    <Product item={item} key={item._id}/>
                )
            ):
            products.map(
                item => (
                    <Product item={item} key={item._id}/>
                )
            )}
        </Container>
    )
}

export default Products
