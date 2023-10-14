import wish from './wish.webp';
import React, { useState } from 'react';
import './App.css';

import WishCard from './WishCard'; // state class
import Character from './Character';

function App() {
  // state hooks
  // const [currentWish, setCurrentWish] = useState(makeWish());
  // const handleWishButtonClick = () => { setCurrentWish(makeWish()); };

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

        <WishCard/>
        <p>{wishInputBox}</p>
      </header>
      <Character />
    </div>
  );
}

export default App;
