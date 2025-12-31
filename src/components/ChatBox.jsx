import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import InputBox from "./InputBox";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you today?", sender: "bot" }
  ]);
  const endRef = useRef(null);

  const replies = [
    " Sorry This is a frontend-only demo🥺.",
  ];

  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { text, sender: "user" }]);

    setTimeout(() => {
      const reply = replies[Math.floor(Math.random() * replies.length)];
      setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
    }, 1000);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h3>AI Assistant</h3>
        <span className="status">● Online</span>
      </header>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}
        <div ref={endRef} />
      </div>

      <InputBox onSend={sendMessage} />
    </div>
  );
}
