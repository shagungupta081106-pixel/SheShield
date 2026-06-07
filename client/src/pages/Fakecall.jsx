import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

function FakeCall() {
  const [calling, setCalling] =
    useState(false);

  return (
    <>
      <Navbar />

      <div className="main-container">
        <h1 className="title">
          Fake Emergency Call
        </h1>

        <p className="subtitle">
          Smart safety feature for
          uncomfortable situations
        </p>

        {!calling ? (
          <button
            className="sos-btn"
            onClick={() =>
              setCalling(true)
            }
          >
            📞 Start Fake Call
          </button>
        ) : (
          <div className="card">
            <h2>
              📲 Incoming Call...
            </h2>

            <h1
              style={{
                marginTop: "20px",
              }}
            >
              👩 Mom Calling
            </h1>

            <p
              style={{
                marginTop: "15px",
              }}
            >
              Pretend emergency call
              activated for safety.
            </p>

            <div
              style={{
                marginTop: "25px",
              }}
            >
              <button
                className="sos-btn"
                onClick={() =>
                  alert(
                    "📞 Call Answered"
                  )
                }
              >
                ✅ Accept
              </button>

              <button
                className="sos-btn"
                onClick={() =>
                  setCalling(false)
                }
              >
                ❌ Reject
              </button>
            </div>
          </div>
        )}

        <div className="features">
          <div className="card">
            <h3>
              📞 Smart Escape
            </h3>

            <p>
              Simulate a realistic
              incoming call instantly.
            </p>
          </div>

          <div className="card">
            <h3>
              🛡️ Safety Support
            </h3>

            <p>
              Useful during unsafe or
              uncomfortable situations.
            </p>
          </div>

          <div className="card">
            <h3>
              🚨 Quick Activation
            </h3>

            <p>
              Start fake calls with one
              tap for instant support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FakeCall;