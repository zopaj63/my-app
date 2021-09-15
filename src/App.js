import logo from './logo.svg';
import './App.css';
import { getCurrentDate, getID } from "./helpers";
import { getRandomName, getRandomColor } from "./random";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uvod u React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Danas je {getCurrentDate()}</p>

        <p>Ime: {getRandomName()} i boja: {getRandomColor()}</p>

        <p>Vježbamo uređivati my-app React aplikaciju!</p>
        <a
          className="App-link"
          href="https://github.com/zopaj63/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klik na GitHub my-app repozitorij
        </a>
        <p>Vaš jedinstveni ID je {getID()}</p>
      </header>
    </div>
  );
}

export default App;
