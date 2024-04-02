import React from "react";
import PropTypes from "prop-types";
import HistoryMessages from "./HistoryMessages";
import ChatForm from "./ChatForm";

const ChatWindow = ({ user, messages, onMessage }) => {
  return (
    <div className="chat-window">
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{user.username}</div>

      <HistoryMessages messages={messages} user={user}></HistoryMessages>
      <ChatForm user={user} onMessage={onMessage}></ChatForm>
    </div>
  );
};

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array,
  onMessage: PropTypes.func.isRequired,
};

export default ChatWindow;
