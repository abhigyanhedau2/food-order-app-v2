import React, { useState, useContext, useEffect } from 'react';
import './CartButton.css';
import CartContext from '../../store/cart-context';

const CartButton = (props) => {

    const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);

    const cartContext = useContext(CartContext)

    useEffect(() => {

        if (cartContext.items.length !== 0)
            setbtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setbtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])


    return (
        <button className={`cart-button ${btnIsHighlighted ? 'bump' : ''}`} onClick={props.toggleCartHandler}>
            <span>{btnIsHighlighted ? '+1' : 'Cart'}</span>
            <i className="fa-solid fa-cart-shopping"></i>
        </button>
    )
}

export default CartButton