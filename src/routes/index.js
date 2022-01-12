import { Routes , Route , Navigate } from 'react-router-dom';
import { Cart, Home, Login, NotFound, Product, ProductList, Register } from '../pages';


const mainRoutes = ({user})=>{

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={ user? <Navigate to ='/'/> : <Login/>}/>
            <Route path='/register'element={ user? <Navigate to ='/'/> : <Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/products/:category' element={<ProductList/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='*' element={<NotFound/>}/> 
        </Routes>
    )

};

export default mainRoutes;