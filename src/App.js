import React, { useState, useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header.js/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Footer from './components/Footer/Footer';
import './App.css';
import OrderPlacedModal from './components/OrderPlacedModal/OrderPlacedModal';

const App = () => {

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [orderIsPlaced, setOrderIsPlaced] = useState(false);

	const toggleCartHandler = () => {
		setModalIsOpen(prev => !prev);
		document.body.classList.toggle('modal-open');
	}

	const hideCartHandler = () => {
		setModalIsOpen(false);
		document.body.classList.remove('modal-open');
	}

	const orderIsPlacedHandler = () => {
		setOrderIsPlaced(true);
		document.body.classList.toggle('modal-open');

		setTimeout(() => {
			setOrderIsPlaced(false);
			document.body.classList.remove('modal-open');
		}, 2200);
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<CartProvider className="app-wrapper">
			<Header toggleCartHandler={toggleCartHandler} />
			<Meals />
			{modalIsOpen && <Cart hideCartHandler={hideCartHandler} orderIsPlacedHandler={orderIsPlacedHandler} />}
			{orderIsPlaced && <OrderPlacedModal />}
			<Footer />
		</CartProvider>
	)
}

export default App;