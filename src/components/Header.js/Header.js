import React from 'react';
import Navbar from '../Navbar/Navbar';
import Parallax from '../UI/Parallax/Parallax';
import './Header.css';
import backgroundimg from '../../assets/background.jpg'

const Header = () => {
    return (
        <Parallax className='header-wrapper parallax-wrapper' imgurl={backgroundimg}>
            <Navbar />
            <div className="title">
                <div className="title-heading">
                    <h1>Welcome to</h1>
                    <h1>Chef on the Web</h1>
                </div>
                <div className="title-para">
                    <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
                    <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
                </div>
            </div>
        </Parallax>
    )
}

export default Header