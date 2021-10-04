import './App.css';
import MessageForm from "./components/MessageForm";
import Message from './components/Message';
import { useContext, useState } from "react";
import { getId } from './helpers';
import AppContext from './contexts/AppContext';

const menus = ["prvi", "drugi", "treći", "četvrti"];
const menuElements = menus.map(menu => ({ key: getId(), value: menu })
);

function App() {
  const appContext = useContext(AppContext);
  console.log(appContext);

  const [messageObjects, setMessageObjects] = useState([]);

  const handleSendMessage = (messageObject) => {
    setMessageObjects([...messageObjects, messageObject]);
  }

  return (
    <div className="App">

      <div className="menu">
        {menuElements.map((menuElement) =>
          <button key={menuElement.key}>
            {menuElement.value}
          </button>
        )}
      </div>

      <header className="App-header">

        <h1>My Chat App {appContext.language}</h1>

        {messageObjects.length === 0 && <p>No messages</p>}
        {messageObjects.map((messageObject, index) =>
          <Message
            key={index}
            isImportant={messageObject.isImportant}
            message={messageObject.message}
            title={messageObject.title}
          />
        )}

        <div className="App__message-form">
          <MessageForm onSendMessage={handleSendMessage} />
        </div>

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
