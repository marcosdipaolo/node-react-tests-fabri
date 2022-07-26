import React from 'react';
import MainBanner from './MainBanner';
import Carrousel from './Carrousel';
import Venus from './Venus';
import VenueTickets from './VenueTickets';
import Subscribe from '../Shared/Subscribe';
import Footer from '../Shared/Footer';

const HomeIndex = () => {

    return (
        <React.Fragment>
            <MainBanner />
            <Carrousel />
            <Venus />
            <div className='map-image'>
                <img src='/images/map-image.jpg' alt='Maps of 3 Venues' />
            </div>
            <VenueTickets />
            <Subscribe />
            <Footer />
        </React.Fragment>
    );
};

export default HomeIndex;
