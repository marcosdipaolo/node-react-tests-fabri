import React from 'react';
import Footer from '../Shared/Footer';
import Subscribe from '../Shared/Subscribe';
import VenueTabs from './VenueTabs';
import VenueApp from './VenueApp';

const RentIndex = () => {
    return (
        <React.Fragment>
            <div className='page-heading-rent-venue'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Are You Looking For A Venue?</h2>
                            <span>
                                Check out our venues, pick your choice and fill
                                the reservation application.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <VenueTabs />
            <VenueApp />
            <Subscribe />
            <Footer />
        </React.Fragment>
    );
};

export default RentIndex;
