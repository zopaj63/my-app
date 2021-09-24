import logo from './logo.svg';
import './App.css';
import CoinToss from './components/CoinToss';
import LikeButton from './components/LikeButton';
import MessageForm from './components/MessageForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We learn React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <LikeButton />
          Coin toss game: <CoinToss />
        </p>

        <p>We practice editing my-app: 4th part, events</p>

        <MessageForm />

        <a
          className="App-link"
          href="https://github.com/zopaj63/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          My App 4 - GitHub repository
        </a>

      </header>
    </div>
  );
}

export default App;
