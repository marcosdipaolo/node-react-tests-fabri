import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../Shared/keyframes.module.css';

const DetailsIndex = () => {
    const [quantity, setQuantity] = React.useState(1);
    const [key, setKey] = React.useState(true);
    const addHandler = () => {
        if (quantity < 10) {
            setQuantity((prev) => prev + 1);
        }
    };
    const reduceHandler = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };
    const changeHandler = (e) => {
        if (e.target.value >= 1) {
            setQuantity(e.target.value);
        }
    };
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setKey(/* prev => !prev */ false);
        }, 500);
        return () => {
            setKey(/* prev => !prev */ true);
            clearTimeout(timer);
        };
    }, [quantity]);

    return (
        <React.Fragment>
            <div className='ticket-details-page'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='left-image'>
                                <img src='/images/ticket-details.jpg' alt='' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='right-content'>
                                <h4>Sunny Hill Festival</h4>
                                <span>240 Tickets still available</span>
                                <ul>
                                    <li>
                                        <i className='fa fa-clock-o'></i>{' '}
                                        Thursday 18:00 to 22:00
                                    </li>
                                    <li>
                                        <i className='fa fa-map-marker'></i>
                                        Copacabana Beach, Rio de Janeiro
                                    </li>
                                </ul>
                                <div className='quantity-content'>
                                    <div className='left-content'>
                                        <h6>Standard Ticket</h6>
                                        <p>$65 per ticket</p>
                                    </div>
                                    <div className='right-content'>
                                        <div className='quantity buttons_added'>
                                            <input
                                                type='button'
                                                value='-'
                                                className='minus'
                                                onClick={reduceHandler}
                                            />
                                            <input
                                                type='number'
                                                step='1'
                                                min='1'
                                                max='10'
                                                name='quantity'
                                                value={quantity}
                                                onChange={changeHandler}
                                                title='Qty'
                                                className={`input-text qty text ${
                                                    key && classes.keyframes
                                                }`}
                                                size='4'
                                            />
                                            <input
                                                onClick={addHandler}
                                                type='button'
                                                value='+'
                                                className='plus'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='total'>
                                    <h4 className={key ? classes.keyframes : ''}>
                                        Total: ${(quantity * 65).toFixed(2)}
                                    </h4>
                                    <div className='main-dark-button'>
                                        <Link to={'#'}>Purchase Tickets</Link>
                                    </div>
                                </div>
                                <div className='warn'>
                                    <p>
                                        *You Can Only Buy 10 Tickets For This
                                        Show
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DetailsIndex;
