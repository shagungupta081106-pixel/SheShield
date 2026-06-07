import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";

function Support() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message !== "") {
      setChat([
        ...chat,
        "👩 User: " + message,
        "🤖 Support: Help is on the way!",
      ]);

      setMessage("");
    }
  };

  return (
    <>
      <Navbar />

      <div className="main-container">
        <h1 className="title">
          Support Chat
        </h1>

        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button
          className="sos-btn"
          onClick={sendMessage}
        >
          Send
        </button>

        <div className="card">
          <h3>💬 Chat Messages</h3>

          {chat.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Support;
<Footer />