import React, { useContext } from 'react';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import './Cart.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    const addItemToCartHandler = (item) => {
        cartContext.addItem({ ...item, quantity: 1 });
    }

    const removeItemFromCartHandler = (id) => {
        cartContext.removeItem(id);
    }

    const cartItemList = cartContext.items.map(item => {
        return <CartItem key={item.id} id={item.id} imgurl={item.imgurl} name={item.name} quantity={item.quantity} price={item.price} addItemToCartHandler={addItemToCartHandler.bind(null, item)} removeItemFromCartHandler={removeItemFromCartHandler.bind(null, item.id)} />
    });

    return (
        <Modal className={cartContext.items.length ? "cart-wrapper" : ''} hideModalHandler={props.hideCartHandler}>
            {!cartContext.items.length && <p style={{ textAlign: 'center' }}>We can't wait to serve you! <br /> Add some dishes into the cart so we can deliver them to you in no time.</p>}
            <div className={cartContext.items.length ? "cart-items" : ''}>
                {cartContext.items.length ? cartItemList : ''}
            </div>
            {cartContext.items.length ? <div className="cart-footer">
                <div className="total-price">
                    <h1><span>Total Price: </span><span>Rs. {cartContext.totalPrice}</span></h1>
                </div>
                <div className="order-actions">
                    <button className='order-btn btn--alt' onClick={props.hideCartHandler}>Cancel</button>
                    <button className='order-btn' onClick={() => { props.hideCartHandler(); cartContext.emptyCart(); props.orderIsPlacedHandler() }}>Order</button>
                </div>
            </div> : ''}
        </Modal>
    )
}

export default Cart