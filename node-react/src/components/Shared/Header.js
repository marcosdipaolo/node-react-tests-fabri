import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <div id='js-preloader' className='js-preloader'>
                <div className='preloader-inner'>
                    <span className='dot'></span>
                    <div className='dots'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className='pre-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-6'>
                            <span>Hey! The Show is Starting in 15 Days.</span>
                        </div>
                        <div className='col-lg-6 col-sm-6'>
                            <div className='text-button'>
                                <Link to={'/rent-venue'}>
                                    Contact Us Now!
                                    <i className='fa fa-arrow-right'></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className='header-area header-sticky'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <nav className='main-nav'>
                                <Link to={'/'} className='logo'>
                                    Art<em>Fabric</em>
                                </Link>
                                <ul className='nav'>
                                    <li>
                                        <Link to={'/'}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={'/about'}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to={'/rent-venue'}>Rent Venue</Link>
                                    </li>
                                    <li>
                                        <Link to={'/shows-events'}>
                                            Shows & Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/tickets'}>Tickets</Link>
                                    </li>
                                </ul>
                                <a className='menu-trigger'>
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;
