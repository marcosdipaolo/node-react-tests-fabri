import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='address'>
                                <h4>Sunny Hill Festival Address</h4>
                                <span>
                                    5 College St NW, <br />
                                    Norcross, GA 30071
                                    <br />
                                    United States
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='links'>
                                <h4>Useful Links</h4>
                                <ul>
                                    <li>
                                        <Link to={'#'}>Info</Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>Venues</Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>Guides</Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>Videos</Link>
                                    </li>
                                    <li>
                                        <Link to={'#'}>Outreach</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='hours'>
                                <h4>Open Hours</h4>
                                <ul>
                                    <li>Mon to Fri: 10:00 AM to 8:00 PM</li>
                                    <li>Sat - Sun: 11:00 AM to 4:00 PM</li>
                                    <li>Holidays: Closed</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='under-footer'>
                                <div className='row'>
                                    <div className='col-lg-6 col-sm-6'>
                                        <p>São Conrado, Rio de Janeiro</p>
                                    </div>
                                    <div className='col-lg-6 col-sm-6'>
                                        <p className='copyright'>
                                            Copyright 2021 ArtXibition Company
                                            <br />
                                            Design:
                                            <Link
                                                rel='nofollow'
                                                to={'https://www.tooplate.com'}
                                                target='_parent'
                                            >
                                                Tooplate
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='sub-footer'>
                                <div className='row'>
                                    <div className='col-lg-3'>
                                        <div className='logo'>
                                            <Link to={'/'}>
                                                <span>
                                                    <em>Art</em>Fabric
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='menu'>
                                            <ul>
                                                <li>
                                                    <Link
                                                        to={'/'}
                                                        className='active'
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/about'}>
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/rent-venue'}>
                                                        Rent Venue
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/shows-events'}>
                                                        Shows & Events
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/tickets'}>
                                                        Tickets
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='social-links'>
                                            <ul>
                                                <li>
                                                    <Link to={'#'}>
                                                        <i className='fa fa-twitter'></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'#'}>
                                                        <i className='fa fa-facebook'></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'#'}>
                                                        <i className='fa fa-behance'></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'#'}>
                                                        <i className='fa fa-instagram'></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
