const CommingEvents = () => {
    <div className='coming-events'>
        <div className='left-button'>
            <div className='main-white-button'>
                <a href='/shows-events'>Discover More</a>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='event-item'>
                        <div className='thumb'>
                            <a href='/event-details'>
                                <img src='/images/event-01.jpg' alt='' />
                            </a>
                        </div>
                        <div className='down-content'>
                            <a href='/event-details'>
                                <h4>Radio City Musical Hall</h4>
                            </a>
                            <ul>
                                <li>
                                    <i className='fa fa-clock-o'></i> Tuesday:
                                    15:30-19:30
                                </li>
                                <li>
                                    <i className='fa fa-map-marker'></i>
                                    Copacabana Beach, Rio de Janeiro
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='event-item'>
                        <div className='thumb'>
                            <a href='/event-details'>
                                <img src='/images/event-02.jpg' alt='' />
                            </a>
                        </div>
                        <div className='down-content'>
                            <a href='/event-details'>
                                <h4>Madison Square Garden</h4>
                            </a>
                            <ul>
                                <li>
                                    <i className='fa fa-clock-o'></i> Wednesday:
                                    08:00-14:00
                                </li>
                                <li>
                                    <i className='fa fa-map-marker'></i>
                                    Copacabana Beach, Rio de Janeiro
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='event-item'>
                        <div className='thumb'>
                            <a href='/event-details'>
                                <img src='/images/event-03.jpg' alt='' />
                            </a>
                        </div>
                        <div className='down-content'>
                            <a href='/event-details'>
                                <h4>Royce Hall</h4>
                            </a>
                            <ul>
                                <li>
                                    <i className='fa fa-clock-o'></i> Thursday:
                                    09:00-23:00
                                </li>
                                <li>
                                    <i className='fa fa-map-marker'></i>
                                    Copacabana Beach, Rio de Janeiro
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default CommingEvents;
