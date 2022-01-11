import React from 'react';
import { Announcement, Navbar, Newsletter, Footer, AnimationError} from '../../components';


const NotFound = () => {

    return (
        <>
            <Announcement/>
            <Navbar/>
                <AnimationError/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default NotFound
