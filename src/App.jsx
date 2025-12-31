import ChatBox from "./components/ChatBox";

export default function App() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2 className="logo">🤖 ChatUI</h2>
        <button className="new-chat">+ New Chat</button>

        <div className="chat-list">
          <div className="chat-item active">AI Assistant</div>
          <div className="chat-item">Interview Prep</div>
          <div className="chat-item">React Help</div>
        </div>
      </aside>

      <main className="main-chat">
        <ChatBox />
      </main>
    </div>
  );
}
