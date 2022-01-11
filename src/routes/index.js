import { Routes , Route } from 'react-router-dom';
import { Cart, Home, Login, NotFound, Product, ProductList, Register } from '../pages';


const mainRoutes = ()=>{

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/products' element={<ProductList/>}/> 
            <Route path='*' element={<NotFound/>}/> 
        </Routes>
    )

};

export default mainRoutes;