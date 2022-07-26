import api from '../../firebaseApi';
import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Subscribe from '../Shared/Subscribe';
import AboutItem from './AboutItem';
import AlsoLike from './AlsoLike';
import Heading from './Heading';
import Upcomming from './Upcoming';

const AboutIndex = () => {
    const [events, setEvents] = useState({});
    useEffect(()=>{
        const fetching = async()=>{
            const response = await api.get('/about');
            setEvents(Object.values( await response.data));
        }
        fetching();
    },[]);

    return (
        <React.Fragment>
            <Heading />
            <AboutItem />
            <Upcomming />
            <AlsoLike events={events} />
            <Subscribe />
            <Footer />
        </React.Fragment>
    );
};

export default AboutIndex;
