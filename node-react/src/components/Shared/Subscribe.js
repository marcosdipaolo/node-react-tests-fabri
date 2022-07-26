const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <h4>Subscribe Our Newsletter:</h4>
                    </div>
                    <div className='col-lg-8'>
                        <form id='subscribe' action='' method='get'>
                            <div className='row'>
                                <div className='col-lg-9'>
                                    <fieldset>
                                        <input
                                            name='email'
                                            type='text'
                                            id='email'
                                            pattern='[^ @]*@[^ @]*'
                                            placeholder='Your Email Address'
                                            required=''
                                        />
                                    </fieldset>
                                </div>
                                <div className='col-lg-3'>
                                    <fieldset>
                                        <button
                                            type='submit'
                                            id='form-submit'
                                            className='main-dark-button'
                                        >
                                            Submit
                                        </button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
