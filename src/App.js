import logo from "./logo.svg";
import "./App.css";
import ChatWindow from "./Components/ChatWindow";
import { useEffect, useState } from "react";
import Game from "./Components/Game";
import Score from "./Components/Score";

const users = [{ username: "Amy" }, { username: "John" }];

const messagesInitial = [
  { username: "Amy", text: "Hi, Jon!" },
  { username: "Amy", text: "How are you?" },
  { username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
  const [messages, setMessages] = useState(messagesInitial);

  const [numQuestions, setNumQuestions] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);

  const handleMessage = (mess) => {
    setMessages((preState) => [...preState, mess]);
  };

  const handleAnswers = (boolAnswer) => {
    if (boolAnswer) setNumCorrect((preState) => preState + 1);
    setNumQuestions((preState) => preState + 1);
  };

  // useEffect(() => {
  //   handleAnswers();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo mx-auto" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>

      {/* Task 1: chatbox*/}
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

      <p className="w-[90%] h-2 bg-blue-400 my-8 mx-auto"></p>

      {/* Task 2: create a game display X+Y+Z=P*/}
      <div className="game">
        <h2>Mental Math</h2>
      </div>
      <Game onAnswer={handleAnswers}></Game>
      <Score numQuestions={numQuestions} numCorrect={numCorrect}></Score>
    </div>
  );
};

export default App;
