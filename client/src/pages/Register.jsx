import "../App.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import app from "../firebase";

function Register() {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleRegister = () => {
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(() => {
        alert("Registered Successfully");
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Navbar />

      <div className="main-container">
        <h1 className="title">
          Register
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="sos-btn"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </>
  );
}

export default Register;