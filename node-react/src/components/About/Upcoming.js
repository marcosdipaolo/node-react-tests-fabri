const Upcomming = () => {
    return (
        <div className='about-upcoming-shows'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-9'>
                        <h2>About The Upcoming Show</h2>
                        <p>
                            ArtXibition Event Template is brought to you by
                            Tooplate website and it included total 7 HTML pages.
                            These are <a href='/'>Homepage</a>,{' '}
                            <a href='/about'>About</a>,
                            <a href='/rent-venue'>Rent a venue</a>,{' '}
                            <a href='/shows-events'>shows &amp; events</a>,
                            <a href='/event-details'>event details</a>,{' '}
                            <a href='/tickets'>tickets</a>, and{' '}
                            <a href='/ticket-details'>ticket details</a>. You
                            can feel free to modify any page as you like. If you
                            have any question, please visit our{' '}
                            <a
                                href='https://www.tooplate.com/contact'
                                target='_blank'
                            >
                                Contact page
                            </a>
                            .
                        </p>
                        <h4>Items That Are Restricted</h4>
                        <ul>
                            <li>* Flash Cameras</li>
                            <li>* Food & Drinks</li>
                            <li>* Any kind of flashy objects</li>
                        </ul>
                        <h4>Directions & Car Parking</h4>
                        <p>
                            Art party vegan mixtape before they sold out
                            raclette, cliche banh mi mumblecore ugh hell of. Art
                            party kene ugh umami, readymade tbh small batch
                            austin distillery aesthetic.Shoreditch narwhal
                            livers edge actually godar affogato sartorial
                            waistcoat ugh raw denim stumptown.
                        </p>
                        <div className='text-button'>
                            <a href='/event-details'>
                                Need Directions?{' '}
                                <i className='fa fa-arrow-right'></i>
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='next-shows'>
                            <h4>
                                <i className='fa fa-clock-o'></i> Get The Next
                                Show Tickets
                            </h4>
                            <ul>
                                <li>
                                    <h5>Copacabana Festival</h5>
                                    <span>
                                        Sep 24 Fri
                                        <br />
                                        08:30 AM - 11:00 PM
                                    </span>
                                    <div className='icon-button'>
                                        <a href='/ticket-details'>
                                            <i className='fa fa-shopping-cart'></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <h5>Rock Music Festival</h5>
                                    <span>
                                        Sep 22 Wed
                                        <br />
                                        11:00 AM - 09:00 PM
                                    </span>
                                    <div className='icon-button'>
                                        <a href='/ticket-details'>
                                            <i className='fa fa-shopping-cart'></i>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <h5>Water Splash Festival</h5>
                                    <span>
                                        July 18 Friday
                                        <br />
                                        10:00 AM - 11:00 PM
                                    </span>
                                    <div className='icon-button'>
                                        <a href='/ticket-details'>
                                            <i className='fa fa-shopping-cart'></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcomming;
