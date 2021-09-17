import logo from './logo.svg';
import './App.css';
import { getId } from './helpers';
import CurrentDate from './components/CurrentDate';
import UserInfo from './components/UserInfo';
import UniqueId from './components/UniqueId';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uvod u React</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <CurrentDate />

        <UserInfo />

        <UniqueId />

        <p>Vježbamo uređivati my-app React aplikaciju!</p>
        <a
          className="App-link"
          href="https://github.com/zopaj63/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klik na GitHub my-app repozitorij
        </a>
        <p>Tvoj jedinstveni ID je {getId()}</p>
      </header>
    </div>
  );
}

export default App;
