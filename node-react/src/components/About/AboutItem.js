const AboutItem = () => {
    return (
        <div className='about-item'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='left-image'>
                            <img
                                src='/images/about-image.jpg'
                                alt='party time'
                            />
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='right-content'>
                            <div className='about-map-image'>
                                <img
                                    src='/images/about-map-image.jpg'
                                    alt='party location'
                                />
                            </div>
                            <div className='down-content'>
                                <h4>Radio City Musical Hall</h4>
                                <ul>
                                    <li>August 24 Friday</li>
                                    <li>09:30 AM - 07:00 PM</li>
                                </ul>
                                <span>
                                    <i className='fa fa-ticket'></i> Tickets
                                    Starting From $34.00
                                </span>
                                <div className='main-dark-button'>
                                    <a href='/ticket-details'>
                                        Purchase Tickets
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutItem;
