import React from 'react';
import { Announcement, Categories, Navbar, Products, Slider } from '../../components';

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>
    )
}

export default Home

