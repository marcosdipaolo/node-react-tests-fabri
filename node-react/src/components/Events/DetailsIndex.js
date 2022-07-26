import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import Subscribe from '../Shared/Subscribe';
import ShowEvs from './ShowEvs';

const DetailsIndex = () => {
    const [details, setDetails] = useState([]);
    return (
        <React.Fragment>
            <div className='page-heading-rent-venue'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Event Details</h2>
                            <span>
                                Check out our latest Shows & Events and be part
                                of us.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <ShowEvs details={details} />
            <Subscribe />
            <Footer />
        </React.Fragment>
    );
};

export default DetailsIndex;
