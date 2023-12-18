"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import AdminMessage from "./AdminMessage";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe();
  }, []);

  const copyLastMessage = () => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage) {
      navigator.clipboard.writeText(lastMessage.text);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "c" || e.key === "C")) {
        e.preventDefault();
        copyLastMessage();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  }, [messages]);

  return (
    <>
      <div className="p-5 mb-16 text-[#4c4f69] dark:text-[#cad3f5]">
        <AdminMessage>
          Welcome to ChatForAll. Enjoy hassle-free chatting without
          authentication. Easily copy messages using the dedicated button.
          Messages auto-remove after 48 hours. Happy chatting 🚀
        </AdminMessage>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
      {/* <button onClick={copyLastMessage}>CopyLastMessage</button> */}
    </>
  );
};

export const DeleteMessages = async () => {
  const fortyEightHoursAgo = new Date();
  fortyEightHoursAgo.setHours(fortyEightHoursAgo.getHours() - 48);

  const delmsg = query(collection(db, "messages"), orderBy("createdAt", "asc"));

  const snapshot = await getDocs(delmsg);
  const batch = writeBatch(db);

  snapshot.forEach((doc) => {
    const createdAt = doc.data().createdAt.toDate();
    if (createdAt < fortyEightHoursAgo) {
      batch.delete(doc.ref);
    }
  });

  await batch.commit();
};

export default ChatBox;
