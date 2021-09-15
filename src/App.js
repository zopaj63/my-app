import logo from './logo.svg';
import './App.css';
import * as dayjs from "dayjs";


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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Učimo React
        </a>
      </header>
    </div>
  );
}

export default App;
