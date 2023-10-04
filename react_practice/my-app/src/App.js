//import logo from './logo.svg';
import './App.css';
import wish from './wish.webp';
import WishDisplayCard from './wishDisplayCard';

// this is jsx: babel converts any HTML tags into React.createElement() calls
function App() {
  // todo: update display
  const makeWish = ()=>{
    const banner = ['Banet', 'Ayato', 'Cyno', 'Diona', 'Xingqiu']
    return banner[Math.floor(Math.random() * (banner.length - 1))]
  }

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

        <WishDisplayCard wish={makeWish()} />
        <button onClick={makeWish}>Wish</button>

        <p>
          {wishInputBox}
        </p>
      </header>
    </div>
  );
}

export default App;
