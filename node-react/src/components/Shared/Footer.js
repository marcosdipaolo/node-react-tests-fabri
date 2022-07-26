import React from "react";

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
                                        <a href='#'>Info</a>
                                    </li>
                                    <li>
                                        <a href='#'>Venues</a>
                                    </li>
                                    <li>
                                        <a href='#'>Guides</a>
                                    </li>
                                    <li>
                                        <a href='#'>Videos</a>
                                    </li>
                                    <li>
                                        <a href='#'>Outreach</a>
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
                                            <a
                                                rel='nofollow'
                                                href='https://www.tooplate.com'
                                                target='_parent'
                                            >
                                                Tooplate
                                            </a>
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
                                            <span>
                                                Art<em>Fabric</em>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='menu'>
                                            <ul>
                                                <li>
                                                    <a href='/' className='active'>
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/about'>
                                                        About Us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/rent-venue'>
                                                        Rent Venue
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/shows-events'>
                                                        Shows & Events
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='/tickets'>
                                                        Tickets
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-lg-3'>
                                        <div className='social-links'>
                                            <ul>
                                                <li>
                                                    <a href='#'>
                                                        <i className='fa fa-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='#'>
                                                        <i className='fa fa-facebook'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='#'>
                                                        <i className='fa fa-behance'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href='#'>
                                                        <i className='fa fa-instagram'></i>
                                                    </a>
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