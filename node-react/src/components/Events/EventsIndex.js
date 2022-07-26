import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Subscribe from '../Shared/Subscribe';
import EventTabs from './EventTabs';
import api from '../../firebaseApi';

const EventsIndex = () => {
    const [shows, setShows] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await api.get('/shows-events');
            const data = await response.data;
            setShows(data);
        })();
    }, []);

    return (
        <React.Fragment>
            <div className='page-heading-shows-events'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Our Shows & Events</h2>
                            <span>
                                Check out upcoming and past shows & events.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <EventTabs shows={shows} />
            <Subscribe />
            <Footer />
        </React.Fragment>
    );
};

export default EventsIndex;
