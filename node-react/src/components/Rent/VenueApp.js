import React from 'react';

const VenueApp = () => {
    return (
        <React.Fragment>
            <div className='rent-venue-application'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='heading-text'>
                                <h4>Reservation Application</h4>
                            </div>
                            <div className='contact-form'>
                                <form id='contact' action='' method='post'>
                                    <div className='row'>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='name'
                                                    type='text'
                                                    id='name'
                                                    placeholder='Your Name*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='email'
                                                    type='text'
                                                    id='email'
                                                    pattern='[^ @]*@[^ @]*'
                                                    placeholder='Your Email*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='phone-number'
                                                    type='text'
                                                    id='phone-number'
                                                    placeholder='Phone Number*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='company-organization'
                                                    type='text'
                                                    id='company-organization'
                                                    placeholder='Company / Organization*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='venue-requested'
                                                    type='text'
                                                    id='venue-requested'
                                                    placeholder='Venue Requested*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='type-event'
                                                    type='text'
                                                    id='type-event'
                                                    placeholder='Type Of Event*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='date-requested-first'
                                                    type='text'
                                                    id='date-requested-first'
                                                    placeholder='Date Requested (Primary Date)*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <fieldset>
                                                <input
                                                    name='date-requested-second'
                                                    type='text'
                                                    id='date-requested-second'
                                                    placeholder='Date Requested (Secondary Date)*'
                                                    required=''
                                                />
                                            </fieldset>
                                        </div>
                                        <div className='col-lg-12'>
                                            <fieldset>
                                                <textarea
                                                    name='about-event-hosting'
                                                    rows='6'
                                                    id='about-event-hosting'
                                                    placeholder='About The Event You Are Hosting'
                                                    required=''
                                                ></textarea>
                                            </fieldset>
                                        </div>
                                        <div className='col-lg-12'>
                                            <fieldset>
                                                <button
                                                    type='submit'
                                                    id='form-submit'
                                                    className='main-dark-button'
                                                >
                                                    Submit Request
                                                </button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default VenueApp;
