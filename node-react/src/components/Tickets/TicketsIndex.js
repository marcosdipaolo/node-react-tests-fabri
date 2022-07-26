import React from 'react';
import Footer from '../Shared/Footer';
import Subscribe from '../Shared/Subscribe';
import HeadEv from './HeadEv';
import TicketsCont from './TicketsCont';

const TicketsIndex = () => {
    return (
        <React.Fragment>
            <HeadEv />
            <TicketsCont/>
            <Subscribe />
            <Footer />
        </React.Fragment>
    );
};

export default TicketsIndex;
