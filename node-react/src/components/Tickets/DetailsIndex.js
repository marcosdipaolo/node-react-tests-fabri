import React from 'react';
import HeadEv from './HeadEv';
import DetailsCont from './DetailsCont';
import Subscribe from '../Shared/Subscribe';
import Footer from '../Shared/Footer';

const DetailsIndex = () => {
    return (
        <React.Fragment>
            <HeadEv />
            <DetailsCont />
            <Subscribe />
            <Footer />
        </React.Fragment>
    );
};

export default DetailsIndex;
