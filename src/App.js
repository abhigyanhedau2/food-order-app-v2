import React from 'react'
import Header from './components/Header.js/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Meals />
    </div>
  )
}

export default App;