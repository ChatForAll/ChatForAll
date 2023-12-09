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
      avatar:
        "https://cdn.pixabay.com/photo/2017/01/10/03/54/avatar-1968236_960_720.png",
      createdAt: serverTimestamp(),
    });
    setMessage("");
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 200);
  };

  return (
    <form
      onSubmit={(event) => sendMessage(event)}
      className="send-message"
      autoComplete="off"
    >
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        ref={inputRef}
      />
      <button type="submit">➤</button>
    </form>
  );
};

export default SendMessage;
