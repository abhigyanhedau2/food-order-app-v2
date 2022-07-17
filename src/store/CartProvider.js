import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (prevState, action) => {

    if (action.type === 'ADD_ITEM') {

        // Updating the total price
        const newTotalPrice = prevState.totalPrice + (action.item.quantity * action.item.price);

        // Finding the index of the item if it exists in the cart
        // If item is not present it'll return false
        const existingCartItemIndex = prevState.items.findIndex(item => item.id === action.item.id);

        // Save the existing item in a variable
        const existingItem = prevState.items[existingCartItemIndex];

        let updatedItems;

        // If findIndex() has not returned false, it means the item is in the array
        if (existingItem) {

            // Temporary variable to update the item
            const updatedItem = { ...existingItem, quantity: existingItem.quantity + action.item.quantity };

            updatedItems = [...prevState.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        else {
            updatedItems = prevState.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: newTotalPrice
        }
    }

    if (action.type === 'REMOVE_ITEM') {

        // Get the index of the item to be removed
        const existingCartItemIndex = prevState.items.findIndex(item => item.id === action.id);

        // Save the the item in a variable
        const existingItem = prevState.items[existingCartItemIndex];

        // Update the total price
        const updatedTotalPrice = prevState.totalPrice - existingItem.price;

        let updatedItems;

        // If only one item was present, remove that item from the cartItems array
        if (existingItem.quantity === 1) {
            updatedItems = prevState.items.filter(item => item.id !== action.id);
        }

        // Else, decrease the amount and update in array as well
        else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...prevState.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        };
    }

    if (action.type === 'EMPTY_CART') {
        return {
            items: [],
            totalPrice: 0
        }
    }

    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item: item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id: id
        })
    }

    const emptyTheCartHandler = () => {
        dispatchCartAction({
            type: 'EMPTY_CART'
        })
    }

    const cartContext = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        emptyCart: emptyTheCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider