import React, { useState } from "react";
import { db } from "../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    await addDoc(collection(db, "messages"), {
      text: message,
      name: "User",
      avatar: "https://storage.needpix.com/rsynced_images/avatar-1577909_1280.png",
      createdAt: serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={(event) => sendMessage(event)} className="send-message" autoComplete="off">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send ➤</button>
    </form>
  );
};

export default SendMessage;