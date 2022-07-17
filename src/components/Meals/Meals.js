import React, { useState, useEffect } from 'react';
import './Meals.css';
import foodItemsArr from '../../utility/food-data';
import MealItem from './MealItem';

const Meals = () => {

    const [category, setCategory] = useState('all');
    const [menuItems, setMenuItems] = useState(foodItemsArr);

    // Set buttonNames
    const btnNamesArr = [...new Set(foodItemsArr.map(item => item.category))];

    // Set btn colors in order
    const bntClrArr = ['rgb(0, 194, 0)', 'orange', 'green', 'brown', 'red', 'rgb(245, 245, 118)', 'palevioletred', 'lightblue'];
    let clrArrIdx = 0;

    // Merge both the arrays
    const btnNameAndClrArr = btnNamesArr.map(item => {
        return {
            name: item,
            clr: bntClrArr[clrArrIdx++]
        }
    })


    // Creating button component list from btnNameAndClrArr
    let buttonComponentList = btnNameAndClrArr.map(item => {
        return <button key={item.name} className='btn' onClick={(event) => { onClickHandler(event, item.name) }} style={{ "--clickBgColor": item.clr }}>{item.name.toUpperCase()}</button>
    })

    // Adding All Button
    buttonComponentList.unshift(<button key='all' id='all-btn' className='btn' onClick={(event) => { onClickHandler(event, 'all') }} style={{ "--clickBgColor": '#000' }}>ALL DISHES</button>)

    // ComponentDidMount, after component is mounted, add active class to 'All Dishes' button
    useEffect(() => {
        document.getElementById('all-btn').classList.add('active');
    }, [])

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    useEffect(() => {
        let updatedMenuItems;

        if (category === 'all') {
            const shuffledArr = [...foodItemsArr];
            updatedMenuItems = shuffle(shuffledArr);
        } else {
            updatedMenuItems = foodItemsArr.filter(item => item.category === category)
        }

        setMenuItems(updatedMenuItems);

    }, [category]);

    const onClickHandler = (event, enteredCategory) => {
        const buttonArr = [...document.getElementsByClassName('btn')];

        buttonArr.forEach(item => {
            if (item.classList.contains('active'))
                item.classList.remove('active');
        })

        event.currentTarget.classList.add('active');

        setCategory(enteredCategory);
    }

    // Converting the items to meal components
    const mealItemComponentList = menuItems.map(item => {
        return <MealItem key={item.id} imgurl={item.imgurl} name={item.name} desc={item.desc} rating={item.rating} price={item.price} />
    })

    return (
        <div className='meals-wrapper'>
            <h1>Today's Meals</h1>
            <hr />
            <div className="button-row">
                {buttonComponentList}
            </div>
            <div className="meal-items">
                {mealItemComponentList}
            </div>
        </div>
    )
}

export default Meals