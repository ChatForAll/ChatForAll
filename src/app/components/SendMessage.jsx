import React, { useState, useEffect, useRef } from "react";
import { db, messages_db } from "../../firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { debounce } from "lodash";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    const handleKDown = (e) => {
      if (e.shiftKey && e.key === "Escape") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };
    document.addEventListener("keydown", handleKDown);
  }, []);

  const debouncedSendMessage =  debounce(async (message) => {
    // event.preventDefault();
    if (message.trim() === "") {
      alert("Message cannot be empty!");
      return;
    }
    await addDoc(collection(db, messages_db), {
      text: message,
      name: "User",
      createdAt: serverTimestamp(),
    });
    setMessage("");
    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 200);
  }, 500);

  const sendMessage = (event) => {
    event.preventDefault();
    debouncedSendMessage(message); // Use the debounced function
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
      className="fixed bottom-0 w-full bg-[#e6e9ef] dark:bg-[#181825] px-7 py-5 flex"
      autoComplete="off"
    >
      <textarea
        id="messageInput"
        name="messageInput"
        className="h-10 p-2.5 rounded-l-xl font-sans border-none grow bg-[#313244] dark:bg-[#fab387] text-[#eff1f5] dark:text-[#11111b] text-base leading-none resize-none placeholder:text-[#eff1f5] dark:placeholder:text-[#1e1e2e] focus:ring focus:ring-[#1e66f5] dark:focus:ring-[#a6e3a1] focus:duration-1000 focus:outline-none ring-inset"
        placeholder="type message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button
        className="w-16 h-10 px-2.5 py-1 rounded-r-xl text-[#eff1f5] dark:text-[#1e1e2e] bg-[#1e66f5] dark:bg-[#a6e3a1] font-semibold"
        type="submit"
      >
        ➤
      </button>
    </form>
  );
};

export default SendMessage;
