import React from 'react';
import { Link } from 'react-router-dom';

const TicketsIndex = () => {
    const [month, setMonth] = React.useState('Month');
    const [location, setLocation] = React.useState('Location');
    const [price, setPrice] = React.useState('Price');
    const monHan = (e) => {
        setMonth(e.target.value);
    };
    const locHan = (e) => {
        setLocation(e.target.value);
    };
    const priHan = (e) => {
        setPrice(e.target.value);
    };
    const submitHandler = () => {};
    return (
        <React.Fragment>
            <div className='tickets-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='search-box'>
                                <form
                                    id='subscribe'
                                    action=''
                                    method='get'
                                    onSubmit={submitHandler}
                                >
                                    <div className='row'>
                                        <div className='col-lg-5'>
                                            <div className='search-heading'>
                                                <h4>
                                                    Sort The Upcoming Shows &
                                                    Events By:
                                                </h4>
                                            </div>
                                        </div>
                                        <div className='col-lg-7'>
                                            <div className='row'>
                                                <div className='col-lg-3'>
                                                    <select
                                                        onChange={monHan}
                                                        value={month}
                                                    >
                                                        <option value='month'>
                                                            Month
                                                        </option>
                                                        <option
                                                            name='June'
                                                            id='June'
                                                        >
                                                            June
                                                        </option>
                                                        <option
                                                            name='July'
                                                            id='July'
                                                        >
                                                            July
                                                        </option>
                                                        <option
                                                            name='August'
                                                            id='August'
                                                        >
                                                            August
                                                        </option>
                                                        <option
                                                            name='September'
                                                            id='September'
                                                        >
                                                            September
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <select
                                                        onChange={locHan}
                                                        value={location}
                                                    >
                                                        <option value='location'>
                                                            Location
                                                        </option>
                                                        <option
                                                            name='Brazil'
                                                            id='Brazil'
                                                        >
                                                            Brazil
                                                        </option>
                                                        <option
                                                            name='Europe'
                                                            id='Europe'
                                                        >
                                                            Europe
                                                        </option>
                                                        <option
                                                            name='US'
                                                            id='US'
                                                        >
                                                            US
                                                        </option>
                                                        <option
                                                            name='Asia'
                                                            id='Asia'
                                                        >
                                                            Asia
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <select
                                                        onChange={priHan}
                                                        value={price}
                                                    >
                                                        <option value='month'>
                                                            Price
                                                        </option>
                                                        <option
                                                            name='min'
                                                            id='min'
                                                        >
                                                            $0 - $50
                                                        </option>
                                                        <option
                                                            name='standard'
                                                            id='standard'
                                                        >
                                                            $50 - $100
                                                        </option>
                                                        <option
                                                            name='hight'
                                                            id='hight'
                                                        >
                                                            $100 - $200
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className='col-lg-3'>
                                                    <fieldset>
                                                        <button
                                                            type='submit'
                                                            id='form-submit'
                                                            className='main-dark-button'
                                                        >
                                                            Submit
                                                        </button>
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='heading'>
                                <h2>Tickets Page</h2>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ticket-item'>
                                <div className='thumb'>
                                    <img src='/images/ticket-01.jpg' alt='' />
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from <em>$25</em>
                                        </span>
                                    </div>
                                </div>
                                <div className='down-content'>
                                    <span>
                                        There Are 150 Tickets Left For This Show
                                    </span>
                                    <h4>Wonderful Festival</h4>
                                    <ul>
                                        <li>
                                            <i className='fa fa-clock-o'></i>{' '}
                                            Thursday: 05:00 PM to 10:00 PM
                                        </li>
                                        <li>
                                            <i className='fa fa-map-marker'></i>
                                            908 Copacabana Beach, Rio de Janeiro
                                        </li>
                                    </ul>
                                    <div className='main-dark-button'>
                                        <Link to={'/ticket-details'}>
                                            Purchase Tickets
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ticket-item'>
                                <div className='thumb'>
                                    <img src='/images/ticket-02.jpg' alt='' />
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from <em>$45</em>
                                        </span>
                                    </div>
                                </div>
                                <div className='down-content'>
                                    <span>
                                        There Are 200 Tickets Left For This Show
                                    </span>
                                    <h4>Golden Festival</h4>
                                    <ul>
                                        <li>
                                            <i className='fa fa-clock-o'></i>{' '}
                                            Sunday: 06:00 PM to 09:00 PM
                                        </li>
                                        <li>
                                            <i className='fa fa-map-marker'></i>
                                            789 Copacabana Beach, Rio de Janeiro
                                        </li>
                                    </ul>
                                    <div className='main-dark-button'>
                                        <Link to={'/ticket-details'}>
                                            Purchase Tickets
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ticket-item'>
                                <div className='thumb'>
                                    <img src='/images/ticket-03.jpg' alt='' />
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from <em>$65</em>
                                        </span>
                                    </div>
                                </div>
                                <div className='down-content'>
                                    <span>
                                        There Are 260 Tickets Left For This Show
                                    </span>
                                    <h4>Water Splash Festival</h4>
                                    <ul>
                                        <li>
                                            <i className='fa fa-clock-o'></i>{' '}
                                            Tuesday: 07:00 PM to 11:00 PM
                                        </li>
                                        <li>
                                            <i className='fa fa-map-marker'></i>
                                            456 Copacabana Beach, Rio de Janeiro
                                        </li>
                                    </ul>
                                    <div className='main-dark-button'>
                                        <Link to={'/ticket-details'}>
                                            Purchase Tickets
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ticket-item'>
                                <div className='thumb'>
                                    <img src='/images/ticket-04.jpg' alt='' />
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from <em>$20</em>
                                        </span>
                                    </div>
                                </div>
                                <div className='down-content'>
                                    <span>
                                        There Are 340 Tickets Left For This Show
                                    </span>
                                    <h4>Tiger Festival</h4>
                                    <ul>
                                        <li>
                                            <i className='fa fa-clock-o'></i>{' '}
                                            Thursday: 06:40 PM to 11:40 PM
                                        </li>
                                        <li>
                                            <i className='fa fa-map-marker'></i>
                                            123 Copacabana Beach, Rio de Janeiro
                                        </li>
                                    </ul>
                                    <div className='main-dark-button'>
                                        <Link to={'/ticket-details'}>
                                            Purchase Tickets
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ticket-item'>
                                <div className='thumb'>
                                    <img src='/images/ticket-05.jpg' alt='' />
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from <em>$30</em>
                                        </span>
                                    </div>
                                </div>
                                <div className='down-content'>
                                    <span>
                                        There Are 420 Tickets Left For This Show
                                    </span>
                                    <h4>Woodland Festival</h4>
                                    <ul>
                                        <li>
                                            <i className='fa fa-clock-o'></i>{' '}
                                            Wednesday: 06:00 PM to 09:00 PM
                                        </li>
                                        <li>
                                            <i className='fa fa-map-marker'></i>
                                            1122 Copacabana Beach, Rio de
                                            Janeiro
                                        </li>
                                    </ul>
                                    <div className='main-dark-button'>
                                        <Link to={'/ticket-details'}>
                                            Purchase Tickets
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='ticket-item'>
                                <div className='thumb'>
                                    <img src='/images/ticket-06.jpg' alt='' />
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from <em>$40</em>
                                        </span>
                                    </div>
                                </div>
                                <div className='down-content'>
                                    <span>
                                        There Are 520 Tickets Left For This Show
                                    </span>
                                    <h4>Winter Festival</h4>
                                    <ul>
                                        <li>
                                            <i className='fa fa-clock-o'></i>{' '}
                                            Saturday: 06:00 PM to 09:00 PM
                                        </li>
                                        <li>
                                            <i className='fa fa-map-marker'></i>
                                            220 Copacabana Beach, Rio de Janeiro
                                        </li>
                                    </ul>
                                    <div className='main-dark-button'>
                                        <Link to={'/ticket-details'}>
                                            Purchase Tickets
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='pagination'>
                                <ul>
                                    <li>
                                        <Link to={'#'}>Prev</Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>1</Link>
                                    </li>
                                    <li className='active'>
                                        <Link to={'#'}>2</Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>3</Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>Next</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TicketsIndex;
