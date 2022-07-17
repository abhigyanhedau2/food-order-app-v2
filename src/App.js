import React, { useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header.js/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

const App = () => {

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const toggleCartHandler = () => {
		setModalIsOpen(prev => !prev);
		document.body.classList.toggle('modal-open');
	}

	const hideCartHandler = () => {
		setModalIsOpen(false);
		document.body.classList.remove('modal-open');
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<CartProvider>
			<Header toggleCartHandler={toggleCartHandler} />
			<Meals />
			{modalIsOpen && <Cart hideCartHandler={hideCartHandler} />}
		</CartProvider>
	)
}

export default App;