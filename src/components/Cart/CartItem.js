import React from 'react';
import './CartItem.css';

const CartItem = (props) => {

    return (
        <div className='cart-item-wrapper'>
            <div className="cart-item-content">
                <div className="cart-item-image-and-details">
                    <div className="cart-item-image-wrapper">
                        <img src={props.imgurl} alt="" />
                    </div>
                    <div className="cart-item-details">
                        <h2>{props.name} <span>x{props.quantity}</span></h2>
                    </div>
                </div>
                <div className="actions">
                    <div className="price">
                        <h3>Rs. {props.price}</h3>
                    </div>
                    <div className="quantity">
                        <button onClick={props.removeItemFromCartHandler}>-</button>
                        <button onClick={props.addItemToCartHandler}>+</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default CartItem