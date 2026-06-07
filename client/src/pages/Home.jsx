import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Home() {
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [panicMode, setPanicMode] = useState(false);
  const [mapLink, setMapLink] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  const recognition =
    new SpeechRecognition();

  const handleSOS = () => {
    const time =
      new Date().toLocaleTimeString();

    navigator.geolocation.watchPosition(
      (position) => {
        const latitude =
          position.coords.latitude;

        const longitude =
          position.coords.longitude;

        setLocation(
          `Latitude: ${latitude}, Longitude: ${longitude}`
        );

        setMapLink(
          `https://www.google.com/maps?q=${latitude},${longitude}`
        );

        setMessage(
          `🚨 Live Tracking Active at ${time}`
        );
      },

      () => {
        alert("Location access denied");
      }
    );
  };

  const startVoiceSOS = () => {
    recognition.start();

    recognition.onresult = (
      event
    ) => {
      const text =
        event.results[0][0].transcript;

      if (
        text
          .toLowerCase()
          .includes("help")
      ) {
        alert(
          "🚨 Voice SOS Activated"
        );

        handleSOS();
      }
    };
  };

  return (
    <>
      <Navbar />

      <div
        className="main-container"
        style={{
          background: darkMode
            ? "#111"
            : "#ffe6ee",

          color: darkMode
            ? "white"
            : "black",

          minHeight: "100vh",
        }}
      >
        <h1 className="title">
          SheShield
        </h1>

        <p className="subtitle">
          Women Safety & Emergency
          Assistance Platform
        </p>

        <button
          className="sos-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode
            ? "☀️ Light Mode"
            : "🌙 Dark Mode"}
        </button>

        <button
          className="sos-btn"
          onClick={handleSOS}
        >
          🚨 SOS Emergency
        </button>

        <button
          className="sos-btn"
          onClick={startVoiceSOS}
        >
          🎙️ Voice SOS
        </button>

        <button
          className="sos-btn"
          onClick={() => {
            setPanicMode(true);

            alert(
              "🚨 Panic Mode Activated"
            );
          }}
        >
          ⚠️ Panic Mode
        </button>

        {panicMode && (
          <h2
            style={{
              color: "red",
              marginTop: "20px",
            }}
          >
            🚨 EMERGENCY MODE ACTIVE
          </h2>
        )}

        {message && (
          <p className="message">
            {message}
          </p>
        )}

        {location && (
          <p className="message">
            {location}
          </p>
        )}

        {mapLink && (
  <div
    style={{
      marginTop: "20px",
    }}
  >
    <iframe
      title="Google Map"

      width="90%"

      height="300"

      style={{
        border: "0",
        borderRadius: "20px",
      }}

      loading="lazy"

      allowFullScreen

      src={`https://maps.google.com/maps?q=${location}&z=15&output=embed`}
    ></iframe>
  </div>
)}

        <h2 className="features-title">
          Safety Features
        </h2>

        <div className="features">
          <div className="card">
            <h3>
              📍 Live Tracking
            </h3>

            <p>
              Real-time live location
              monitoring enabled.
            </p>
          </div>

          <div className="card">
            <h3>
              🎙️ Voice SOS
            </h3>

            <p>
              Activate emergency alerts
              using voice commands.
            </p>
          </div>

          <div className="card">
            <h3>
              👮 Nearby Help
            </h3>

            <p>
              Connect with nearby
              volunteers instantly.
            </p>
          </div>

          <div className="card">
            <h3>
              📞 Emergency Contacts
            </h3>

            <p>
              Alert trusted contacts
              quickly during danger.
            </p>
          </div>

          <div className="card">
            <h3>
              🌙 Smart Protection
            </h3>

            <p>
              Panic mode and smart
              safety system enabled.
            </p>
          </div>

          <div className="card">
            <h3>
              🗺️ Google Maps Support
            </h3>

            <p>
              Open real-time tracked
              location directly in maps.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;