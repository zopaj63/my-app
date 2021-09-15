import logo from './logo.svg';
import './App.css';
import * as dayjs from "dayjs";
import { nanoid } from 'nanoid';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uvod u React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Danas je {dayjs().format('MMMM/DD/YYYY, HH:mm:ss')}</p>
        <p>
          Vježbamo uređivati my-app React aplikaciju!
        </p>
        <a
          className="App-link"
          href="https://github.com/zopaj63/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klik na GitHub my-app repozitorij
        </a>
        <p>Vaš jedinstveni ID je {nanoid()}</p>
      </header>
    </div>
  );
}

export default App;
