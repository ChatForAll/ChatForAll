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
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <AdminMessage>
          Welcome to ChatForAll. Enjoy hassle-free chatting without
          authentication. Easily copy messages using the dedicated button, and
          click the &apos;?&apos; button to reveal shortcuts. Messages auto-remove after
          48 hours. Happy chatting! 🚀
        </AdminMessage>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
};

export const DeleteMessages = async () => {
  // const fortyEightHoursAgo = new Date();
  // fortyEightHoursAgo.setHours(fortyEightHoursAgo.getHours() - 48);

  // const delmsg = query(collection(db, "messages"), orderBy("createdAt", "asc"));

  // const snapshot = await getDocs(delmsg);
  // const batch = writeBatch(db);

  // snapshot.forEach((doc) => {
  //   const createdAt = doc.data().createdAt.toDate();
  //   if (createdAt < fortyEightHoursAgo) {
  //     batch.delete(doc.ref);
  //   }
  // });

  // await batch.commit();
};

export default ChatBox;
