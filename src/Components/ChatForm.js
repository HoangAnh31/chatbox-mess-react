import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const ChatForm = ({ user, onMessage }) => {
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleInput = (e) => {
    setIsDisabled(false);
    setValue(e.target.value);
  };

  const handleOnMessage = (e) => {
    e.preventDefault();
    const mess = { username: user.username, text: value };
    setValue("");
    onMessage(mess);
  };

  return (
    <div>
      <form className="input-group" onSubmit={handleOnMessage}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your message..."
          value={value}
          onChange={handleInput}
        />
        <div className="input-group-append">
          <button className="btn submit-button" disabled={isDisabled}>
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

ChatForm.propTypes = {
  user: PropTypes.object.isRequired,
  onMessage: PropTypes.func.isRequired,
};
export default ChatForm;
