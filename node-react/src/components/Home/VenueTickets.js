const VenueTickets = () => {
    return (
        <div className='venue-tickets'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='section-heading'>
                            <h2>Our Venues & Tickets</h2>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='venue-item'>
                            <div className='thumb'>
                                <img src='/images/venue-01.jpg' alt='' />
                            </div>
                            <div className='down-content'>
                                <div className='left-content'>
                                    <div className='main-white-button'>
                                        <a href='/ticket-details'>
                                            Purchase Tickets
                                        </a>
                                    </div>
                                </div>
                                <div className='right-content'>
                                    <h4>Radio City Musical Hall</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        vinzi iscing elit, sed doers kontra.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className='fa fa-sitemap'></i>250
                                        </li>
                                        <li>
                                            <i className='fa fa-user'></i>500
                                        </li>
                                    </ul>
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from
                                            <em>$45</em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='venue-item'>
                            <div className='thumb'>
                                <img src='/images/venue-02.jpg' alt='' />
                            </div>
                            <div className='down-content'>
                                <div className='left-content'>
                                    <div className='main-white-button'>
                                        <a href='/ticket-details'>
                                            Purchase Tickets
                                        </a>
                                    </div>
                                </div>
                                <div className='right-content'>
                                    <h4>Madison Square Garden</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        vinzi iscing elit, sed doers kontra.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className='fa fa-sitemap'></i>450
                                        </li>
                                        <li>
                                            <i className='fa fa-user'></i>650
                                        </li>
                                    </ul>
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from
                                            <em>$55</em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='venue-item'>
                            <div className='thumb'>
                                <img src='/images/venue-03.jpg' alt='' />
                            </div>
                            <div className='down-content'>
                                <div className='left-content'>
                                    <div className='main-white-button'>
                                        <a href='/ticket-details'>
                                            Purchase Tickets
                                        </a>
                                    </div>
                                </div>
                                <div className='right-content'>
                                    <h4>Royce Hall</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        vinzi iscing elit, sed doers kontra.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className='fa fa-sitemap'></i>450
                                        </li>
                                        <li>
                                            <i className='fa fa-user'></i>750
                                        </li>
                                    </ul>
                                    <div className='price'>
                                        <span>
                                            1 ticket
                                            <br />
                                            from
                                            <em>$65</em>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenueTickets;
