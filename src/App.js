import logo from './logo.svg';
import './App.css';
import constant from "./random";
import CurrentDate from './components/CurrentDate';
import UserInfo from './components/UserInfo';
import UniqueId from './components/UniqueId';
import CoinToss from './components/CoinToss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We learn React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coin toss game: <CoinToss />
        </p>
        <CurrentDate />
        <UserInfo />
        <UniqueId />

        <p>The random constant is {constant}</p>

        <p>We practice editing my-app: 3rd part, props</p>

        <a
          className="App-link"
          href="https://github.com/zopaj63/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          My App 3 - GitHub repository
        </a>

      </header>
    </div>
  );
}

export default App;
