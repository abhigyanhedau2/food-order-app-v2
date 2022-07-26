import React from 'react';
import './OrderPlacedModal.css';
import greenTick from '../../assets/order-placed.gif';

const OrderPlacedModal = () => {
    return (
        <div className='order-placed-backdrop'>
            <div className="order-placed-container">
                <div className="gif-wrapper">
                    <img src={greenTick} alt="" />
                </div>
                <div className="order-placed-content">
                    <h1>Order Placed!</h1>
                    <p>Delicious Food is on the way!</p>
                </div>
            </div>
        </div>
    )
}

export default OrderPlacedModal