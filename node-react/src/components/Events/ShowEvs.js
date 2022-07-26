import React from 'react';

const ShowEvs = (props) => {
    return (
        <React.Fragment>
            <div className='shows-events-schedule'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='section-heading'>
                                <h2>Event Listing</h2>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            {props.details.length > 0 ? (
                                <ul>
                                    {props.details.map((e) => {
                                        return (
                                            <li>
                                                <div className='row'>
                                                    <div className='col-lg-3'>
                                                        <div className='title'>
                                                            <h4>{e.title} </h4>
                                                            <span>
                                                                {' '}
                                                                {e.tickets}{' '}
                                                                Tickets
                                                                Available
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <div className='time'>
                                                            <span>
                                                                <i className='fa fa-clock-o'></i>{' '}
                                                                {e.date}
                                                                <br /> {e.hour}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <div className='place'>
                                                            <span>
                                                                <i className='fa fa-map-marker'></i>{' '}
                                                                {e.city}, <br />{' '}
                                                                {e.place}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3'>
                                                        <div className='main-dark-button'>
                                                            <a href='/ticket-details'>
                                                                Purchase Tickets
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <h1 className='d-flex justify-content-center p-3'>
                                    No events to display
                                </h1>
                            )}
                        </div>
                        <div className='col-lg-12'>
                            <div className='pagination'>
                                <ul>
                                    <li>
                                        <a href='#'>Prev</a>
                                    </li>
                                    <li>
                                        <a href='#'>1</a>
                                    </li>
                                    <li className='active'>
                                        <a href='#'>2</a>
                                    </li>
                                    <li>
                                        <a href='#'>3</a>
                                    </li>
                                    <li>
                                        <a href='#'>Next</a>
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

export default ShowEvs;
