import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

function AIChat() {
  const [message, setMessage] =
    useState("");

  const [reply, setReply] =
    useState("");

  const handleChat = () => {

    if (
      message
        .toLowerCase()
        .includes("help")
    ) {

      setReply(
        "🚨 Stay calm. Share your live location and contact emergency services immediately."
      );

    } else if (
      message
        .toLowerCase()
        .includes("unsafe")
    ) {

      setReply(
        "⚠️ Move to a crowded place and alert trusted contacts."
      );

    } else if (
      message
        .toLowerCase()
        .includes("night")
    ) {

      setReply(
        "🌙 Avoid isolated areas and keep your phone accessible."
      );

    } else {

      setReply(
        "🤖 Stay safe. Use SOS for emergency assistance."
      );
    }
  };

  return (
    <>
      <Navbar />

      <div className="main-container">

        <h1 className="title">
          AI Safety Chatbot
        </h1>

        <p className="subtitle">
          Smart assistant for safety guidance
        </p>

        <input
          type="text"
          placeholder="Ask safety question..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        />

        <button
          className="sos-btn"
          onClick={handleChat}
        >
          Ask AI
        </button>

        {reply && (
          <div className="card">
            <h3>🤖 AI Response</h3>

            <p>{reply}</p>
          </div>
        )}

      </div>
    </>
  );
}

export default AIChat;