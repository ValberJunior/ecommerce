import React from 'react';
import { Announcement, Categories, Navbar, Newsletter, Products, Slider } from '../../components';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
        </div>
    )
}

export default Home

