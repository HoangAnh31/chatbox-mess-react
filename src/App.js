import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./Components/ChatWindow";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const messagesInitial = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  const [messages, setMessages] = useState(messagesInitial);

  const handleMessage = (mess) => {
    setMessages((preState) => [...preState, mess]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        {users.map((user, index) => (
          <ChatWindow
            key={index}
            user={user}
            messages={messages}
            onMessage={handleMessage}
          ></ChatWindow>
        ))}
      </div>
    </div>
  );
};

export default App;
