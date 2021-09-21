//import React from "react";
import logo from './logo.svg';
import './App.css';
import constant from "./random";
import CurrentDate from './components/CurrentDate';
import UserInfo from './components/UserInfo';
import UniqueId from './components/UniqueId';
import CoinToss from './components/CoinToss';
//import GreetComponent from "./components/GreetComponent";

//function Greet({ greeting, name, children }) {
//  console.log(`${greeting} ${name}!`);
//  return (
//    <div>
//      <div>
//        {greeting} {name}!
//      </div>
//      {children}
//    </div>
//  );
//}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>We learn React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coin toss game: <CoinToss />
        </p>

        <div>Lorem</div>
        <div>ipsum!</div>

        <CurrentDate />
        <UserInfo />
        <UniqueId />

        <p>The random constant is <span style={{ color: "lightGreen" }}> {constant}</span></p>

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
