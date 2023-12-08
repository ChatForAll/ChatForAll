import React, { useState } from "react";

const Message = ({ message }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="chat-bubble">
      <img className="chat-img" src={message.avatar} alt="user avatar" />
      <p className="user-message">{message.text}</p>
      <button className="copy-button" onClick={handleCopy} disabled={isCopied}>
        {isCopied ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#a6e3a1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.063 5.674a1 1 0 0 1 .263 1.39l-7.5 11a1 1 0 0 1-1.533.143l-4.5-4.5a1 1 0 1 1 1.414-1.414l3.647 3.646 6.82-10.002a1 1 0 0 1 1.39-.263Z" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#a6e3a1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2ZM8.535 4A3.998 3.998 0 0 1 12 2c1.48 0 2.773.804 3.465 2H17a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h1.535ZM8 6H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Message;
