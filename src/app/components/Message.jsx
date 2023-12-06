import React from "react";

const Message = ({ message }) => {
  return (
    <div className="chat-bubble">
      <img className="chat-img" src={message.avatar} alt="user avatar" />
      <p className="user-message">{message.text}</p>
    </div>
  );
};

export default Message;
