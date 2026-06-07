import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";

function Profile() {
  const [name, setName] = useState("Shagun Gupta");
  const [email, setEmail] = useState("shagun@gmail.com");
  const [phone, setPhone] = useState("+91 9876543210");

  return (
    <>
      <Navbar />

      <div className="main-container">
        <h1 className="title">
          User Profile
        </h1>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <button
          className="sos-btn"
          onClick={() =>
            alert("Profile Updated")
          }
        >
          Save Profile
        </button>

        <div className="features">
          <div className="card">
            <h3>👩 Name</h3>
            <p>{name}</p>
          </div>

          <div className="card">
            <h3>📧 Email</h3>
            <p>{email}</p>
          </div>

          <div className="card">
            <h3>📱 Phone</h3>
            <p>{phone}</p>
          </div>

          <div className="card">
            <h3>🛡️ Safety Status</h3>
            <p>Safe</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
<Footer />