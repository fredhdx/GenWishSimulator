import wish from './wish.webp';
import React, { useState } from 'react';
import './App.css';

import WishDisplayCard from './WishDisplayCard';

import Character from './Character';

const makeWish = ()=>{
  const banner = ['Banet', 'Ayato', 'Cyno', 'Diona', 'Xingqiu'];
  return banner[Math.floor(Math.random() * (banner.length - 1))];
}

function App() {

  // state hooks
  const [currentWish, setCurrentWish] = useState(makeWish());

  const handleWishButtonClick = () => { setCurrentWish(makeWish()); };

  const wishInputBox = <input type='text' placeholder='Dream here' autoComplete />

  return (
    // root level must be a single element
    <div className="App">
      <header className="App-header">
        <img src={wish} className='App-logo' alt='wish' />
        <p>Genshin Wish Simulator</p>
        <a
          className="App-link"
          href="https://genshin.hoyoverse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch Game
        </a>

        <WishDisplayCard wish={currentWish} />
        <button onClick={handleWishButtonClick}>Wish</button>
        <p>{wishInputBox}</p>
      </header>
      <Character />
    </div>
  );
}

export default App;
