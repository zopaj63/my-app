import './App.css';
import Message from './components/Message';
// import { useState } from "react";


function App() {
  //  const [messageObject, setMessageObject] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>We learn React!</h1>

        <Message />


        <p>We practice editing my-app: 5th part, events</p>
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
