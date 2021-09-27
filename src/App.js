import logo from './logo.svg';
import './App.css';
import CoinToss from './components/CoinToss';
import LikeButton from './components/LikeButton';
import MessageForm from './components/MessageForm';
import { useState } from "react";


function App() {
  const [messageObject, setMessageObject] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>We learn React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <LikeButton />
        <p>
          Coin toss game: <CoinToss />
        </p>

        {messageObject !== null && <div>{messageObject.message}</div>}
        <MessageForm onSendMessage={setMessageObject} />


        <p>We practice editing my-app: 4th part, events</p>
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
