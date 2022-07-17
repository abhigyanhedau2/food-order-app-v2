import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    addItem: () => { },
    removeItem: () => { },
    emptyCart: () => { }
});

export default CartContext;