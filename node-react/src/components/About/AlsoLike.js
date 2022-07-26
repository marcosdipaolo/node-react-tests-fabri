import React from 'react';

const AlsoLike = (props) => {
    return (
        <React.Fragment>
            {props.events.length > 0 ? (
                <div className='also-like'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <h2>You Might Also Like...</h2>
                            </div>
                            {props.events.map((e) => {
                                return (
                                    <div key={e.title} className='col-lg-4'>
                                        <div className='like-item'>
                                            <div className='thumb'>
                                                <a href='/event-details'>
                                                    <img
                                                        src={e.img}
                                                        alt=''
                                                    />
                                                </a>
                                                <div className='icons'>
                                                    <ul>
                                                        <li>
                                                            <a href='/event-details'>
                                                                <i className='fa fa-arrow-right'></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/ticket-details'>
                                                                <i className='fa fa-ticket'></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='down-content'>
                                                <span>{e.upcomming}</span>
                                                <a href='/event-details'>
                                                    <h4>{e.title}</h4>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className='d-flex justify-content-center p-3'>
                    No events to display
                </h1>
            )}
        </React.Fragment>
    );
};
export default AlsoLike;
