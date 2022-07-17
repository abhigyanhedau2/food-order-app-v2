import React, { useState, useRef, useContext } from 'react';
import './MealItem.css';
import Card from '../UI/Card/Card';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {

    const [quantity, setQuantity] = useState(1);
    const quantityRef = useRef();

    const cartContext = useContext(CartContext);

    let ratingArr = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= props.rating)
            ratingArr.push(<i key={i} className="fa-solid fa-star"></i>)
        else
            ratingArr.push(<i key={i} className="fa-regular fa-star"></i>)
    }

    const onPlusHandler = () => {
        setQuantity(prev => prev === 5 ? 5 : prev + 1);
    }

    const onMinusHandler = () => {
        setQuantity(prev => prev === 1 ? 1 : prev - 1);
    }

    const addButtonClickHandler = (event) => {
        const enteredQuantity = quantityRef.current.value;
        const enteredQuantityInNumber = +enteredQuantity;

        cartContext.addItem({
            id: props.id,
            name: props.name,
            imgurl: props.imgurl,
            quantity: enteredQuantityInNumber,
            price: props.price
        })
    }

    return (
        <Card className="meal-item-wrapper">
            <div className="meal-item-image-wrapper">
                <img src={props.imgurl} alt="" />
            </div>
            <div className="meal-item-content">
                <div className="meal-item-details-wrapper">
                    <h1>{props.name}</h1>
                    <p><i>{props.desc}</i></p>
                    <div className="rating">
                        <span>Rating: </span>{ratingArr}
                    </div>
                </div>
                <div className="meal-item-price-wrapper">
                    <span className='price'>Price: <span>Rs. {props.price} /-</span></span>
                </div>
                <div className="actions-wrapper">
                    <div className="inputs">
                        <button className='quantity-btn' onClick={onMinusHandler}>-</button>
                        <input ref={quantityRef} type="number" name="item-quantity" id='id1' min={1} max={5} value={quantity} readOnly />
                        <button className='quantity-btn' onClick={onPlusHandler}>+</button>
                    </div>
                    <div className="add-btn">
                        <button onClick={addButtonClickHandler}>Add + </button>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default MealItem