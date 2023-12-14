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
      class="fixed bottom-0 w-full bg-[#1f1d2e] px-7 py-5 flex"
      autoComplete="off"
    >
      <textarea
        id="messageInput"
        name="messageInput"
        class="h-10 p-2.5 rounded-l-xl font-sans border-none grow bg-[#fab387] text-[#1f1d2e] text-base leading-none resize-none placeholder:text-[#26233a] focus:ring focus:ring-[#94e2d5] focus:duration-1000 focus:outline-none ring-inset"
        placeholder="type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button
        class="w-16 h-10 px-2.5 py-1 rounded-r-xl text-[#242443] bg-[#94e2d5] font-semibold"
        type="submit"
      >
        ➤
      </button>
    </form>
  );
};

export default SendMessage;
