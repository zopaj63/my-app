import './App.css';
import MessageForm from "./components/MessageForm";
import Message from './components/Message';
import { useState } from "react";


function App() {
  const [messageObject, setMessageObject] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Chat App</h1>

        {messageObject !== null && (
          <Message
            isImportant={messageObject.isImportant}
            message={messageObject.message}
            title={messageObject.title}
          />
        )}

        <MessageForm onSendMessage={setMessageObject} />

        <a
          className="App-link"
          href="https://github.com/zopaj63/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          My App 5 - GitHub repository
        </a>

      </header>
    </div>
  );
}

export default App;
