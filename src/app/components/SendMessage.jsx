import React, { useState, useEffect, useRef } from "react";
import { db } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Message cannot be empty!");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: message,
      name: "User",
      createdAt: serverTimestamp(),
    });
    setMessage("");
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 200);
  };

  const handleKeyDown = (event) => {
    if (window.innerWidth > 768) {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage(event);
      }
    }
  };

  return (
    <form
      onSubmit={(event) => sendMessage(event)}
      className="send-message"
      autoComplete="off"
    >
      <textarea
        id="messageInput"
        name="messageInput"
        className="form-input__input"
        placeholder="type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button type="submit">➤</button>
    </form>
  );
};

export default SendMessage;
