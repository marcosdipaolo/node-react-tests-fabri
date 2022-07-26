import React from 'react';
import { Link } from 'react-router-dom';

const EventTabs = (props) => {
    return (
        <React.Fragment>
            <div className='shows-events-tabs'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='row' id='tabs'>
                                <div className='col-lg-12'>
                                    <div className='heading-tabs'>
                                        <div className='row'>
                                            <div className='col-lg-8'>
                                                <ul>
                                                    <li>
                                                        <Link to={'#tabs-1'}>
                                                            Upcoming
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'#tabs-2'}>
                                                            Past
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='col-lg-4'>
                                                <div className='main-dark-button'>
                                                    <Link to={'/ticket-details'}>
                                                        Purchase Tickets
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <section className='tabs-content'>
                                        <article id='tabs-1'>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className='heading'>
                                                        <h2>Upcoming</h2>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <div className='sidebar'>
                                                        <div className='row'>
                                                            <div className='col-lg-12'>
                                                                <div className='heading-sidebar'>
                                                                    <h4>
                                                                        Sort The
                                                                        Upcoming
                                                                        Shows &
                                                                        Events
                                                                        By:
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12'>
                                                                <div className='month'>
                                                                    <h6>
                                                                        Month
                                                                    </h6>
                                                                    <ul>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                July
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                August
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                September
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12'>
                                                                <div className='category'>
                                                                    <h6>
                                                                        Category
                                                                    </h6>
                                                                    <ul>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Pop
                                                                                Music
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Rock
                                                                                Music
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Hip
                                                                                Hop
                                                                                Music
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12'>
                                                                <div className='venues'>
                                                                    <h6>
                                                                        Venues
                                                                    </h6>
                                                                    <ul>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Radio
                                                                                City
                                                                                Musical
                                                                                Hall
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Madison
                                                                                Square
                                                                                Garden
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Royce
                                                                                Hall
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-9'>
                                                    <div className='row'>
                                                        {props.shows.length > 0 ? (
                                                            props.shows.map((e) => {
                                                                return (
                                                                    <div key={e.title} className='col-lg-12'>
                                                                        <div className='event-item'>
                                                                            <div className='row'>
                                                                                <div className='col-lg-4'>
                                                                                    <div className='left-content'>
                                                                                        <h4>
                                                                                            {e.title}
                                                                                        </h4>
                                                                                        <p>
                                                                                            {' '}
                                                                                            {e.description}
                                                                                        </p>
                                                                                        <div className='main-dark-button'>
                                                                                            <Link to={'/event-details'}>
                                                                                                Discover
                                                                                                More
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-4'>
                                                                                    <div className='thumb'>
                                                                                        <img
                                                                                            src={e.img}
                                                                                            alt=''
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                                <div className='col-lg-4'>
                                                                                    <div className='right-content'>
                                                                                        <ul>
                                                                                            <li>
                                                                                                <i className='fa fa-clock-o'></i>
                                                                                                <h6>
                                                                                                    {
                                                                                                        e.date
                                                                                                    }
                                                                                                    <br />
                                                                                                    {
                                                                                                        e.hour
                                                                                                    }
                                                                                                </h6>
                                                                                            </li>
                                                                                            <li>
                                                                                                <i className='fa fa-map-marker'></i>
                                                                                                <span>
                                                                                                    {' '}
                                                                                                    {
                                                                                                        e.place
                                                                                                    }
                                                                                                </span>
                                                                                            </li>
                                                                                            <li>
                                                                                                <i className='fa fa-users'></i>
                                                                                                <span>
                                                                                                    {' '}
                                                                                                    {
                                                                                                        e.attending
                                                                                                    }{' '}
                                                                                                    Total
                                                                                                    Guests
                                                                                                    Attending
                                                                                                </span>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })
                                                        ) : (
                                                            <h1 className='d-flex justify-content-center p-3'>
                                                                No shows to
                                                                display
                                                            </h1>
                                                        )}

                                                        <div className='col-lg-12'>
                                                            <div className='pagination'>
                                                                <ul>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            Prev
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            1
                                                                        </Link>
                                                                    </li>
                                                                    <li className='active'>
                                                                        <Link to={'#'}>
                                                                            2
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            3
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            Next
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article id='tabs-2'>
                                            <div className='row'>
                                                <div className='col-lg-12'>
                                                    <div className='heading'>
                                                        <h2>Upcoming</h2>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <div className='sidebar'>
                                                        <div className='row'>
                                                            <div className='col-lg-12'>
                                                                <div className='heading-sidebar'>
                                                                    <h4>
                                                                        Sort The
                                                                        Upcoming
                                                                        Shows &
                                                                        Events
                                                                        By:
                                                                    </h4>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12'>
                                                                <div className='month'>
                                                                    <h6>
                                                                        Month
                                                                    </h6>
                                                                    <ul>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                July
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                August
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                September
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12'>
                                                                <div className='category'>
                                                                    <h6>
                                                                        Category
                                                                    </h6>
                                                                    <ul>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Pop
                                                                                Music
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Rock
                                                                                Music
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Hip
                                                                                Hop
                                                                                Music
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-12'>
                                                                <div className='venues'>
                                                                    <h6>
                                                                        Venues
                                                                    </h6>
                                                                    <ul>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Radio
                                                                                City
                                                                                Musical
                                                                                Hall
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Madison
                                                                                Square
                                                                                Garden
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link to={'#'}>
                                                                                Royce
                                                                                Hall
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-9'>
                                                    <div className='row'>
                                                        <div className='col-lg-12'>
                                                            <div className='event-item'>
                                                                <div className='row'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='left-content'>
                                                                            <h4>
                                                                                Water
                                                                                Splash
                                                                                Festival
                                                                            </h4>
                                                                            <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                consectetur
                                                                                do
                                                                                adipiscing
                                                                                eliterirt
                                                                                sed
                                                                                eiusmod
                                                                                alori...
                                                                            </p>
                                                                            <div className='main-dark-button'>
                                                                                <Link to={'/event-details'}>
                                                                                    Discover
                                                                                    More
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='thumb'>
                                                                            <img
                                                                                src='/images/event-page-04.jpg'
                                                                                alt=''
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='right-content'>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className='fa fa-clock-o'></i>
                                                                                    <h6>
                                                                                        April
                                                                                        24
                                                                                        Friday
                                                                                        <br />
                                                                                        12:00
                                                                                        AM
                                                                                        -
                                                                                        12:00
                                                                                        PM
                                                                                    </h6>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-map-marker'></i>
                                                                                    <span>
                                                                                        Copacabana
                                                                                        Beach,
                                                                                        Rio
                                                                                        de
                                                                                        Janeiro
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-users'></i>
                                                                                    <span>
                                                                                        528
                                                                                        Total
                                                                                        Guests
                                                                                        Attending
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-12'>
                                                            <div className='event-item'>
                                                                <div className='row'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='left-content'>
                                                                            <h4>
                                                                                Sunny
                                                                                Hill
                                                                                Festival
                                                                            </h4>
                                                                            <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                consectetur
                                                                                do
                                                                                adipiscing
                                                                                eliterirt
                                                                                sed
                                                                                eiusmod
                                                                                alori...
                                                                            </p>
                                                                            <div className='main-dark-button'>
                                                                                <Link to={'/event-details'}>
                                                                                    Discover
                                                                                    More
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='thumb'>
                                                                            <img
                                                                                src='/images/event-page-03.jpg'
                                                                                alt=''
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='right-content'>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className='fa fa-clock-o'></i>
                                                                                    <h6>
                                                                                        May
                                                                                        31
                                                                                        Friday
                                                                                        <br />
                                                                                        10:00
                                                                                        AM
                                                                                        -
                                                                                        11:00
                                                                                        PM
                                                                                    </h6>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-map-marker'></i>
                                                                                    <span>
                                                                                        Copacabana
                                                                                        Beach,
                                                                                        Rio
                                                                                        de
                                                                                        Janeiro
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-users'></i>
                                                                                    <span>
                                                                                        240
                                                                                        Total
                                                                                        Guests
                                                                                        Attending
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-12'>
                                                            <div className='event-item'>
                                                                <div className='row'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='left-content'>
                                                                            <h4>
                                                                                New
                                                                                Rock
                                                                                Festival
                                                                            </h4>
                                                                            <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                consectetur
                                                                                do
                                                                                adipiscing
                                                                                eliterirt
                                                                                sed
                                                                                eiusmod
                                                                                alori...
                                                                            </p>
                                                                            <div className='main-dark-button'>
                                                                                <Link to={'/event-details'}>
                                                                                    Discover
                                                                                    More
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='thumb'>
                                                                            <img
                                                                                src='/images/event-page-02.jpg'
                                                                                alt=''
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='right-content'>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className='fa fa-clock-o'></i>
                                                                                    <h6>
                                                                                        June
                                                                                        12
                                                                                        Friday
                                                                                        <br />
                                                                                        09:00
                                                                                        AM
                                                                                        -
                                                                                        09:00
                                                                                        PM
                                                                                    </h6>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-map-marker'></i>
                                                                                    <span>
                                                                                        Copacabana
                                                                                        Beach,
                                                                                        Rio
                                                                                        de
                                                                                        Janeiro
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-users'></i>
                                                                                    <span>
                                                                                        360
                                                                                        Total
                                                                                        Guests
                                                                                        Attending
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-12'>
                                                            <div className='event-item'>
                                                                <div className='row'>
                                                                    <div className='col-lg-4'>
                                                                        <div className='left-content'>
                                                                            <h4>
                                                                                Monkey
                                                                                Dance
                                                                                Festival
                                                                            </h4>
                                                                            <p>
                                                                                Lorem
                                                                                ipsum
                                                                                dolor
                                                                                sit
                                                                                amet,
                                                                                consectetur
                                                                                do
                                                                                adipiscing
                                                                                eliterirt
                                                                                sed
                                                                                eiusmod
                                                                                alori...
                                                                            </p>
                                                                            <div className='main-dark-button'>
                                                                                <Link to={'/event-details'}>
                                                                                    Discover
                                                                                    More
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='thumb'>
                                                                            <img
                                                                                src='/images/event-page-01.jpg'
                                                                                alt=''
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4'>
                                                                        <div className='right-content'>
                                                                            <ul>
                                                                                <li>
                                                                                    <i className='fa fa-clock-o'></i>
                                                                                    <h6>
                                                                                        July
                                                                                        14
                                                                                        Friday
                                                                                        <br />
                                                                                        08:30
                                                                                        AM
                                                                                        -
                                                                                        09:30
                                                                                        PM
                                                                                    </h6>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-map-marker'></i>
                                                                                    <span>
                                                                                        Copacabana
                                                                                        Beach,
                                                                                        Rio
                                                                                        de
                                                                                        Janeiro
                                                                                    </span>
                                                                                </li>
                                                                                <li>
                                                                                    <i className='fa fa-users'></i>
                                                                                    <span>
                                                                                        450
                                                                                        Total
                                                                                        Guests
                                                                                        Attending
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-12'>
                                                            <div className='pagination'>
                                                                <ul>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            Prev
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            1
                                                                        </Link>
                                                                    </li>
                                                                    <li className='active'>
                                                                        <Link to={'#'}>
                                                                            2
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            3
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to={'#'}>
                                                                            Next
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EventTabs;
