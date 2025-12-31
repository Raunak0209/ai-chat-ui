export default function Message({ msg }) {
  return (
    <div className={`message ${msg.sender}`}>
      {msg.text}
    </div>
  );
}
