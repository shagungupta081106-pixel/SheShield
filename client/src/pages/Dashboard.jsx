import "../App.css";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [contact, setContact] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="main-container">
        <h1 className="title">
          Dashboard
        </h1>

        <p className="subtitle">
          Welcome to SheShield Safety Dashboard
        </p>

        <button
          className="sos-btn"
          onClick={() => {
            localStorage.clear();

            navigate("/login");
          }}
        >
          Logout
        </button>

        <input
          type="text"
          placeholder="Enter Emergency Contact"
          value={contact}
          onChange={(e) =>
            setContact(e.target.value)
          }
        />

        <button
          className="sos-btn"
          onClick={() => {
            if (contact !== "") {
              setContacts([
                ...contacts,
                contact,
              ]);

              setContact("");
            }
          }}
        >
          Add Contact
        </button>

        <div className="card">
          <h3>🚨 Recent Alerts</h3>

          <p>
            Emergency alert sent successfully
          </p>

          <p>
            Live location shared
          </p>

          <p>
            Nearby volunteers notified
          </p>
        </div>

        <div className="features">
          <div className="card">
            <h3>🚨 Active Alerts</h3>

            <p>
              2 emergency alerts active
            </p>
          </div>

          <div className="card">
            <h3>📍 Live Tracking</h3>

            <p>
              Location sharing enabled
            </p>
          </div>

          <div className="card">
            <h3>👮 Nearby Help</h3>

            <p>
              Volunteers available nearby
            </p>
          </div>

          <div className="card">
            <h3>📞 Trusted Contacts</h3>

            <p>
              Emergency contacts saved
            </p>
          </div>

          <div className="card">
            <h3>🛡️ Safety Status</h3>

            <p>
              You are currently safe
            </p>
          </div>

          <div className="card">
            <h3>🌙 Night Monitoring</h3>

            <p>
              Protection mode enabled
            </p>
          </div>

          <div className="card">
            <h3>📞 Saved Contacts</h3>

            {contacts.map(
              (item, index) => (
                <div key={index}>
                  <p>{item}</p>

                  <button
                    className="sos-btn"
                    style={{
                      padding: "8px 15px",
                      fontSize: "14px",
                    }}
                    onClick={() => {
                      const updatedContacts =
                        contacts.filter(
                          (_, i) =>
                            i !== index
                        );

                      setContacts(
                        updatedContacts
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;