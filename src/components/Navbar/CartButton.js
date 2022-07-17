import React from 'react';
import './CartButton.css';

const CartButton = () => {
    return (
        <button className='cart-button'>
            <span>Cart</span>
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
    )
}

export default CartButton